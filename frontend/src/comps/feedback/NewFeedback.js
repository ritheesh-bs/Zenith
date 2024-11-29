import { useEffect, useRef } from "react";
import FeedbackModalIcon from "../../assets/icons/FeedbackModalIcon";
import Button from "../misc/Button";
import { useModal } from "../../store/ModalStore";

export default function NewFeedback ({message, setMessage, submitFeedback, isLoading}){
    const feedbackContainerRef = useRef(null);
    const { closeModal } = useModal();

    const handleClickOutside = (event) => {
        if (feedbackContainerRef.current && !feedbackContainerRef.current.contains(event.target)) {
            closeModal('feedbackModal');
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (<div 
        ref={feedbackContainerRef} className="flex flex-col w-auto-full lg:w-[380px] gap-4 mx-4 lg:mx-auto p-6 bg-white-100 dark:bg-gray-400 border-[0.5px] border-slate-100 dark:border-gray-500 rounded-3xl white-shadow">
        <div className="flex flex-col gap-3 w-full">
            <FeedbackModalIcon />
            <p className="w-fit max-w-full break-words text-gray-800 dark:text-gray-800 prose prose-invert">
                Zenith cannot exist without your valuable feedbacks. It was made for you after all
            </p>
        </div>

        <textarea 
            className="p-3 w-full h-[150px] resize-none scrollbar-hide bg-white-200 dark:bg-gray-200 border-[0.5px] border-slate-100 dark:border-gray-500 rounded-2xl text-black dark:text-slate-200 focus:outline-none placeholder-slate-300 dark:placeholder-gray-700"
            type="text" 
            id='message' 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Please tell us how can we improve Zenith for you to feel even better?"
        />

        <Button label="Submit feedback" handleEvent={submitFeedback} isLoading={isLoading}/>
    </div>)
}