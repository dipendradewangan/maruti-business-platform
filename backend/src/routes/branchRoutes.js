const express = require("express");

const {
    createBranchController,
    getAllBranchesController,
    getBranchByIdController,
    updateBranchController,
    updateBranchStatusController,
} = require("../controllers/branchController");

const router = express.Router();

// Branch APIs
router.post("/", createBranchController);

router.get("/", getAllBranchesController);

router.get("/:id", getBranchByIdController);

router.put("/:id", updateBranchController);

router.patch("/:id/status", updateBranchStatusController);

module.exports = router;