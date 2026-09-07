const { createLeadService } = require('../services/leadService')

// ============================================================
// Lead Controller
// ============================================================


// ------------------------------------------------------------
// Create Lead
// ------------------------------------------------------------


const createLeadController = async (req, res) => {
    try {
        const lead = await createLeadService(req.body)
        res.status(201).json({
            success: true,
            message: "Lead Created Successfully",
            data: lead
        });
    }
    catch (error) {
        consol.error("Create Lead Error: ", error)
        res.status(500).json({
            success: false,
            message: "Failed to create Lead",
            error: error.message

        })
    }
}


const getAllLeadController = ()=>{
    console.log("this is lead controller")
}


module.exports = {
    createLeadController,
    getAllLeadController
}