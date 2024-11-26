import { useState } from "react";

export function useFeedback() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("default"); // 'default', 'success', 'error'
    const [isLoading, setIsLoading] = useState(false); // Tracks loading state explicitly

    // Modify submitFeedback to handle this more gracefully
    const submitFeedback = async () => {
        if (!message.trim()) {
            setStatus("error");
            return;
        }

        setIsLoading(true);
        setStatus("default");

        try {
            // Add a timeout to prevent hanging
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

            const response = await fetch(
                (process.env.REACT_APP_BACKEND_STATUS === 'PRODUCTION' 
                    ? process.env.REACT_APP_BACKEND_API 
                    : process.env.REACT_APP_LOCAL_BACKEND_API) + "/feedback", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message }),
                    signal: controller.signal // Add abort signal
                }
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setStatus("success");
            setMessage("");
            
            // Explicitly close modal after successful submission
            closeModal('feedbackModal');

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
