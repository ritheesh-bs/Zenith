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
            const response = await fetch("http://localhost:8000/chat/start-chat", {
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
            const response = await fetch("http://localhost:8000/chat/get-response", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: prompt }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setChatResponse(data.botReply);
            setChatHistory(data.chatHistory || []);
            setPrompt(""); // Clear input after sending
        } catch (err) {
            setError(err.message);
            console.error("Failed to get response:", err);
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
