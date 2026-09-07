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



const getAllLeadService = async ()=>{
    const AllLeadQuery = `SELECT * FROM leads`;
    const leads = await pool.query(AllLeadQuery);
    console.log("leads: ", leads)
}

module.exports = {
    createLeadService,
    getAllLeadService
}