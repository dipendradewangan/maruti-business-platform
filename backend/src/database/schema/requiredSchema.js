// =========================================================
// Required Database Schema
// =========================================================
//
// This file defines the database objects that are required
// by the application.
//
// IMPORTANT:
// This is NOT the migration history.
//
// schema_migrations tells us which migrations were executed.
// This file tells us which database objects the application
// expects to exist.
//


const requiredSchema = {

    // -------------------------------------------------------
    // Required database tables
    // -------------------------------------------------------

    tables : [
        "schema_migrations",
        "users",
        "employees",
    ]
}

// Export required database schema.
module.exports = {
    requiredSchema
}