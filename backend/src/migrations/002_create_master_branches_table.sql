-- ============================================================
-- Migration: 002
-- Purpose:
-- Create Branch Master for multi-branch business operations.
-- ============================================================

CREATE TABLE IF NOT EXISTS master_branches (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique internal branch code
    -- Examples: RPR, DMT, BIL
    branch_code VARCHAR(20) NOT NULL,

    -- Branch display name
    -- Examples: Raipur Branch, Dhamtari Branch
    branch_name VARCHAR(100) NOT NULL,

    -- Branch address
    address TEXT NULL,

    -- Branch city
    city VARCHAR(100) NULL,

    -- Branch state
    state VARCHAR(100) NULL,

    -- Branch postal/PIN code
    pincode VARCHAR(10) NULL,

    -- Branch contact number
    phone VARCHAR(20) NULL,

    -- Branch email address
    email VARCHAR(150) NULL,

    -- Controls whether the branch is available
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Branch code must be unique
    UNIQUE KEY uk_master_branches_branch_code (branch_code),

    -- Branch name must be unique
    UNIQUE KEY uk_master_branches_branch_name (branch_name),

    -- Active/inactive branch filtering
    INDEX idx_master_branches_is_active (is_active),

    -- City-based branch lookup
    INDEX idx_master_branches_city (city)
);