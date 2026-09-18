const requirementTypeService = require("../services/requirementTypeService");

// Create Requirement Type
const createRequirementTypeController = async (req, res) => {
    try {
        const requirementType =
            await requirementTypeService.createRequirementTypeService(req.body);

        res.status(201).json({
            success: true,
            message: "Requirement type created successfully",
            data: requirementType,
        });
    } catch (error) {
        console.error("Create Requirement Type Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create requirement type",
            error: error.message,
        });
    }
};


// Get All Requirement Types
const getAllRequirementTypesController = async (req, res) => {
    try {
        const requirementTypes =
            await requirementTypeService.getAllRequirementTypesService();

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


// Get Requirement Type By ID
const getRequirementTypeByIdController = async (req, res) => {
    try {
        const requirementTypeId = req.params.id;

        const requirementType =
            await requirementTypeService.getRequirementTypeByIdService(
                requirementTypeId
            );

        if (!requirementType) {
            return res.status(404).json({
                success: false,
                message: "Requirement type not found",
            });
        }

        res.status(200).json({
            success: true,
            data: requirementType,
        });
    } catch (error) {
        console.error("Get Requirement Type Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch requirement type",
            error: error.message,
        });
    }
};


// Update Requirement Type
const updateRequirementTypeController = async (req, res) => {
    try {
        const requirementTypeId = req.params.id;

        const updated =
            await requirementTypeService.updateRequirementTypeService(
                requirementTypeId,
                req.body
            );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Requirement type not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Requirement type updated successfully",
        });
    } catch (error) {
        console.error("Update Requirement Type Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update requirement type",
            error: error.message,
        });
    }
};


// Update Requirement Type Status
const updateRequirementTypeStatusController = async (req, res) => {
    try {
        const requirementTypeId = req.params.id;
        const { is_active } = req.body;

        const updated =
            await requirementTypeService.updateRequirementTypeStatusService(
                requirementTypeId,
                is_active
            );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Requirement type not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Requirement type status updated successfully",
        });
    } catch (error) {
        console.error("Update Requirement Type Status Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update requirement type status",
            error: error.message,
        });
    }
};


// Delete Requirement Type
const deleteRequirementTypeController = async (req, res) => {
    try {
        const requirementTypeId = req.params.id;

        const deleted =
            await requirementTypeService.deleteRequirementTypeService(
                requirementTypeId
            );

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Requirement type not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Requirement type deleted successfully",
        });
    } catch (error) {
        console.error("Delete Requirement Type Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete requirement type",
            error: error.message,
        });
    }
};


module.exports = {
    createRequirementTypeController,
    getAllRequirementTypesController,
    getRequirementTypeByIdController,
    updateRequirementTypeController,
    updateRequirementTypeStatusController,
    deleteRequirementTypeController,
};