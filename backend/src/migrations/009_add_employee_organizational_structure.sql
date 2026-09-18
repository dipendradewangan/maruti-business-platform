-- ============================================================
-- Migration: 009
-- Purpose:
-- Add organizational structure references to employees.
--
-- Employee will be connected with:
-- 1. Branch
-- 2. Department
-- 3. Designation
-- 4. Reporting Manager
-- ============================================================

ALTER TABLE employees

    -- Department assigned to the employee
    ADD COLUMN department_id INT UNSIGNED NULL
        AFTER branch_id,

    -- Designation assigned to the employee
    ADD COLUMN designation_id INT UNSIGNED NULL
        AFTER department_id,

    -- Employee's direct reporting manager
    -- References another employee record
    ADD COLUMN reporting_manager_id INT UNSIGNED NULL
        AFTER designation_id,

    -- Department-based employee lookup
    ADD INDEX idx_employees_department_id (department_id),

    -- Designation-based employee lookup
    ADD INDEX idx_employees_designation_id (designation_id),

    -- Reporting hierarchy lookup
    ADD INDEX idx_employees_reporting_manager_id (reporting_manager_id);