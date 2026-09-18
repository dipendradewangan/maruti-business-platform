-- ============================================================
-- Migration: 008
-- Purpose:
-- Create designations used to define employee positions
-- within the organization.
--
-- This is a company-level master and is not branch-specific.
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

    -- Active/inactive status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Designation code must be unique
    UNIQUE KEY uk_designations_code (designation_code),

    -- Department lookup
    INDEX idx_designations_department_id (department_id),

    -- Job level lookup
    INDEX idx_designations_job_level_id (job_level_id),

    -- Active/inactive filtering
    INDEX idx_designations_is_active (is_active),

    -- Department relationship
    CONSTRAINT fk_designations_department_id
        FOREIGN KEY (department_id)
        REFERENCES departments(id),

    -- Job level relationship
    CONSTRAINT fk_designations_job_level_id
        FOREIGN KEY (job_level_id)
        REFERENCES job_levels(id)
);