const express = require("express");

const {
    createRequirementTypeController,
    getAllRequirementTypesController,
    getRequirementTypeByIdController,
    updateRequirementTypeController,
    updateRequirementTypeStatusController,
    deleteRequirementTypeController,
} = require("../controllers/requirementTypeController");

const router = express.Router();

// Create
router.post("/", createRequirementTypeController);

// Get all
router.get("/", getAllRequirementTypesController);

// Get by ID
router.get("/:id", getRequirementTypeByIdController);

// Update
router.put("/:id", updateRequirementTypeController);

// Active / Inactive
router.patch("/:id/status", updateRequirementTypeStatusController);

// Delete
router.delete("/:id", deleteRequirementTypeController);

module.exports = router;