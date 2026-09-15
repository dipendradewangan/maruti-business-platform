const { createLeadService,
    getAllLeadService,
    getLeadByIdService,
    updateLeadService,
    updateLeadStatusService,
    createFollowUpService,
    getLeadFollowUpsService,
    updateFollowUpService
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

// Get All Leads
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


// Get Lead By ID
const getLeadByIdController = async (req, res) => {
    try {
        const leadId = req.params.id;

        const lead = await getLeadByIdService(leadId);
        if (!lead) {
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
    catch (error) {

        console.error("Get Lead By Id Error: ", error)
        res.status(500).json({
            success: false,
            message: "Failed to fetch Lead By Id"
        })
    }

};


// Update Lead
const updateLeadController = async (req, res) => {
    try {
        const leadId = req.params.id;

        const updated = await updateLeadService(leadId, req.body);

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Lead not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Lead updated Successfully",
        })
    }

    catch (error) {
        console.error("Update Lead Error: ", error)
        res.status(500).json({
            success: false,
            message: "Failed to update Lead",
            error: error.message
        })
    }
}


// Update Lead Status
const updateLeadStatusController = async (req, res) => {


    try {
        const leadId = req.params.id;

        const { status } = req.body;

        console.log(req.body)
        const updated = await updateLeadStatusService(leadId, status);

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Lead Not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Lead Status Updated Successfully",
        })
    }

    catch (error) {

        console.error("Update Lead Status Error: ", error)

        res.status(500).json({
            success: false,
            message: "Failed to Update lead Status!",
            error: error.message
        })
    }
}

// Create Follow-up
const createFollowUpController = async (req, res) => {
    try {
        const leadId = req.params.id

        const followUp = await createFollowUpService(leadId, req.body);

        res.status(201).json({
            success: true,
            message: "Follow-up Created Successfully!",
            data: followUp
        })
    }
    catch (error) {
        console.error("Create Follow-up Error: ", error);

        res.status(500).json({
            success: false,
            message: "Failed to create follow-up",
            error: error.message,
        });
    }
}



// Get Lead Follow-ups
const getLeadsFollowUpsController = async (req, res)=>{
    try{
        const leadId = req.params.id;

        const followUps = await getLeadFollowUpsService(leadId)

        res.status(200).json({
            success: true,
            data: followUps
        })
    }
    catch(error){
        console.error("Get Leads Follow-ups Error: ",error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Follow Ups",
            error: error.message
        })
    }
}


// Update Follow-up
const updateFollowUpController = async (req, res)=>{

    try{
        const followUpId = req.params.id;

        const updated = await updateFollowUpService(followUpId, req.body)

        if(!updated){
            return res.status(404).json({
                success: false,
                message: "Follow Up Not Found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Follow Up Created Successfully",
        })
    }

    catch(error){
        console.error("Update Follow Up Error: ", error )

        res.status(500).json({
            success: false,
            message: "Failed to update Follow-up",
            error: error.message
        })
    }
}






module.exports = {
    createLeadController,
    getAllLeadController,
    getLeadByIdController,
    updateLeadController,
    updateLeadStatusController,
    createFollowUpController,
    getLeadsFollowUpsController,
    updateFollowUpController
}