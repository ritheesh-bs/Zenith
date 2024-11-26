const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const FeedbackSchema = new mongoose.Schema({
    message: { type: String, default:"" },
}, { timestamps: true })

const FeedbackModel=mongoose.model("feedbacks", FeedbackSchema)
module.exports=FeedbackModel 