// Import the Node.js file system module.
// It is used to read migration files from the migrations folder.
const fs = require("fs");

// Import the Node.js path module.
// It helps us create a safe path to the migrations directory.
const path = require("path");

// Import the MySQL connection pool.
// The migration runner will use this pool to execute SQL.
const { pool } = require("../config/db");


// =========================================================
// Migration Runner
// =========================================================
//
// This function checks all migration files and executes
// only the migrations that have not already been executed.
//
// This allows the database structure to be version-controlled
// and automatically updated when the application starts.
// =========================================================

const runMigrations = async () => {
  try {
    // -------------------------------------------------------
    // Step 1: Create migration tracking table
    // -------------------------------------------------------
    //
    // We need this table before checking which migrations
    // have already been executed.
    //
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        migration_name VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // -------------------------------------------------------
    // Step 2: Find migration files
    // -------------------------------------------------------

    // Build the absolute path of the migrations directory.
    const migrationsDirectory = path.join(
      __dirname,
      "../migrations"
    );

    // Read all files from the migrations directory.
    const migrationFiles = fs
      .readdirSync(migrationsDirectory)
      // Only process SQL migration files.
      .filter((file) => file.endsWith(".sql"))
      // Sort files so they execute in numerical order.
      .sort();

    // -------------------------------------------------------
    // Step 3: Get already executed migrations
    // -------------------------------------------------------

    const [executedMigrations] = await pool.query(
      "SELECT migration_name FROM schema_migrations"
    );

    // Convert migration names into a Set.
    // Set makes it easy and fast to check whether
    // a migration has already been executed.
    const executedMigrationNames = new Set(
      executedMigrations.map(
        (migration) => migration.migration_name
      )
    );

    // -------------------------------------------------------
    // Step 4: Execute pending migrations
    // -------------------------------------------------------

    for (const migrationFile of migrationFiles) {

      // Check whether this migration has already run.
      if (executedMigrationNames.has(migrationFile)) {

        // Migration already exists in the tracking table,
        // so we do not execute it again.
        console.log(
          `Migration already applied: ${migrationFile}`
        );

        continue;
      }

      // Build the complete path of the migration file.
      const migrationPath = path.join(
        migrationsDirectory,
        migrationFile
      );

      // Read the SQL file.
      const migrationSQL = fs.readFileSync(
        migrationPath,
        "utf8"
      );

      console.log(
        `Running migration: ${migrationFile}`
      );

      // Execute the migration SQL.
      await pool.query(migrationSQL);

      // Save the migration as successfully executed.
      await pool.query(
        `
        INSERT INTO schema_migrations (migration_name)
        VALUES (?)
        `,
        [migrationFile]
      );

      console.log(
        `Migration completed: ${migrationFile}`
      );
    }

    // All migrations have been processed.
    console.log("Database migrations completed successfully.");
  } catch (error) {

    // Display migration error.
    console.error(
      "Database migration failed:",
      error.message
    );

    // Throw the error so the application does not
    // continue starting with an incomplete database.
    throw error;
  }
};


// Export the migration runner so server.js
// can execute migrations during application startup.
module.exports = {
  runMigrations,
};