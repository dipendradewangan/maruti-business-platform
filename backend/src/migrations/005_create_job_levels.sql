-- ============================================================
-- Migration: 005
-- Purpose:
-- Create job levels used to represent employee seniority
-- within the organization.
-- ============================================================

CREATE TABLE IF NOT EXISTS job_levels (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique internal code
    -- Examples: L1, L2, L3
    level_code VARCHAR(20) NOT NULL,

    -- Human-readable level name
    -- Examples: Executive, Manager, Director
    level_name VARCHAR(100) NOT NULL,

    -- Numeric hierarchy order.
    -- Higher value represents a higher organizational level.
    level_rank INT NOT NULL,

    -- Optional description of the level
    description VARCHAR(255) NULL,

    -- Controls whether this level is currently available
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record creation timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Record update timestamp
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Primary key
    PRIMARY KEY (id),

    -- Level code must be unique
    UNIQUE KEY uk_job_levels_level_code (level_code),

    -- Level name must be unique
    UNIQUE KEY uk_job_levels_level_name (level_name),

    -- Useful for hierarchy sorting
    INDEX idx_job_levels_rank (level_rank),

    -- Useful for active/inactive filtering
    INDEX idx_job_levels_is_active (is_active)
);