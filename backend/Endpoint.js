const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const ChatRouter = require('./routes/ChatRouter')
const cors = require('cors');

const FeedbackRouter = require('./routes/FeedbackRouter');

dotenv.config()
const app = express()
const cred = process.env
  
app.use(cors({
    origin: cred.STATUS==='PRODUCTION'? cred.FRONTEND_URL : "http://localhost:3000", // Your frontend origin
    credentials: true // Allow cookies and other credentials
}));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true if using HTTPS
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: 'lax'
    }
}));

app.use(express.json());
app.use(ChatRouter);
app.use(FeedbackRouter);

// DB Connect
mongoose.connect(
        cred.STATUS === 'PRODUCTION' ? cred.DB_URL : cred.DB_LOCAL_URL)
    .then(() => console.log("Successfully Connected"))
    .catch((err) => console.log("Could not connect:", err));

app.listen(cred.PORT, () => {
    console.log(`Zenith is ready to listen at ${cred.PORT}`);
});