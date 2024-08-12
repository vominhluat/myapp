const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/quiz")
const Schema = mongoose.Schema

const questionSchema = new Schema({
    grade: String,
    subject: String,
    lession: String,
    question: String,
    image: String,
    answer:[{content: String, correct: Boolean}]
},{collection: "question"})
const QuestionModel = mongoose.model("question", questionSchema)
module.exports = QuestionModel