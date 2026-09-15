-- ============================================================
-- Migration: 013
-- Purpose:
-- Create Branch Master for multi-branch business operations.
--
-- Branch represents a physical/business operating location.
-- ============================================================

CREATE TABLE IF NOT EXISTS branches (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique branch code
    -- Examples: RPR, DMT, BIL
    branch_code VARCHAR(20) NOT NULL,

    -- Branch display name
    -- Examples: Raipur Branch, Dhamtari Branch
    branch_name VARCHAR(100) NOT NULL,

    -- Branch address details
    address TEXT NULL,

    city VARCHAR(100) NULL,

    state VARCHAR(100) NULL,

    pincode VARCHAR(10) NULL,

    -- Branch contact details
    phone VARCHAR(20) NULL,

    email VARCHAR(150) NULL,

    -- Controls whether the branch is available
    -- for normal business operations.
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Primary key
    PRIMARY KEY (id),

    -- Branch code must be unique
    UNIQUE KEY uk_branches_branch_code (branch_code),

    -- Branch name must be unique
    UNIQUE KEY uk_branches_branch_name (branch_name),

    -- Useful for active/inactive branch filtering
    INDEX idx_branches_is_active (is_active),

    -- Useful for city-based branch lookup
    INDEX idx_branches_city (city)
);