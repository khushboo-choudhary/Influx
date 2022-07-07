const mongoose = require('mongoose')

const itemMasterSchema = mongoose.Schema({

    code : {type:String, required:true, unique:true},
    name : {type:String, required:true},
    unitPrice : {type:Number, required:true}

},{
    versionKey:false,
    timestamps:false
})

const itemMaster = mongoose.model('items', itemMasterSchema)

module.exports = itemMaster