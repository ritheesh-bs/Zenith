import { useChat } from "../store/ChatStore"; // Updated import
import InputField from "../comps/misc/InputField";
import ChatScreen from "../comps/misc/ChatScreen";
import Welcome from "../comps/misc/Welcome";
import CautionMessage from "../comps/misc/CautionMessage";

export default function MainPage() {
    const {
        prompt,
        setPrompt,
        chatHistory,
        isLoading,
        error,
        isStarted,
        startChat,
        getResponse,
    } = useChat(); // Now using the shared context

    return (
        <div className="flex flex-col flex-1 w-auto-full lg:max-w-[700px] mx-auto space-y-4 z-1 relative p-4 lg:p-0">
            {isStarted ? (
                <div className="flex flex-col h-full w-auto-full p-9 gap-3">
                    {chatHistory && chatHistory.length > 1 ? (
                        <ChatScreen chatHistory={chatHistory.slice(1)} />
                    ) : (
                        <div className="flex flex-col h-full w-auto-full items-center justify-center">
                            <CautionMessage />
                        </div>
                    )}

                    <InputField
                        prompt={prompt}
                        setPrompt={setPrompt}
                        getResponse={getResponse}
                        isLoading={isLoading}
                    />
                </div>
            ) : (
                <Welcome startChat={startChat} isLoading={isLoading} />
            )}
        </div>
    );
}