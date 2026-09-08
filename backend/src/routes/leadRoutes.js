const express = require('express')

const router = express.Router()


const {
    createLeadController,
    getAllLeadController,
    getLeadByIdController
} = require('../controllers/leadController')



router.post('/', createLeadController)
router.get('/', getAllLeadController)
router.get('/:id', getLeadByIdController)



module.exports = router;