const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const bodyPasrser = require('body-parser')
const Contactform = require('../models/contactModel')

router.use(bodyPasrser.json());
router.use(bodyPasrser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    var temp = new Contactform({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    });
    
    temp.save(function (error,result) {
        if (error) {
            return res.json(
                {
                    status:false,
                    error:error
                }
            )
        }

        return res.json(
            {
                status:true,
                result:result
            }
        )
    })
}
);
module.exports = router;