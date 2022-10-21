const express = require('express')
const router = new express.Router()
const userModel = require('../models/user-model')

// get all user
router.get('/users', async (req,res) => {
    try{
        const response = await userModel.find({},{password:0}) //Retrieve the all documents instance from database-collection but no password.
        console.log(response)
        res.send(response)
    }
    catch(error){
        console.log(error)
    }
})

// get a user
router.get('/user/:id', async (req,res) => {
    // console.log(req.params)
    // res.send(req.params)
    try{
        const response = await userModel.findById({_id: req.params.id}) //Retrieve the a document instance from database-collection.
        console.log(response)
        res.send(response)
    }
    catch(error){
        console.log(error)
    }
})

// delete a user
router.delete('/delete-user/:id', async (req,res) => {
    try{
        const response = await userModel.deleteOne({_id: req.params.id}) //Delete the instanced document into database-collection.
        console.log(response)
        res.send(response)
    }
    catch(error){
        console.log(error)
    }
})

// create new user
router.post('/create-user', async (req,res) => {
    const newUserDocument = new userModel(req.body) //instance new document with mongoose_model and save it in database.
    try{
        const response = await newUserDocument.save() //Save the instanced document into database-collection.
        console.log(response)
        res.send(response)
    }
    catch(error){
        res.send(error)
    }
})

// update new user
router.patch('/update-user/:id', async (req,res) => {
    try{
        const response = await userModel.findByIdAndUpdate({_id: req.params.id}, req.body)
        console.log(response)
        res.send(response)
    }
    catch(error){
        res.send(error)
    }
})

// login user
router.post('/login-user', async (req,res) => {
    try{
        const requestedEmail = req.body.email
        const requestedPassword = req.body.password
        const response = await userModel.findOne({email: requestedEmail})
        if(response==null){
            throw "Invalid Creadentials"
        }
        if(response.password == requestedPassword){
            console.log("Logged In!")
            res.json({logged:true})
        }else{
            throw "Invalid Creadentials"
        }
    }
    catch(error){
        console.log(error)
        res.json({logged:false})
    }
})

module.exports = router