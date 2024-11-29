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

    return (<div className="flex p-1 gap-2 lg:w-full rounded-2xl bg-white-300 dark:bg-gray-400/30 border-[0.5px] border-slate-100 focus:border-black dark:border-gray-500 items-center">
        <input
            className="flex-1 px-2.5 py-2 text-sm text-black dark:text-slate-200 bg-transparent border-0 focus:outline-none placeholder:text-slate-300 placeholder:dark:text-gray-600"
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
                className={`group/send p-2 w-fit h-fit bg-black rounded-xl dark:bg-white-100`}
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