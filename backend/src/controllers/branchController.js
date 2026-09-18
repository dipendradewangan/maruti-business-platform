const { createBranchService, 
    getAllBranchesService, 
    getBranchByIdService,
    updateBranchService,
    updateBranchStatusService} = require("../services/branchService");


// Create Branch
const createBranchController = async (req, res) => {
    try {
        const branch = await createBranchService(req.body);

        res.status(201).json({
            success: true,
            message: "Branch created successfully",
            data: branch,
        });
    } catch (error) {
        console.error("Create Branch Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create branch",
            error: error.message,
        });
    }
};

// Get All Branches
const getAllBranchesController = async (req, res) => {
    try {
        const branches = await getAllBranchesService();

        res.status(200).json({
            success: true,
            data: branches,
        });
    } catch (error) {
        console.error("Get All Branches Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch branches",
            error: error.message,
        });
    }
};

// Get Branch By ID
const getBranchByIdController = async (req, res) => {
    try {
        const branchId = req.params.id;

        const branch = await getBranchByIdService(branchId);

        if (!branch) {
            return res.status(404).json({
                success: false,
                message: "Branch not found",
            });
        }

        res.status(200).json({
            success: true,
            data: branch,
        });
    } catch (error) {
        console.error("Get Branch By ID Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch branch",
            error: error.message,
        });
    }
};

// Update Branch
const updateBranchController = async (req, res) => {
    try {
        const branchId = req.params.id;

        const updated = await updateBranchService(
            branchId,
            req.body
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Branch not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Branch updated successfully",
        });
    } catch (error) {
        console.error("Update Branch Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update branch",
            error: error.message,
        });
    }
};

// Update Branch Status
const updateBranchStatusController = async (req, res) => {
    try {
        const branchId = req.params.id;
        const { is_active } = req.body;

        const updated = await updateBranchStatusService(
            branchId,
            is_active
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Branch not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Branch status updated successfully",
        });
    } catch (error) {
        console.error("Update Branch Status Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update branch status",
            error: error.message,
        });
    }
};

module.exports = {
    createBranchController,
    getAllBranchesController,
    getBranchByIdController,
    updateBranchController,
    updateBranchStatusController,
};