-- ============================================================
-- Migration: 010
-- Purpose:
-- Create Requirement Type Master for CRM Lead Management.
--
-- This master allows the platform to support multiple
-- products/services without changing the leads table structure.
-- ============================================================

CREATE TABLE master_requirement_types (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    -- Unique code for the requirement type
    code VARCHAR(50) NOT NULL,

    -- Display name
    name VARCHAR(100) NOT NULL,

    -- Optional description
    description VARCHAR(255) NULL,

    -- Active/inactive status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Unique requirement type code
    UNIQUE KEY uk_master_requirement_types_code (code),

    -- Index for active/inactive filtering
    INDEX idx_master_requirement_types_is_active (is_active)
);





-- rough work for leads table, to be moved to a new migration file

-- CREATE TABLE master_requirement_types (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

--     -- Unique code for the requirement type
--     code VARCHAR(50) NOT NULL,

--     -- Display name
--     name VARCHAR(100) NOT NULL,

--     -- Optional description
--     description VARCHAR(255) NULL,

--     -- Active/inactive status
--     is_active BOOLEAN NOT NULL DEFAULT TRUE,

--     -- Record timestamps
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
--         ON UPDATE CURRENT_TIMESTAMP,

--     -- Unique requirement type code
--     UNIQUE KEY uk_master_requirement_types_code (code),

--     -- Index for active/inactive filtering
--     INDEX idx_master_requirement_types_is_active (is_active)
-- );