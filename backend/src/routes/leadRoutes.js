const express = require("express");

const {
    createLeadController,
    getAllLeadsController,
    getLeadsByBranchController,
    getLeadByIdController,
    updateLeadController,
    updateLeadStatusController,
    deleteLeadController,
    createFollowUpController,
    getLeadFollowUpsController,
    updateFollowUpController,
} = require("../controllers/leadController");

const router = express.Router();


// ============================================================
// Lead APIs
// ============================================================

// Create Lead
router.post("/", createLeadController);

// Get All Leads
router.get("/", getAllLeadsController);

// Get Leads By Branch
router.get("/branch/:branchId", getLeadsByBranchController);

// Get Lead By ID
router.get("/:id", getLeadByIdController);

// Update Lead
router.put("/:id", updateLeadController);

// Update Lead Status
router.patch("/:id/status", updateLeadStatusController);

// Delete Lead
router.delete("/:id", deleteLeadController);


// ============================================================
// Lead Follow-up APIs
// ============================================================

// Create Follow-up
router.post("/:id/followups", createFollowUpController);

// Get Lead Follow-ups
router.get("/:id/followups", getLeadFollowUpsController);

// Update Follow-up
router.put("/followups/:id", updateFollowUpController);


module.exports = router;