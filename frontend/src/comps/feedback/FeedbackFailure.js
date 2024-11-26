import { useEffect, useRef } from "react";
import { useModal } from "../../store/ModalStore";
import Button from "../misc/Button";
import SadIcon from "../../assets/icons/SadIcon";

export default function FeedbackFailure({resetFeedback}){
    const feedbackFailureContainerRef = useRef(null);
    const { closeModal } = useModal();

    const handleClickOutside = (event) => {
        if (feedbackFailureContainerRef.current && !feedbackFailureContainerRef.current.contains(event.target)) {
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
        ref={feedbackFailureContainerRef} className="flex flex-col w-[380px] gap-6 p-6 bg-[#0B0B0B] border-[0.5px] border-[#222222] rounded-3xl red-shadow">
        <div className="flex flex-col gap-3 w-full">
            <SadIcon />
            <p className="w-fit max-w-full break-words text-[#666666] prose prose-invert">
                Uh-oh! We couldn't recieve your feedback. But hey! we appreciate your thoughts. Why don't you try again?
            </p>
        </div>

        <Button label="Hmm, lemme try" handleEvent={resetFeedback} isLoading={null}/>
    </div>)
}