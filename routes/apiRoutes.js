const express = require('express');
const router = express.Router();

//import controllers



//APTs 
router.get("/card-payment-details", (request,response) => {
    return response.json({
        name:"Kaveen",
        address:"Malabe"
    })
})

module.exports=router;