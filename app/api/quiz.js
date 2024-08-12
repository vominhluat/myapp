const express = require("express")
const routerQuiz = express.Router()
const QuestionModel = require("../models/Question")

routerQuiz.get("/question",(req,res)=>{
    res.json({question:"question",message:"message"})
})

routerQuiz.get("/questions",(req,res)=>{
    QuestionModel.find({}).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({message:"error", success: false})
    })
})

module.exports = routerQuiz