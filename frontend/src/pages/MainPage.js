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
        <div className="relative flex flex-col h-dvh max-h-dvh w-auto-full lg:w-[700px] mx-2 lg:mx-auto space-y-2 z-10">
            {isStarted ? (
                <div className="flex flex-col h-dvh max-h-dvh w-full p-2 lg:p-4">
                    <div className="flex flex-1 overflow-y-auto p-4 scrollbar-hide">
                        {chatHistory && chatHistory.length > 1 
                            ? (
                                <ChatScreen chatHistory={chatHistory.slice(1)} />
                            ) 
                        :   (<div className="flex flex-col h-full w-auto-full items-center justify-center m-auto">
                                <CautionMessage />
                            </div>
                        )}
                    </div>
                    <div className="p-1">
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