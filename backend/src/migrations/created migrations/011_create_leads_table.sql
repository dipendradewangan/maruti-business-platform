-- ============================================================
-- Migration: 011
-- Purpose:
-- Create Leads table for CRM Lead Management.
--
-- Relationship:
-- master_requirement_types → leads (1:N)
-- ============================================================

CREATE TABLE leads (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    -- Basic lead information
    lead_name VARCHAR(150) NOT NULL,

    -- Primary contact number
    mobile_number VARCHAR(20) NOT NULL,

    -- Lead location
    location VARCHAR(255) NULL,

    -- Source from which the lead was received
    lead_source VARCHAR(50) NULL,

    -- Requirement classification
    requirement_type_id INT UNSIGNED NOT NULL,

    -- Detailed requirement provided by the lead
    requirement_details TEXT NULL,

    -- Current lead status
    status ENUM(
        'NEW',
        'CONTACTED',
        'INTERESTED',
        'QUALIFIED',
        'FOLLOW-UP',
        'NOT INTERESTED',
        'CONVERTED'
    ) NOT NULL DEFAULT 'NEW',

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Indexes
    INDEX idx_leads_mobile_number (mobile_number),
    INDEX idx_leads_status (status),
    INDEX idx_leads_lead_source (lead_source),
    INDEX idx_leads_requirement_type_id (requirement_type_id),

    -- Requirement Type relationship
    CONSTRAINT fk_leads_requirement_type_id
        FOREIGN KEY (requirement_type_id)
        REFERENCES master_requirement_types(id)
);