const express = require('express')

const router = express.Router()




router.get('/', (req,res)=>{
    console.log("get route for lead is working")
})



module.exports = router;