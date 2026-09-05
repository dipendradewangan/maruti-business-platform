-- ============================================================
-- Migration: 012
-- Purpose:
-- Create Lead Follow-ups table for CRM Lead Management.
--
-- Relationship:
-- leads → lead_followups (1:N)
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

    -- Current follow-up status
    follow_up_status ENUM(
        'PENDING',
        'COMPLETED',
        'CANCELLED'
    ) NOT NULL DEFAULT 'PENDING',

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Indexes
    INDEX idx_lead_followups_lead_id (lead_id),
    INDEX idx_lead_followups_date (follow_up_date),
    INDEX idx_lead_followups_status (follow_up_status),

    -- Lead relationship
    CONSTRAINT fk_lead_followups_lead_id
        FOREIGN KEY (lead_id)
        REFERENCES leads(id)
);