-- ============================================================
-- Migration: 011
-- Purpose:
-- Create Requirement Type Master for CRM Lead Management.
--
-- This is a company-level master and is not branch-specific.
-- ============================================================

CREATE TABLE IF NOT EXISTS master_requirement_types (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique requirement type code
    -- Examples: SOLAR-INSTALL, SOLAR-MAINT
    code VARCHAR(50) NOT NULL,

    -- Display name
    -- Examples: Solar Installation, Solar Maintenance
    name VARCHAR(100) NOT NULL,

    -- Optional description
    description VARCHAR(255) NULL,

    -- Active/inactive status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Requirement type code must be unique
    UNIQUE KEY uk_master_requirement_types_code (code),

    -- Active/inactive filtering
    INDEX idx_master_requirement_types_is_active (is_active)
);