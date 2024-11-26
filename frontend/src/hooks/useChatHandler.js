import { useState } from "react";

export function useChat() {
    const [prompt, setPrompt] = useState("");
    const [chatResponse, setChatResponse] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

    const startChat = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch((process.env.REACT_APP_BACKEND_STATUS==='PRODUCTION'? process.env.REACT_APP_BACKEND_API : process.env.REACT_APP_LOCAL_BACKEND_API)+"/chat/start-chat", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setChatHistory(data.chatHistory || []);
            setIsStarted(true);
        } catch (err) {
            setError(err.message);
            console.error("Failed to start chat:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const getResponse = async () => {
        if (!prompt.trim()) return;
    
        setIsLoading(true);
        setError(null);
    
        try {
            await fetch(
                (process.env.REACT_APP_BACKEND_STATUS==='PRODUCTION' 
                    ? process.env.REACT_APP_BACKEND_API 
                    : process.env.REACT_APP_LOCAL_BACKEND_API) + "/chat/get-response", 
                {
                    method: "POST",
                    credentials: "include",
                    headers: { 
                        "Content-Type": "application/json",
                        // Add any additional headers if needed
                    },
                    body: JSON.stringify({ message: prompt }),
                }
            ).then((data)=>{
                setChatHistory(data.chatHistory || [])
                setPrompt("")
            }).catch((error)=>{
                console.error("Failed to get response:", error);
            });
    
        } catch (err) {
            console.error("Detailed error:", err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        prompt,
        setPrompt,
        chatResponse,
        chatHistory,
        isLoading,
        error,
        isStarted,
        startChat,
        getResponse,
    };
}
