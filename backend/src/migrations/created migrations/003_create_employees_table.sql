-- ============================================================
-- Migration: Create Employees Table
-- Project: Maruti Business Platform
-- Description: Stores employee/master information
-- ============================================================

CREATE TABLE IF NOT EXISTS employees (

    -- Primary key of the employee record
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique employee code used for internal identification
    -- Example: EMP001, EMP002, EMP003
    employee_code VARCHAR(50) NOT NULL,

    -- Employee first name
    first_name VARCHAR(100) NOT NULL,

    -- Employee last name
    last_name VARCHAR(100) NULL,

    -- Employee email address
    email VARCHAR(150) NULL,

    -- Employee mobile number
    phone VARCHAR(20) NULL,

    -- Date on which the employee joined the organization
    joining_date DATE NULL,

    -- Current employment status
    -- ACTIVE = currently working
    -- INACTIVE = temporarily/permanently inactive
    employment_status ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    -- Record creation timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Record update timestamp
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Primary key
    PRIMARY KEY (id),

    -- Employee code must be unique
    UNIQUE KEY uk_employees_employee_code (employee_code),

    -- Email can be searched efficiently
    INDEX idx_employees_email (email),

    -- Phone can be searched efficiently
    INDEX idx_employees_phone (phone),

    -- Useful for filtering active/inactive employees
    INDEX idx_employees_status (employment_status)
);