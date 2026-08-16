-- ============================================================
-- Migration: 004
-- Purpose:
-- Link application users with employee records.
-- ============================================================

ALTER TABLE users

    ADD CONSTRAINT fk_users_employee_id
    FOREIGN KEY (employee_id)
    REFERENCES employees(id);