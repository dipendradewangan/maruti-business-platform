-- ============================================================
-- Migration: 012
-- Purpose:
-- Create Leads table for CRM.
--
-- Each lead belongs to one branch.
-- Requirement type is optional.
--
-- Lead Address:
-- Customer/site address details are stored at lead level.
-- ============================================================

CREATE TABLE IF NOT EXISTS leads (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Branch to which this lead belongs
    branch_id INT UNSIGNED NOT NULL,

    -- Lead basic information
    lead_name VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NULL,
    email VARCHAR(150) NULL,

    -- Lead address
    address TEXT NULL,
    city VARCHAR(100) NULL,
    state VARCHAR(100) NULL,
    pincode VARCHAR(10) NULL,

    -- Requirement type
    requirement_type_id INT UNSIGNED NULL,

    -- Lead source
    source VARCHAR(100) NULL,

    -- Current lead status
    status ENUM(
        'NEW',
        'CONTACTED',
        'FOLLOW_UP',
        'QUALIFIED',
        'PROPOSAL',
        'NEGOTIATION',
        'WON',
        'LOST'
    ) NOT NULL DEFAULT 'NEW',

    -- Optional remarks
    remarks TEXT NULL,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Branch lookup
    INDEX idx_leads_branch_id (branch_id),

    -- Requirement type lookup
    INDEX idx_leads_requirement_type_id (requirement_type_id),

    -- Status filtering
    INDEX idx_leads_status (status),

    -- Phone lookup
    INDEX idx_leads_phone (phone),

    -- City lookup
    INDEX idx_leads_city (city),

    -- Pincode lookup
    INDEX idx_leads_pincode (pincode),

    -- Branch relationship
    CONSTRAINT fk_leads_branch_id
        FOREIGN KEY (branch_id)
        REFERENCES master_branches(id),

    -- Requirement type relationship
    CONSTRAINT fk_leads_requirement_type_id
        FOREIGN KEY (requirement_type_id)
        REFERENCES master_requirement_types(id)
);