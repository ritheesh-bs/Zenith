import { useChat } from "../../store/ChatStore" // Updated import
import FeedbackIcon from "../../assets/icons/FeedbackIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import PlusIcon from "../../assets/icons/PlusIcon"
import { useModal } from "../../store/ModalStore"

export default function Options() {
    const { openModal } = useModal()
    const { startChat } = useChat() // Now using the shared context

    const options = [
        { label: "Start new chat", icon: <PlusIcon />, handleEvent: startChat },
        { label: "Message to creator", icon: <FeedbackIcon />, handleEvent: () => { openModal('feedbackModal') } },
        { label: "Source code", icon: <GithubIcon />, handleEvent: () => { window.open("https://github.com/ritheesh-bs/Zenith", "_blank") } },
    ]

    return (
        <div className="text-sm flex lg:flex flex-col p-1 gap-1 w-full text-[#666666]">
            {options.map((option) => (
                <div 
                    key={option.label}
                    className="group/option cursor-pointer flex gap-5 lg:gap-3 p-4 lg:p-2 w-full rounded-2xl hover:bg-[#060606] hover:text-[#CCCCCC]" 
                    onClick={option.handleEvent}
                >
                    {option.icon}
                    <p className="px-1 text-[16px] lg:text-[14px]">{option.label}</p>
                </div>
            ))}
        </div>
    );
}