-- ============================================================
-- Migration: 008
-- Purpose:
-- Add organizational structure references to employees.
--
-- Employee will be connected with:
-- 1. Department
-- 2. Designation
-- 3. Reporting Manager
-- ============================================================

ALTER TABLE employees

    -- Department assigned to the employee
    ADD COLUMN department_id INT UNSIGNED NULL
        AFTER phone,

    -- Designation assigned to the employee
    ADD COLUMN designation_id INT UNSIGNED NULL
        AFTER department_id,

    -- Employee's direct reporting manager
    -- References another employee record.
    ADD COLUMN reporting_manager_id INT UNSIGNED NULL
        AFTER designation_id,

    -- Index for department-based employee lookups
    ADD INDEX idx_employees_department_id (department_id),

    -- Index for designation-based employee lookups
    ADD INDEX idx_employees_designation_id (designation_id),

    -- Index for reporting hierarchy lookups
    ADD INDEX idx_employees_reporting_manager_id (reporting_manager_id);