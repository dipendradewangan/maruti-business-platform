-- ============================================================
-- Migration: 013
-- Purpose:
-- Create Lead Follow-ups table for CRM.
--
-- Relationship:
-- leads → lead_followups (1:N)
--
-- Branch is derived through:
-- lead_followups → leads → branch_id
-- ============================================================

CREATE TABLE IF NOT EXISTS lead_followups (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Related lead
    lead_id INT UNSIGNED NOT NULL,

    -- Follow-up information
    follow_up_date DATETIME NOT NULL,

    follow_up_type ENUM(
        'CALL',
        'VISIT',
        'WHATSAPP',
        'EMAIL',
        'OTHER'
    ) NOT NULL,

    -- Discussion / conversation details
    discussion_remarks TEXT NULL,

    -- Next follow-up schedule
    next_follow_up_date DATETIME NULL,

    -- Follow-up status
    follow_up_status ENUM(
        'PENDING',
        'COMPLETED',
        'CANCELLED'
    ) NOT NULL DEFAULT 'PENDING',

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Lead lookup
    INDEX idx_lead_followups_lead_id (lead_id),

    -- Date-based follow-up lookup
    INDEX idx_lead_followups_date (follow_up_date),

    -- Status filtering
    INDEX idx_lead_followups_status (follow_up_status),

    -- Lead relationship
    CONSTRAINT fk_lead_followups_lead_id
        FOREIGN KEY (lead_id)
        REFERENCES leads(id)
        ON DELETE CASCADE
);