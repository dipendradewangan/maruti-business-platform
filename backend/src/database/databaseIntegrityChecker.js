// Import the MySQL connection pool.
// It will be used to inspect the actual database schema.
const { pool } = require("../config/db");


// Import the application's required database schema.
//
// This tells the integrity checker which database objects
// are expected to exist.
const {
    requiredSchema,
} = require("./schema/requiredSchema");


// =========================================================
// Database Integrity Checker
// =========================================================
//
// This function verifies that the actual database contains
// all required tables.
//
// IMPORTANT:
//
// Migration Runner:
//     Creates / changes database structure.
//
// Integrity Checker:
//     Only verifies the actual database structure.
//
// The integrity checker does NOT create or modify tables.
// =========================================================

const checkDatabaseIntegrity = async () => {

    try {

        // ---------------------------------------------------
        // Check required tables
        // ---------------------------------------------------

        for (const tableName of requiredSchema.tables) {

            // Check the actual MySQL database using
            // information_schema.
            const [rows] = await pool.query(
                `
                SELECT TABLE_NAME
                FROM information_schema.TABLES
                WHERE TABLE_SCHEMA = DATABASE()
                  AND TABLE_NAME = ?
                `,
                [tableName]
            );


            // ------------------------------------------------
            // Required table is missing
            // ------------------------------------------------

            if (rows.length === 0) {

                throw new Error(
                    `Required database table '${tableName}' does not exist.`
                );

            }

        }


        // ---------------------------------------------------
        // All required tables exist
        // ---------------------------------------------------

        console.log(
            "Database integrity check passed successfully."
        );

    }
    catch (error) {

        // Display integrity failure.
        console.error(
            "Database integrity check failed:",
            error.message
        );

        // Stop application startup.
        throw error;
    }

};


// Export the integrity checker.
module.exports = {
    checkDatabaseIntegrity,
};