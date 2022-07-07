const express = require('express')

const Items = require('../models/Items.model')


const router = express.Router()



router.post('/items', async (req,res) => {

    try {
        const item = await Items.create(req.body)

        return res.send(item)

    } 
    catch (error) {
        return res.send(error.message)
    }

})



router.get('/itemmaster', async(req,res)=>{

    try {
        
        const itemsArray = await Items.find().lean().exec()
        return res.send(itemsArray)

    } 
    catch (error) {
        return res.send(error.message)
    }

})

module.exports = router