-- =========================================================
-- Migration: 001
-- Purpose:
-- Create the table used to track executed database migrations.
-- =========================================================

CREATE TABLE IF NOT EXISTS schema_migrations (
    -- Unique ID of the migration record
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    -- Migration file name
    -- Example: 001_create_schema_migrations.sql
    migration_name VARCHAR(255) NOT NULL UNIQUE,

    -- Date and time when the migration was executed
    executed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

