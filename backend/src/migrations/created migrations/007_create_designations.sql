-- ============================================================
-- Migration: 007
-- Purpose:
-- Create designations used to define employee positions
-- within the organization.
-- ============================================================

CREATE TABLE IF NOT EXISTS designations (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique internal designation code
    -- Examples: EXEC, TL, MGR, OPS-MGR
    designation_code VARCHAR(50) NOT NULL,

    -- Designation name
    -- Examples: Executive, Team Lead, Manager
    designation_name VARCHAR(100) NOT NULL,

    -- Department associated with this designation
    department_id INT UNSIGNED NULL,

    -- Job level associated with this designation
    job_level_id INT UNSIGNED NULL,

    -- Optional designation description
    description VARCHAR(255) NULL,

    -- Controls whether the designation is currently active
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record creation timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Record update timestamp
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Primary key
    PRIMARY KEY (id),

    -- Designation code must be unique
    UNIQUE KEY uk_designations_code (designation_code),

    -- Useful for designation lookup by department
    INDEX idx_designations_department_id (department_id),

    -- Useful for designation lookup by job level
    INDEX idx_designations_job_level_id (job_level_id),

    -- Useful for active/inactive filtering
    INDEX idx_designations_is_active (is_active)
);