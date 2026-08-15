// Load environment variables.
require("dotenv").config();


// Import Express application.
const app = require("./src/app");



// Import database functions.
const {
    createDatabaseIfNotExists,
    testDatabaseConnection,
} = require("./src/config/db");


// Import migration runner.
const {
    runMigrations,
} = require("./src/database/migrationRunner");


// Import database integrity checker.
const { checkDatabaseIntegrity } = require("./src/database/databaseIntegrityChecker")


// Application port.
const PORT = process.env.PORT || 5000;




// =========================================================
// Start Server
// =========================================================

const startServer = async () => {
    try {

        // -------------------------------------------------------
        // STEP 1
        // Make sure application database exists.
        // -------------------------------------------------------

        await createDatabaseIfNotExists();


        // -------------------------------------------------------
        // STEP 2
        // Test connection with application database.
        // -------------------------------------------------------

        await testDatabaseConnection();


        // -------------------------------------------------------
        // STEP 3
        // Run all pending database migrations.
        // -------------------------------------------------------

        await runMigrations();


        // -------------------------------------------------------
        // STEP 4
        // Validate actual database structure.
        // -------------------------------------------------------

        await checkDatabaseIntegrity();



        // -------------------------------------------------------
        // STEP 5
        // Start Express server.
        // -------------------------------------------------------

        app.listen(PORT, () => {

            console.log(
                `Maruti Business Platform API is running on port ${PORT}`
            );

        });

    }
    catch (error) {

        // If database creation, connection,
        // or migration fails, stop the application.

        console.error(
            "Failed to start server:",
            error.message
        );

        process.exit(1);
    }
}





// =========================================================
// Initialize Application
// =========================================================

startServer();