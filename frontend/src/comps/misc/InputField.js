import { useState } from "react";
import SendIcon from "../../assets/icons/SendIcon";
import LoadingIcon from "../../assets/icons/LoadingIcon";

export default function InputField({prompt, setPrompt, getResponse, isLoading}) {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            getResponse();
        }
    }

    return (<div className="flex p-1 gap-2 w-full rounded-2xl bg-[#0B0B0B]/30 border-[0.5px] border-[#222222] items-center">
        <input
            className="flex-1 px-2.5 py-2 text-sm text-[#CCCCCC] bg-transparent border-0 focus:outline-none placeholder:text-[#333333]"
            name="input"
            id="prompt"
            autoComplete="off"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Feel free to share anything"
            disabled={isLoading}
        />

        {prompt &&
            <button
                className={`p-2 w-fit h-fit bg-white rounded-xl ${
                    isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
                onClick={getResponse}
                disabled={isLoading}
            >
            {isLoading 
                ?   <LoadingIcon /> 
                :   <SendIcon className="w-4 h-4" />
            }
            </button>
        }
    </div>)
}