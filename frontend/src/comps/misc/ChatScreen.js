import { useEffect, useRef } from 'react';
import BotReply from "../messages/BotReply";
import MyMessage from "../messages/MyMessage";

export default function ChatScreen({ chatHistory }) {
    const messagesEndRef = useRef(null);
    const containerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll to bottom on new messages
    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    // Initial setup to display messages from bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col lg:p-4 flex-1 overflow-y-auto w-full scrollbar-hide text-sm scrollbar-hide"
            style={{ flexDirection: 'column-reverse' }}
        >
            <div ref={messagesEndRef} />
            <div className="flex flex-col gap-3">
                {chatHistory && chatHistory.map((chat, index) => (
                    <div key={index} className="flex flex-col gap-3 w-full">
                        <MyMessage message={chat.user} />
                        <BotReply message={chat.bot} time={chat.timestamp} />
                    </div>
                ))}
            </div>
        </div>
    );
}