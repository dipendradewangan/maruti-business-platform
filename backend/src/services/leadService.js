const { pool } = require("../config/db");

// ============================================================
// Lead Service
// ============================================================


// ============================================================
// Create Lead
// ============================================================

const createLeadService = async (leadData) => {
    const {
        branch_id,
        lead_name,
        phone,
        email,
        address,
        city,
        state,
        pincode,
        requirement_type_id,
        source,
        remarks,
    } = leadData;

    const query = `
        INSERT INTO leads (
            branch_id,
            lead_name,
            phone,
            email,
            address,
            city,
            state,
            pincode,
            requirement_type_id,
            source,
            remarks
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        branch_id,
        lead_name,
        phone || null,
        email || null,
        address || null,
        city || null,
        state || null,
        pincode || null,
        requirement_type_id || null,
        source || null,
        remarks || null,
    ];

    const [result] = await pool.query(query, values);

    return {
        id: result.insertId,
        branch_id,
        lead_name,
        phone: phone || null,
        email: email || null,
        address: address || null,
        city: city || null,
        state: state || null,
        pincode: pincode || null,
        requirement_type_id: requirement_type_id || null,
        source: source || null,
        remarks: remarks || null,
        status: "NEW",
    };
};


// ============================================================
// Get All Leads
// ============================================================

const getAllLeadsService = async () => {

    const query = `
        SELECT
            l.id,
            l.branch_id,

            mb.branch_code,
            mb.branch_name,

            l.lead_name,
            l.phone,
            l.email,

            l.address,
            l.city,
            l.state,
            l.pincode,

            l.requirement_type_id,
            mrt.code AS requirement_type_code,
            mrt.name AS requirement_type_name,

            l.source,
            l.status,
            l.remarks,

            l.created_at,
            l.updated_at

        FROM leads l

        INNER JOIN master_branches mb
            ON l.branch_id = mb.id

        LEFT JOIN master_requirement_types mrt
            ON l.requirement_type_id = mrt.id

        ORDER BY l.id DESC
    `;

    const [rows] = await pool.query(query);

    return rows;
};


// ============================================================
// Get Leads By Branch
// ============================================================

const getLeadsByBranchService = async (branchId) => {

    const query = `
        SELECT
            l.id,
            l.branch_id,

            mb.branch_code,
            mb.branch_name,

            l.lead_name,
            l.phone,
            l.email,

            l.address,
            l.city,
            l.state,
            l.pincode,

            l.requirement_type_id,
            mrt.code AS requirement_type_code,
            mrt.name AS requirement_type_name,

            l.source,
            l.status,
            l.remarks,

            l.created_at,
            l.updated_at

        FROM leads l

        INNER JOIN master_branches mb
            ON l.branch_id = mb.id

        LEFT JOIN master_requirement_types mrt
            ON l.requirement_type_id = mrt.id

        WHERE l.branch_id = ?

        ORDER BY l.id DESC
    `;

    const [rows] = await pool.query(query, [branchId]);

    return rows;
};


// ============================================================
// Get Lead By ID
// ============================================================

const getLeadByIdService = async (leadId) => {

    const query = `
        SELECT
            l.id,
            l.branch_id,

            mb.branch_code,
            mb.branch_name,

            l.lead_name,
            l.phone,
            l.email,

            l.address,
            l.city,
            l.state,
            l.pincode,

            l.requirement_type_id,
            mrt.code AS requirement_type_code,
            mrt.name AS requirement_type_name,

            l.source,
            l.status,
            l.remarks,

            l.created_at,
            l.updated_at

        FROM leads l

        INNER JOIN master_branches mb
            ON l.branch_id = mb.id

        LEFT JOIN master_requirement_types mrt
            ON l.requirement_type_id = mrt.id

        WHERE l.id = ?
    `;

    const [rows] = await pool.query(query, [leadId]);

    return rows[0] || null;
};


// ============================================================
// Update Lead
// ============================================================

const updateLeadService = async (leadId, leadData) => {

    const {
        branch_id,
        lead_name,
        phone,
        email,
        address,
        city,
        state,
        pincode,
        requirement_type_id,
        source,
        remarks,
    } = leadData;

    const query = `
        UPDATE leads
        SET
            branch_id = ?,
            lead_name = ?,
            phone = ?,
            email = ?,
            address = ?,
            city = ?,
            state = ?,
            pincode = ?,
            requirement_type_id = ?,
            source = ?,
            remarks = ?
        WHERE id = ?
    `;

    const values = [
        branch_id,
        lead_name,
        phone || null,
        email || null,
        address || null,
        city || null,
        state || null,
        pincode || null,
        requirement_type_id || null,
        source || null,
        remarks || null,
        leadId,
    ];

    const [result] = await pool.query(query, values);

    return result.affectedRows > 0;
};


// ============================================================
// Update Lead Status
// ============================================================

const updateLeadStatusService = async (leadId, status) => {

    const query = `
        UPDATE leads
        SET
            status = ?
        WHERE id = ?
    `;

    const [result] = await pool.query(query, [
        status,
        leadId,
    ]);

    return result.affectedRows > 0;
};


// ============================================================
// Delete Lead
// ============================================================

const deleteLeadService = async (leadId) => {

    const query = `
        DELETE FROM leads
        WHERE id = ?
    `;

    const [result] = await pool.query(query, [leadId]);

    return result.affectedRows > 0;
};


// ============================================================
// Create Lead Follow-up
// ============================================================

const createFollowUpService = async (
    leadId,
    followUpData
) => {

    const {
        follow_up_date,
        follow_up_type,
        discussion_remarks,
        next_follow_up_date,
    } = followUpData;

    // --------------------------------------------------------
    // Check Lead Exists
    // --------------------------------------------------------

    const checkLeadQuery = `
        SELECT
            id
        FROM leads
        WHERE id = ?
    `;

    const [leadRows] = await pool.query(
        checkLeadQuery,
        [leadId]
    );

    if (leadRows.length === 0) {
        return null;
    }


    // --------------------------------------------------------
    // Create Follow-up
    // --------------------------------------------------------

    const query = `
        INSERT INTO lead_followups (
            lead_id,
            follow_up_date,
            follow_up_type,
            discussion_remarks,
            next_follow_up_date
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.query(query, [
        leadId,
        follow_up_date,
        follow_up_type,
        discussion_remarks || null,
        next_follow_up_date || null,
    ]);

    return {
        id: result.insertId,
        lead_id: leadId,
        follow_up_date,
        follow_up_type,
        discussion_remarks: discussion_remarks || null,
        next_follow_up_date: next_follow_up_date || null,
        follow_up_status: "PENDING",
    };
};


// ============================================================
// Get Lead Follow-ups
// ============================================================

const getLeadFollowUpsService = async (leadId) => {

    const query = `
        SELECT
            id,
            lead_id,
            follow_up_date,
            follow_up_type,
            discussion_remarks,
            next_follow_up_date,
            follow_up_status,
            created_at,
            updated_at

        FROM lead_followups

        WHERE lead_id = ?

        ORDER BY follow_up_date DESC
    `;

    const [rows] = await pool.query(query, [leadId]);

    return rows;
};


// ============================================================
// Update Follow-up
// ============================================================

const updateFollowUpService = async (
    followUpId,
    followUpData
) => {

    const {
        follow_up_date,
        follow_up_type,
        discussion_remarks,
        next_follow_up_date,
        follow_up_status,
    } = followUpData;

    const query = `
        UPDATE lead_followups
        SET
            follow_up_date = ?,
            follow_up_type = ?,
            discussion_remarks = ?,
            next_follow_up_date = ?,
            follow_up_status = ?
        WHERE id = ?
    `;

    const [result] = await pool.query(query, [
        follow_up_date,
        follow_up_type,
        discussion_remarks || null,
        next_follow_up_date || null,
        follow_up_status,
        followUpId,
    ]);

    return result.affectedRows > 0;
};


// ============================================================
// Get Active Requirement Types
// ============================================================

const getRequirementTypesService = async () => {

    const query = `
        SELECT
            id,
            code,
            name,
            description,
            is_active,
            created_at,
            updated_at

        FROM master_requirement_types

        WHERE is_active = TRUE

        ORDER BY name ASC
    `;

    const [rows] = await pool.query(query);

    return rows;
};


// ============================================================
// Export Services
// ============================================================

module.exports = {

    // Lead
    createLeadService,
    getAllLeadsService,
    getLeadsByBranchService,
    getLeadByIdService,
    updateLeadService,
    updateLeadStatusService,
    deleteLeadService,

    // Follow-up
    createFollowUpService,
    getLeadFollowUpsService,
    updateFollowUpService,

    // Requirement Type
    getRequirementTypesService,
};