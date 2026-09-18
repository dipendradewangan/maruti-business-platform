-- ============================================================
-- Migration: 014
-- Purpose:
-- Create Branch Deletion Requests table.
--
-- Normal deletion:
-- Branch is scheduled for deletion after a grace period.
--
-- Force deletion:
-- Branch can be deleted immediately by Super Admin.
-- ============================================================

CREATE TABLE IF NOT EXISTS branch_deletion_requests (

    -- Primary key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Branch requested for deletion
    branch_id INT UNSIGNED NOT NULL,

    -- User who requested the deletion
    requested_by INT UNSIGNED NOT NULL,

    -- Deletion mode
    deletion_type ENUM(
        'NORMAL',
        'FORCE'
    ) NOT NULL DEFAULT 'NORMAL',

    -- What should happen with branch data
    data_action ENUM(
        'TRANSFER',
        'PERMANENT_DELETE'
    ) NOT NULL,

    -- Target branch when data is transferred
    target_branch_id INT UNSIGNED NULL,

    -- Scheduled deletion time
    scheduled_at DATETIME NULL,

    -- Actual execution time
    executed_at DATETIME NULL,

    -- Cancellation time
    cancelled_at DATETIME NULL,

    -- Current request status
    status ENUM(
        'PENDING',
        'COMPLETED',
        'CANCELLED',
        'FAILED'
    ) NOT NULL DEFAULT 'PENDING',

    -- Reason for deletion
    reason VARCHAR(500) NULL,

    -- Record timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    -- Branch lookup
    INDEX idx_branch_deletion_requests_branch_id (branch_id),

    -- Requester lookup
    INDEX idx_branch_deletion_requests_requested_by (requested_by),

    -- Status lookup
    INDEX idx_branch_deletion_requests_status (status),

    -- Scheduled deletion lookup
    INDEX idx_branch_deletion_requests_scheduled_at (scheduled_at),

    -- Branch relationship
    CONSTRAINT fk_branch_deletion_requests_branch_id
        FOREIGN KEY (branch_id)
        REFERENCES master_branches(id),

    -- Requester relationship
    CONSTRAINT fk_branch_deletion_requests_requested_by
        FOREIGN KEY (requested_by)
        REFERENCES users(id),

    -- Target branch relationship
    CONSTRAINT fk_branch_deletion_requests_target_branch_id
        FOREIGN KEY (target_branch_id)
        REFERENCES master_branches(id)
);