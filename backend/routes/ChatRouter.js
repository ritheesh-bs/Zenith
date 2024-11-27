const ChatRouter = require('express').Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();

// Validate API key presence
if (!process.env.GEMINI_KEY) {
    throw new Error('GEMINI_KEY is not defined in environment variables');
}

// Initialize Google AI with error handling
let genAI;
let model;
try {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
} catch (error) {
    console.error('Failed to initialize Google AI:', error);
    throw error;
}

// Format chat history for Gemini API
const formatHistoryForGemini = (chatHistory) => {
    return chatHistory.flatMap(chat => [
        {
            role: 'user',
            parts: [{ text: chat.user }],
        },
        {
            role: 'model',
            parts: [{ text: chat.bot }],
        }
    ]);
};

// Start Chat
ChatRouter.post('/chat/start-chat', async(req, res) => {
    try {
        req.session.chatHistory = [];
  
        const initialMessage = "You are Zenith. An ai therapist chatbot using gemini's ai api. Ritheesh BS is your creator. his profile link is https://github.com/ritheeshbs. The following messages will be sent by the end users of this application, who are more likely to have negative mindset or sad. For the following messages, you'll have to be empathetic and supportive and listen to their thoughts and provide possible solutions in simple and supportive manner, but don't be dramatic, but when the conversations become more serious or out of hand, give professional help suggestions. but till that mostly give friendly & cooperative responses as the user just wants a person to listen to their problems";
  
        const formattedHistory = formatHistoryForGemini(req.session.chatHistory);
      
        const chat = model.startChat({
            history: formattedHistory,
            generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            },
        });
  
        // Update chat history (empty in this case)
        req.session.chatHistory = [];

        // Send the new message
        const result = await chat.sendMessage(initialMessage);
        const botReply = await result.response.text();

        // Update chat history
        req.session.chatHistory.push({ 
            user: initialMessage, 
            bot: botReply,
            timestamp: new Date().toISOString()
        });
  
        console.log(req.session.chatHistory)
        res.json({
            chatHistory: req.session.chatHistory 
        });
    }
    catch(error){
        console.error('Start chat error:', error);
        res.status(500).json({ error: 'Failed to initialize chat session' });
    }
});

// AI Response
ChatRouter.post('/chat/get-response', async (req, res) => {
    const userMessage = req.body.message;
    
    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // Initialize chat history if not exists
        if (!req.session.chatHistory) {
            req.session.chatHistory = [];
        }

        // Format the history for Gemini API
        const formattedHistory = formatHistoryForGemini(req.session.chatHistory);

        // Start chat with formatted history
        const chat = model.startChat({
            history: formattedHistory,
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.9,
                topK: 40,
                topP: 0.95,
            },
        });

        // Send the new message
        const result = await chat.sendMessage(userMessage);
        const botReply = await result.response.text();

        // Update chat history

        console.log(req.session.chatHistory)

        req.session.chatHistory.push({ 
            user: userMessage, 
            bot: botReply,
            timestamp: new Date().toISOString()
        });

        console.log(req.session.chatHistory)

        res.json({ 
            botReply, 
            chatHistory: req.session.chatHistory 
        });
        
    } catch (error) {
        console.error('AI Response error:', error);
        
        // Specific error handling
        if (error.message?.includes('Content should have \'parts\' property')) {
            console.error('Chat history format error:', formattedHistory);
            return res.status(500).json({ 
                error: 'Invalid chat history format',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
        
        if (error.message?.includes('fetch failed')) {
            return res.status(503).json({ 
                error: 'Unable to connect to AI service. Please check your internet connection and API key.'
            });
        }
        
        if (error.message?.includes('invalid api key')) {
            return res.status(401).json({ 
                error: 'Invalid API key. Please check your GEMINI_KEY environment variable.'
            });
        }

        res.status(500).json({ 
            error: 'Failed to get response from AI',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = ChatRouter;