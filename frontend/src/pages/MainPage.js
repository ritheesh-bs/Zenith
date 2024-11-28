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
        <div className="relative flex flex-col h-screen min-h-screen w-auto-full lg:w-[700px] mx-2 lg:mx-auto space-y-4 z-1 relative p-4 lg:p-0">
            {isStarted ? (
                <div className="flex h-screen flex-col w-auto-full lg:p-9 gap-4">
                    {chatHistory && chatHistory.length > 1 ? (
                        <ChatScreen chatHistory={chatHistory.slice(1)} />
                    ) : (
                        <div className="flex flex-col w-auto-full items-center flex-1 justify-center">
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