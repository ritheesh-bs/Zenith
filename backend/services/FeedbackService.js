const FeedbackModel = require("../models/FeedbackModel")

const FeedbackService = {
    newFeedback: async (message) => {
        try {
            const feedback = new FeedbackModel({ message })
            await feedback.save()
            return feedback
        } catch (error) {
            throw new Error(error)
        }
    },
}

module.exports = FeedbackService