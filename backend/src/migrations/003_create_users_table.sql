-- ============================================================
-- Migration: 003
-- Purpose:
-- Create application users/login accounts.
-- ============================================================

CREATE TABLE IF NOT EXISTS users (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Unique login ID used to log into the system
    login_id VARCHAR(100) NOT NULL,

    -- Securely hashed password
    password_hash VARCHAR(255) NOT NULL,

    -- Employee linked with this application user
    employee_id INT UNSIGNED NULL,

    -- Controls whether the user can access the application
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Login ID must be unique
    UNIQUE KEY uk_users_login_id (login_id),

    -- Employee lookup
    INDEX idx_users_employee_id (employee_id),

    -- Active/inactive filtering
    INDEX idx_users_is_active (is_active)
);