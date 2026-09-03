-- ============================================================
-- Migration: 011
-- Purpose:
-- Create Lead Management tables for CRM.
--
-- Tables:
-- 1. leads
-- 2. lead_followups
--
-- Relationships:
-- master_requirement_types → leads (1:N)
-- leads → lead_followups (1:N)
-- ============================================================


-- ============================================================
-- Table: leads
-- Purpose:
-- Store potential customer/lead information.
-- ============================================================ 


CREATE TABLE leads (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    -- Basic lead information
    lead_name VARCHAR(150) NOT NULL,

    -- primary contact number
    mobile_number VARCHAR(20) NOT NULL,

    -- Lead Location
    location VARCHAR(255) NULL,

    -- Source from which the lead was received
    lead_source VARCHAR(50) NULL,


    --requirement classification 
    requirement_type_id INT UNSIGNED NOT NULL,

    -- Detailed requirerment provided by the lead
    requirement_details TEXT NULL,

    -- Current lead status 
    status ENUM(
        'NEW', 
        'CONTACTED', 
        'INTRESTED', 
        'QUALIFIED', 
        'FOLLOW-UP', 
        'NOT-INTRESTED', 
        'CONVERTED',
        'LOST'
    ) NOT NULL DEFAULT 'NEW',

    -- Record timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes
    INDEX idx_leads_mobile_number (mobile_number),
    INDEX idx_leads_status (status),
    INDEX idx_leads_lead_source (lead_source),
    INDEX idx_leads_requirement_type_id (requirement_type_id),

    -- Requirement Type relationship
    CONSTRAINT fk_leads_requirement_type_id FOREIGN KEY (requirement_type_id) REFERENCES master_requirement_types(id)
)



-- ============================================================
-- Table: lead_followups
-- Purpose:
-- Store multiple follow-up records for each lead.
-- ============================================================


CREATE TABLE lead_followups (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    -- Reference to the lead 
    lead_id INT UNSIGNED NOT NULL,

    -- Date and time of the follow-up
    follow_up_date DATETIME NOT NULL,

    -- Follow-up type 
    follow_up_type ENUM(
        'CALL',
        'VISIT',
        'WHATSAPP',
        'OTHER'
    ) NOT NULL,

    -- Discussion details 
    discussion_remarks TEXT NULL,

    -- Planned next follow-up 
    next_follow_up_date DATETIME NULL,

    -- Current follow up status
    follow_up_status ENUM(
        'PENDING',
        'COMPLETED',
        'CANCELLED'
    ) NOT NULL DEFAULT 'PENDING',

    -- Record timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Indexes
    INDEX idx_lead_followups_lead_id (lead_id),
    INDEX idx_lead_followups_date (follow_up_date),
    INDEX idx_lead_followups_status (follow_up_status),

    -- Lead relationship
    CONSTRAINT fk_lead_followups_lead_id FOREIGN KEY (lead_id) REFERENCES leads(id)

)


-- ============================================================
-- Migration 011 completed
-- ============================================================


-- rough work for leads table, to be moved to a new migration file

-- -- ============================================================
-- -- Migration: 011
-- -- Purpose:
-- -- Create Lead Management tables for CRM.
-- --
-- -- Tables:
-- -- 1. leads
-- -- 2. lead_followups
-- --
-- -- Relationships:
-- -- master_requirement_types → leads (1:N)
-- -- leads → lead_followups (1:N)
-- -- ============================================================


-- -- ============================================================
-- -- Table: leads
-- -- Purpose:
-- -- Store potential customer/lead information.
-- -- ============================================================

-- CREATE TABLE leads (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

--     -- Basic lead information
--     lead_name VARCHAR(150) NOT NULL,

--     -- Primary contact number
--     mobile_number VARCHAR(20) NOT NULL,

--     -- Lead location
--     location VARCHAR(255) NULL,

--     -- Source from which the lead was received
--     lead_source VARCHAR(50) NULL,

--     -- Requirement classification
--     requirement_type_id INT UNSIGNED NOT NULL,

--     -- Detailed requirement provided by the lead
--     requirement_details TEXT NULL,

--     -- Current lead status
--     status ENUM(
--         'NEW',
--         'CONTACTED',
--         'INTERESTED',
--         'QUALIFIED',
--         'FOLLOW-UP',
--         'NOT INTERESTED',
--         'CONVERTED'
--     ) NOT NULL DEFAULT 'NEW',

--     -- Record timestamps
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
--         ON UPDATE CURRENT_TIMESTAMP,

--     -- Indexes
--     INDEX idx_leads_mobile_number (mobile_number),
--     INDEX idx_leads_status (status),
--     INDEX idx_leads_lead_source (lead_source),
--     INDEX idx_leads_requirement_type_id (requirement_type_id),

--     -- Requirement Type relationship
--     CONSTRAINT fk_leads_requirement_type_id
--         FOREIGN KEY (requirement_type_id)
--         REFERENCES master_requirement_types(id)
-- );


-- -- ============================================================
-- -- Table: lead_followups
-- -- Purpose:
-- -- Store multiple follow-up records for each lead.
-- -- ============================================================

-- CREATE TABLE lead_followups (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

--     -- Reference to the lead
--     lead_id INT UNSIGNED NOT NULL,

--     -- Date and time of the follow-up
--     follow_up_date DATETIME NOT NULL,

--     -- Follow-up type
--     follow_up_type ENUM(
--         'CALL',
--         'VISIT',
--         'WHATSAPP',
--         'OTHER'
--     ) NOT NULL,

--     -- Discussion details
--     discussion_remarks TEXT NULL,

--     -- Planned next follow-up
--     next_follow_up_date DATETIME NULL,

--     -- Current follow-up status
--     follow_up_status ENUM(
--         'PENDING',
--         'COMPLETED',
--         'CANCELLED'
--     ) NOT NULL DEFAULT 'PENDING',

--     -- Record timestamps
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
--         ON UPDATE CURRENT_TIMESTAMP,

--     -- Indexes
--     INDEX idx_lead_followups_lead_id (lead_id),
--     INDEX idx_lead_followups_date (follow_up_date),
--     INDEX idx_lead_followups_status (follow_up_status),

--     -- Lead relationship
--     CONSTRAINT fk_lead_followups_lead_id
--         FOREIGN KEY (lead_id)
--         REFERENCES leads(id)
-- );


-- -- ============================================================
-- -- Migration 011 completed
-- -- ============================================================