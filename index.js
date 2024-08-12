const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
app.use(bodyParser.urlencoded({extended:false}))
const routerQuiz = require("./app/api/quiz")




app.get("/",(req,res)=>{
    //res.send("Hello")
    fs.readFile("./app/view/index.html",function(err,data){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        return res.end()
    })
})
app.use("/api/quiz",routerQuiz)

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})