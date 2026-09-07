const express = require('express')

const router = express.Router()


const {createLeadController,
    getAllLeadController
} = require('../controllers/leadController')



router.post('/', createLeadController)
router.get('/', getAllLeadController)



module.exports = router;