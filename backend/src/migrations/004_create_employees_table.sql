-- ============================================================
-- Migration: 004
-- Purpose:
-- Create employee/master information.
--
-- Employee is assigned to one primary/current branch.
-- ============================================================

CREATE TABLE IF NOT EXISTS employees (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique employee code
    -- Examples: EMP001, EMP002
    employee_code VARCHAR(50) NOT NULL,

    -- Employee name
    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NULL,

    -- Contact information
    email VARCHAR(150) NULL,

    phone VARCHAR(20) NULL,

    -- Primary/current branch assigned to employee
    branch_id INT UNSIGNED NOT NULL,

    -- Date of joining
    joining_date DATE NULL,

    -- Employment status
    employment_status ENUM(
        'ACTIVE',
        'INACTIVE'
    ) NOT NULL DEFAULT 'ACTIVE',

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Employee code must be unique
    UNIQUE KEY uk_employees_employee_code (employee_code),

    -- Contact lookups
    INDEX idx_employees_email (email),

    INDEX idx_employees_phone (phone),

    -- Branch-based employee lookup
    INDEX idx_employees_branch_id (branch_id),

    -- Status filtering
    INDEX idx_employees_status (employment_status)
);