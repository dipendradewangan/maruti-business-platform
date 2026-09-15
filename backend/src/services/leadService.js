const { pool } = require('../config/db');


// ============================================================
// Lead Service
// ============================================================


// ------------------------------------------------------------
// Create Lead
// ------------------------------------------------------------


const createLeadService = async (leadData) => {
    const {
        lead_name,
        mobile_number,
        location,
        lead_source,
        requirement_type_id,
        requirement_details
    } = leadData;

    console.log(leadData)

    const insertLeadQuery = `
        INSERT INTO leads(
            lead_name,
            mobile_number,
            location,
            lead_source,
            requirement_type_id,
            requirement_details
        ) 
        VALUES(?,?,?,?,?,?)
    `;


    const values = [
        lead_name,
        mobile_number,
        location || null,
        lead_source || null,
        requirement_type_id,
        requirement_details || null
    ];

    const [result] = await pool.query(insertLeadQuery, values);

    // results shows
    // Lead created successfully: ResultSetHeader {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 1,
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0,
    //   changedRows: 0
    // }

    return {
        id: result.insertId,
        ...leadData
    }

}


// ------------------------------------------------------------
// Get All Leads
// ------------------------------------------------------------


const getAllLeadService = async () => {
    const AllLeadQuery = `
        select 
            l.id,
            l.lead_name,
            l.mobile_number,
            l.location,
            l.lead_name,
            l.lead_source,
            l.requirement_type_id,
            mrt.code AS requirement_type_code,
            mrt.name AS requirement_type_name,
            l.requirement_details,
            l.status,
            l.created_at,
            l.updated_at
        from leads as l
        inner join master_requirement_types mrt
        on l.requirement_type_id = mrt.id
    `;
    const [rows] = await pool.query(AllLeadQuery);
    return rows;
}



// ------------------------------------------------------------
// Get Lead By ID
// ------------------------------------------------------------

const getLeadByIdService = async (leadId) => {

    const getLeadByIdQuery = `
         SELECT
             l.id,
            l.lead_name,
            l.mobile_number,
            l.location,
            l.lead_source,
            l.requirement_type_id,
            mrt.code AS requirement_type_code,
            mrt.name AS requirement_type_name,
            l.requirement_details,
            l.status,
            l.created_at,
            l.updated_at
        FROM leads l
        INNER JOIN master_requirement_types mrt
        ON l.requirement_type_id = mrt.id
        WHERE l.id = ?
    `;
    const [rows] = await pool.query(getLeadByIdQuery, [leadId]);
    return rows[0] || null;
}



// ------------------------------------------------------------
// Update Lead
// ------------------------------------------------------------

const updateLeadService = async (leadId, leadData) => {
    const {
        lead_name,
        mobile_number,
        location,
        lead_source,
        requirement_type_id,
        requirement_details,

    } = leadData;

    const updateLeadQuery = `
        UPDATE leads
        SET
            lead_name = ?,
            mobile_number = ?,
            location = ?,
            lead_source = ?,
            requirement_type_id = ?,
            requirement_details = ?
        WHERE id = ?
    `;


    const [result] = await pool.query(updateLeadQuery, [
        lead_name,
        mobile_number,
        location || null,
        lead_source || null,
        requirement_type_id,
        requirement_details || null,
        leadId
    ]);

    return result.affectedRows > 0;
};



// ------------------------------------------------------------
// Update Lead Status
// ------------------------------------------------------------

const updateLeadStatusService = async (leadId, status) => {

    const updateLeadStatusQuery = `
        UPDATE leads SET status=? WHERE id=?
    `;

    const [result] = await pool.query(updateLeadStatusQuery, [status, leadId])

    console.log(result)
    return result.affectedRows > 0;


}



// ------------------------------------------------------------
// Create Lead Follow-up
// ------------------------------------------------------------

const createFollowUpService = async (leadId, followUpData) => {

    const {
        follow_up_date,
        follow_up_type,
        discussion_remarks,
        next_follow_up_date
    } = followUpData;


    const createFollowUpServiceQuery = `
        INSERT INTO lead_followups (
            lead_id,
            follow_up_date,
            follow_up_type,
            discussion_remarks,
            next_follow_up_date
        )
        VALUES (?, ?, ?, ?, ?)
        `;

    const [result] = await pool.query(createFollowUpServiceQuery, [leadId,
        follow_up_date,
        follow_up_type,
        discussion_remarks || null,
        next_follow_up_date || null
    ]);

    console.log(result)

}




// ------------------------------------------------------------
// Get Lead Follow-ups
// ------------------------------------------------------------

const getLeadFollowUpsService = async (leadId) => {

    const getLeadFollowUpQuery = `
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

    const [rows] = await pool.query(getLeadFollowUpQuery, [leadId]);


    return rows


}



// ------------------------------------------------------------
// Update Follow-up
// ------------------------------------------------------------

const updateFollowUpService = async (followUpId, followUpData) => {
    const {
        follow_up_date,
        follow_up_type,
        discussion_remarks,
        next_follow_up_date,
        follow_up_status,
    } = followUpData;

    const udpateFollowUpQuery = `
        UPDATE lead_followups
        SET
            follow_up_date = ?,
            follow_up_type = ?,
            discussion_remarks = ?,
            next_follow_up_date = ?,
            follow_up_status = ?
        WHERE id = ?
    `;

    const [result] = await pool.query(udpateFollowUpQuery, [
        follow_up_date,
        follow_up_type,
        discussion_remarks || null,
        next_follow_up_date || null,
        follow_up_status,
        followUpId
    ])


    return result.affectedRows > 0;

}



// ------------------------------------------------------------
// Get Requirement Types
// ------------------------------------------------------------


const getRequirementTypesService = async () => {

    const getRequirementTypeQuery = ` 
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
    

    const [rows] = await pool.query(getRequirementTypeQuery)

    return rows;
}

module.exports = {
    createLeadService,
    getAllLeadService,
    getLeadByIdService,
    updateLeadService,
    updateLeadStatusService,
    createFollowUpService,
    getLeadFollowUpsService,
    updateFollowUpService,
    getRequirementTypesService
}