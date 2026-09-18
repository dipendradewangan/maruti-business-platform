const { pool } = require("../config/db")



// Create Branch

const createBranchService = async (branchData) => {
    const {
        branch_code,
        branch_name,
        address,
        city,
        state,
        pincode,
        phone,
        email,
    } = branchData;


    const createBranchQuery = `
         INSERT INTO master_branches (
            branch_code,
            branch_name,
            address,
            city,
            state,
            pincode,
            phone,
            email
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;



    const [result] = await pool.query(createBranchQuery, [
        branch_code,
        branch_name,
        address || null,
        city || null,
        state || null,
        pincode || null,
        phone || null,
        email || null,
    ])


    return {
        id: result.insertId,
        ...branchData,
        isActive: true
    }
}


// Get All Branches
const getAllBranchesService = async () => {

    const getAllBranchQuery = `
        SELECT
            id,
            branch_code,
            branch_name,
            address,
            city,
            state,
            pincode,
            phone,
            email,
            is_active,
            created_at,
            updated_at
        FROM master_branches
        ORDER BY id DESC
    `;
    const [rows] = await pool.query(getAllBranchQuery)

    return rows;
}


// Get Branch By ID

const getBranchByIdService = async (branchId) => {

    const getBranchByIdQuery = `
         SELECT
            id,
            branch_code,
            branch_name,
            address,
            city,
            state,
            pincode,
            phone,
            email,
            is_active,
            created_at,
            updated_at
        FROM master_branches
        WHERE id = ?
    `

    const [rows] = await pool.query(getBranchByIdQuery, [branchId]);

    return rows[0] || null;
};



// Update Branch
const updateBranchService = async (branchId, branchData) => {
    const {
        branch_code,
        branch_name,
        address,
        city,
        state,
        pincode,
        phone,
        email,
    } = branchData;

    const updateBrnachQuery = `
        UPDATE master_branches
        SET
            branch_code = ?,
            branch_name = ?,
            address = ?,
            city = ?,
            state = ?,
            pincode = ?,
            phone = ?,
            email = ?
        WHERE id = ? 
    `

    const [result] = await pool.query(updateBrnachQuery, [
        branch_code,
        branch_name,
        address || null,
        city || null,
        state || null,
        pincode || null,
        phone || null,
        email || null,
        branchId,
    ]
    );

    return result.affectedRows > 0;
};




// Update Branch Status
const updateBranchStatusService = async (branchId, isActive) => {
    const updateBranchStatusQuery = `
        UPDATE branches
        SET is_active = ?
        WHERE id = ?
    `;

    const [result] = await pool.query(updateBranchStatusQuery,
        [isActive, branchId]
    );

    return result.affectedRows > 0;
};



module.exports = {
    createBranchService,
    getAllBranchesService,
    getBranchByIdService,
    updateBranchService,
    updateBranchStatusService,
};