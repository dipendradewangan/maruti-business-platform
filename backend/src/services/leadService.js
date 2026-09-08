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


const getLeadByIdService = async (leadId)=>{
  
    const getLeadByIdQuery = `Select * from leads where id = ?`;
    const [rows] = await pool.query(getLeadByIdQuery, [leadId]);
     return rows[0] || null;
}

module.exports = {
    createLeadService,
    getAllLeadService,
    getLeadByIdService
}