const FeedbackRouter = require('express').Router();
const FeedbackService = require('../services/FeedbackService')

FeedbackRouter.post('/feedback', async (req, res) => {
    try {
        const feedback = await FeedbackService.newFeedback(req.body.message)
        res.status(201).json(feedback)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = FeedbackRouter;