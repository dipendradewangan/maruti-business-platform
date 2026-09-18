const { pool } = require("../config/db");

// Create Requirement Type
const createRequirementTypeService = async (requirementData) => {
    const {
        code,
        name,
        description,
    } = requirementData;

    const [result] = await pool.query(
        `
        INSERT INTO master_requirement_types (
            code,
            name,
            description
        )
        VALUES (?, ?, ?)
        `,
        [
            code,
            name,
            description || null,
        ]
    );

    return {
        id: result.insertId,
        code,
        name,
        description: description || null,
        is_active: true,
    };
};


// Get All Requirement Types
const getAllRequirementTypesService = async () => {
    const [rows] = await pool.query(
        `
        SELECT
            id,
            code,
            name,
            description,
            is_active,
            created_at,
            updated_at
        FROM master_requirement_types
        ORDER BY id DESC
        `
    );

    return rows;
};


// Get Requirement Type By ID
const getRequirementTypeByIdService = async (requirementTypeId) => {
    const [rows] = await pool.query(
        `
        SELECT
            id,
            code,
            name,
            description,
            is_active,
            created_at,
            updated_at
        FROM master_requirement_types
        WHERE id = ?
        `,
        [requirementTypeId]
    );

    return rows[0] || null;
};


// Update Requirement Type
const updateRequirementTypeService = async (
    requirementTypeId,
    requirementData
) => {
    const {
        code,
        name,
        description,
    } = requirementData;

    const [result] = await pool.query(
        `
        UPDATE master_requirement_types
        SET
            code = ?,
            name = ?,
            description = ?
        WHERE id = ?
        `,
        [
            code,
            name,
            description || null,
            requirementTypeId,
        ]
    );

    return result.affectedRows > 0;
};


// Update Requirement Type Status
const updateRequirementTypeStatusService = async (
    requirementTypeId,
    isActive
) => {
    const [result] = await pool.query(
        `
        UPDATE master_requirement_types
        SET
            is_active = ?
        WHERE id = ?
        `,
        [
            isActive,
            requirementTypeId,
        ]
    );

    return result.affectedRows > 0;
};


// Delete Requirement Type
const deleteRequirementTypeService = async (requirementTypeId) => {
    const [result] = await pool.query(
        `
        DELETE FROM master_requirement_types
        WHERE id = ?
        `,
        [requirementTypeId]
    );

    return result.affectedRows > 0;
};


module.exports = {
    createRequirementTypeService,
    getAllRequirementTypesService,
    getRequirementTypeByIdService,
    updateRequirementTypeService,
    updateRequirementTypeStatusService,
    deleteRequirementTypeService,
};