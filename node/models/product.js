const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const productSchema = new mongoose.Schema({

    ProductName:{
        type:String,   
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model('Product',productSchema)