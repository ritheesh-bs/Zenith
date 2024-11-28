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
        ref={feedbackContainerRef} className="flex flex-col w-auto-full lg:w-[380px] gap-4 mx-4 lg:mx-auto p-6 bg-[#0B0B0B] border-[0.5px] border-[#222222] rounded-3xl white-shadow">
        <div className="flex flex-col gap-3 w-full">
            <FeedbackModalIcon />
            <p className="w-fit max-w-full break-words text-[#666666] prose prose-invert">
                Zenith cannot exist without your valuable feedbacks. It was made for you after all
            </p>
        </div>

        <textarea 
            className="p-3 w-full h-[150px] resize-none scrollbar-hide bg-[#060606] border-[0.5px] border-[#222222] rounded-2xl text-[#CCCCCC] focus:outline-none placeholder-[#444444]"
            type="text" 
            id='message' 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Please tell us how can we improve Zenith for you to feel even better?"
        />

        <Button label="Submit feedback" handleEvent={submitFeedback} isLoading={isLoading}/>
    </div>)
}