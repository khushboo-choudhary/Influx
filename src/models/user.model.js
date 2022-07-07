const mongoose = require('mongoose')

const userCartSchema = mongoose.Schema({

    qty : {type:Number, required:true, unique:true}

},{
    versionKey:false,
    timestamps:false
})

const userCart = mongoose.model('userCart', userCartSchema)

module.exports = userCart;