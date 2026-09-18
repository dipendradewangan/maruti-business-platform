-- ============================================================
-- Migration: 005
-- Purpose:
-- Create relationship between application users and branches.
--
-- A user can have access to multiple branches.
-- A branch can have multiple users.
-- ============================================================

CREATE TABLE IF NOT EXISTS user_branches (

    -- Application user
    user_id INT UNSIGNED NOT NULL,

    -- Branch assigned to the user
    branch_id INT UNSIGNED NOT NULL,

    -- Record creation timestamp
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Prevent duplicate user-branch assignments
    PRIMARY KEY (user_id, branch_id),

    -- User lookup
    INDEX idx_user_branches_user_id (user_id),

    -- Branch lookup
    INDEX idx_user_branches_branch_id (branch_id),

    -- User relationship
    CONSTRAINT fk_user_branches_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    -- Branch relationship
    CONSTRAINT fk_user_branches_branch_id
        FOREIGN KEY (branch_id)
        REFERENCES master_branches(id)
        ON DELETE CASCADE
);