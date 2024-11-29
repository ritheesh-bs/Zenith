import { useEffect, useRef } from "react";
import { useModal } from "../../store/ModalStore";
import HeartsIcon from "../../assets/icons/HeartsIcon";
import Button from "../misc/Button";

export default function FeedbackSuccess(){
    const feedbackSuccessContainerRef = useRef(null);
    const { closeModal } = useModal();

    const handleClickOutside = (event) => {
        if (feedbackSuccessContainerRef.current && !feedbackSuccessContainerRef.current.contains(event.target)) {
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
        ref={feedbackSuccessContainerRef} className="flex flex-col w-auto-full lg:w-[380px] gap-6 p-6 mx-4 lg:mx-auto bg-white-100 dark:bg-gray-400 border-[0.5px] border-slate-100 dark:border-gray-500 rounded-3xl white-shadow">
        <div className="flex flex-col gap-4 lg:gap-3 w-full">
            <HeartsIcon />
            <p className="w-fit max-w-full break-words text-gray-800 dark:text-gray-800 prose prose-invert">
                We received your feedback. Thank you for helping us make Zenith better for everyone. Have a great day!
            </p>
        </div>

        <Button label="Okay, great!" handleEvent={()=>closeModal('feedbackModal')} isLoading={null}/>
    </div>)
}