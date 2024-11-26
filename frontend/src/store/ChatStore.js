import React, { createContext, useContext } from 'react';
import { useChat as useChatHandler } from '../hooks/useChatHandler';

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
    const chatState = useChatHandler();
    
    return (
        <ChatContext.Provider value={chatState}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}