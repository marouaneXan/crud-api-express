const express =require('express')
const path =require('path')
const app=express()

//set static folder
app.use(express.static())
const PORT = process.env.PORT || 5000
app.listen(PORT ,()=>{
    console.log('Server starting on the PORT '+PORT)
})