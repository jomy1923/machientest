const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')



mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('CONNECTED TO MONGOOSE'); 
})
mongoose.connection.on('err',(err)=>{
    console.log('mongodb error',err);
})
require('./models/user')
require('./models/product')
app.use(express.json())
app.use(require('./routes/user'))
app.use(require('./routes/product'))




app.listen(PORT,()=>{
    console.log('SERVER RUNNING ON THE PORT',PORT)
})