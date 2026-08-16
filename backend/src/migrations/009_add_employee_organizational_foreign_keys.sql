-- ============================================================
-- Migration: 009
-- Purpose:
-- Add foreign key relationships for employee organizational
-- structure.
-- ============================================================

ALTER TABLE employees

    -- Employee belongs to a department
    ADD CONSTRAINT fk_employees_department_id
    FOREIGN KEY (department_id)
    REFERENCES departments(id),

    -- Employee has a designation
    ADD CONSTRAINT fk_employees_designation_id
    FOREIGN KEY (designation_id)
    REFERENCES designations(id),

    -- Employee can report to another employee
    ADD CONSTRAINT fk_employees_reporting_manager_id
    FOREIGN KEY (reporting_manager_id)
    REFERENCES employees(id);