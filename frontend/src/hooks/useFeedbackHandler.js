import { useState } from "react";

export function useFeedback() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("default"); // 'default', 'success', 'error'
    const [isLoading, setIsLoading] = useState(false); // Tracks loading state explicitly

    const submitFeedback = async (closeModalCallback) => {
        if (!message.trim()) {
            setStatus("error");
            return;
        }

        setIsLoading(true);
        setStatus("default"); // Reset status to default on new submission

        try {
            const response = await fetch("http://localhost:8000/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setStatus("success");
            setMessage(""); // Clear message on success

        } catch (error) {
            console.error("Failed to submit feedback:", error);
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    const resetFeedback = () => {
        setMessage("");
        setStatus("default");
        setIsLoading(false);
    };

    return {
        message,
        setMessage,
        status,
        isLoading,
        submitFeedback,
        resetFeedback,
    };
}
