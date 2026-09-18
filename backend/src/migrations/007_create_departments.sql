-- ============================================================
-- Migration: 007
-- Purpose:
-- Create departments used to organize employees by business
-- function or operational unit.
--
-- This is a company-level master and is not branch-specific.
-- ============================================================

CREATE TABLE IF NOT EXISTS departments (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique internal department code
    -- Examples: SALES, OPS, FINANCE
    department_code VARCHAR(50) NOT NULL,

    -- Department name
    -- Examples: Sales, Operations, Finance & Accounts
    department_name VARCHAR(100) NOT NULL,

    -- Optional department description
    description VARCHAR(255) NULL,

    -- Active/inactive status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Department code must be unique
    UNIQUE KEY uk_departments_department_code (department_code),

    -- Department name must be unique
    UNIQUE KEY uk_departments_department_name (department_name),

    -- Active/inactive filtering
    INDEX idx_departments_is_active (is_active)
);