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
    } = useChat();

    return (
        <div className="relative flex flex-col h-dvh w-dvd p-2 lg:w-[700px] mx-2 lg:mx-auto space-y-4 z-10">
            {isStarted ? (
                <div className="flex flex-col h-dvh w-full">
                    <div className="flex-1 overflow-y-auto p-4">
                        <ChatScreen chatHistory={chatHistory.slice(1)} />
                    </div>
                    <div className="p-4">
                        <InputField
                            prompt={prompt}
                            setPrompt={setPrompt}
                            getResponse={getResponse}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            ) : (
                <Welcome startChat={startChat} isLoading={isLoading} />
            )}
        </div>
    );
}