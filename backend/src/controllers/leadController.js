const { createLeadService,
    getAllLeadService,
    getLeadByIdService
} = require('../services/leadService')

// ============================================================
// Lead Controller
// ============================================================


// ------------------------------------------------------------
// Create Lead
// ------------------------------------------------------------

// create list
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

// all leads list
const getAllLeadController = async (req, res) => {
    try {
        const leads = await getAllLeadService()
        res.status(200).json({
            success: true,
            message: "Leads fetched successfully",
            data: leads
        })
    }
    catch (error) {
        console.error("Get All Leads Error: ", error)
        res.status(500).json({
            success: false,
            message: "Failed to fetch leads",
            error: error.message
        })
    }
}


// lead by id 
const getLeadByIdController = async (req, res) => {
    try {
        const leadId = req.params.id;

        const lead = await getLeadByIdService(leadId);
        if(!lead){
            return res.status(404).json({
                success: false,
                message: "Lead Not Found!"
            })
        }
        res.status(200).json({
            success: true,
            data: lead
        })
    }
    catch(error){

        console.error("Get Lead By Id Error: ", error)
        res.status(500).json({
            success : false,
            message : "Failed to fetch Lead By Id"
        })
    }

};


module.exports = {
    createLeadController,
    getAllLeadController,
    getLeadByIdController
}