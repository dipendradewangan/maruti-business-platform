const {
    createLeadService,
    getAllLeadsService,
    getLeadsByBranchService,
    getLeadByIdService,
    updateLeadService,
    updateLeadStatusService,
    deleteLeadService,

    createFollowUpService,
    getLeadFollowUpsService,
    updateFollowUpService,

    getRequirementTypesService,
} = require("../services/leadService");


// ============================================================
// Lead Controller
// ============================================================


// ============================================================
// Create Lead
// ============================================================

const createLeadController = async (req, res) => {
    try {

        const lead = await createLeadService(req.body);

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead,
        });

    } catch (error) {

        console.error("Create Lead Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create lead",
            error: error.message,
        });
    }
};


// ============================================================
// Get All Leads
// ============================================================

const getAllLeadsController = async (req, res) => {
    try {

        const leads = await getAllLeadsService();

        res.status(200).json({
            success: true,
            message: "Leads fetched successfully",
            data: leads,
        });

    } catch (error) {

        console.error("Get All Leads Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch leads",
            error: error.message,
        });
    }
};


// ============================================================
// Get Leads By Branch
// ============================================================

const getLeadsByBranchController = async (req, res) => {
    try {

        const branchId = req.params.branchId;

        const leads = await getLeadsByBranchService(branchId);

        res.status(200).json({
            success: true,
            message: "Branch leads fetched successfully",
            data: leads,
        });

    } catch (error) {

        console.error("Get Leads By Branch Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch branch leads",
            error: error.message,
        });
    }
};


// ============================================================
// Get Lead By ID
// ============================================================

const getLeadByIdController = async (req, res) => {
    try {

        const leadId = req.params.id;

        const lead = await getLeadByIdService(leadId);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            data: lead,
        });

    } catch (error) {

        console.error("Get Lead By ID Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch lead",
            error: error.message,
        });
    }
};


// ============================================================
// Update Lead
// ============================================================

const updateLeadController = async (req, res) => {
    try {

        const leadId = req.params.id;

        const updated = await updateLeadService(
            leadId,
            req.body
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Lead updated successfully",
        });

    } catch (error) {

        console.error("Update Lead Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update lead",
            error: error.message,
        });
    }
};


// ============================================================
// Update Lead Status
// ============================================================

const updateLeadStatusController = async (req, res) => {
    try {

        const leadId = req.params.id;
        const { status } = req.body;

        const updated = await updateLeadStatusService(
            leadId,
            status
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Lead status updated successfully",
        });

    } catch (error) {

        console.error("Update Lead Status Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update lead status",
            error: error.message,
        });
    }
};


// ============================================================
// Delete Lead
// ============================================================

const deleteLeadController = async (req, res) => {
    try {

        const leadId = req.params.id;

        const deleted = await deleteLeadService(leadId);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Lead deleted successfully",
        });

    } catch (error) {

        console.error("Delete Lead Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete lead",
            error: error.message,
        });
    }
};


// ============================================================
// Create Follow-up
// ============================================================

const createFollowUpController = async (req, res) => {
    try {

        const leadId = req.params.id;

        const followUp = await createFollowUpService(
            leadId,
            req.body
        );

        if (!followUp) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(201).json({
            success: true,
            message: "Follow-up created successfully",
            data: followUp,
        });

    } catch (error) {

        console.error("Create Follow-up Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create follow-up",
            error: error.message,
        });
    }
};


// ============================================================
// Get Lead Follow-ups
// ============================================================

const getLeadFollowUpsController = async (req, res) => {
    try {

        const leadId = req.params.id;

        const followUps = await getLeadFollowUpsService(leadId);

        res.status(200).json({
            success: true,
            data: followUps,
        });

    } catch (error) {

        console.error("Get Lead Follow-ups Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch follow-ups",
            error: error.message,
        });
    }
};


// ============================================================
// Update Follow-up
// ============================================================

const updateFollowUpController = async (req, res) => {
    try {

        const followUpId = req.params.id;

        const updated = await updateFollowUpService(
            followUpId,
            req.body
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Follow-up not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Follow-up updated successfully",
        });

    } catch (error) {

        console.error("Update Follow-up Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update follow-up",
            error: error.message,
        });
    }
};


// ============================================================
// Get Active Requirement Types
// ============================================================

const getRequirementTypesController = async (req, res) => {
    try {

        const requirementTypes =
            await getRequirementTypesService();

        res.status(200).json({
            success: true,
            data: requirementTypes,
        });

    } catch (error) {

        console.error("Get Requirement Types Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch requirement types",
            error: error.message,
        });
    }
};


// ============================================================
// Export Controllers
// ============================================================

module.exports = {

    // Lead
    createLeadController,
    getAllLeadsController,
    getLeadsByBranchController,
    getLeadByIdController,
    updateLeadController,
    updateLeadStatusController,
    deleteLeadController,

    // Follow-up
    createFollowUpController,
    getLeadFollowUpsController,
    updateFollowUpController,

    // Requirement Type
    getRequirementTypesController,
};