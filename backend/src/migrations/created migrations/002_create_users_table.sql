-- ============================================================
-- Migration: Create Users Table
-- Project: Maruti Business Platform
-- Description: Stores application login/user accounts
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique login ID used by the employee to log into the system
    login_id VARCHAR(100) NOT NULL,

    -- Password will always be stored as a secure hash
    password_hash VARCHAR(255) NOT NULL,

    -- Employee linked with this application login
    employee_id INT UNSIGNED NULL,

    -- Controls whether the user can access the application
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record creation timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Record update timestamp
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- One login ID can belong to only one user
    UNIQUE KEY uk_users_login_id (login_id),

    -- Index for future employee-based lookups
    INDEX idx_users_employee_id (employee_id),

    -- Index for active/inactive user filtering
    INDEX idx_users_is_active (is_active)
);