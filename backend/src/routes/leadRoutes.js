const express = require('express')

const router = express.Router()


const {
    createLeadController,
    getAllLeadController,
    getLeadByIdController,
    updateLeadController,
    updateLeadStatusController,
    createFollowUpController,
    getLeadsFollowUpsController,
    updateFollowUpController
} = require('../controllers/leadController')



// lead apis
router.post('/', createLeadController)
router.get('/', getAllLeadController)
router.get('/:id', getLeadByIdController)
router.put('/:id', updateLeadController)
router.patch('/:id/status', updateLeadStatusController)


// follow up apis
router.post('/:id/followups', createFollowUpController)
router.get('/:id/followups', getLeadsFollowUpsController)

router.put("/followups/:id", updateFollowUpController)

module.exports = router;