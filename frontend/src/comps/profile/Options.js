import { useChat } from "../../store/ChatStore" // Updated import
import FeedbackIcon from "../../assets/icons/FeedbackIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import PlusIcon from "../../assets/icons/PlusIcon"
import { useModal } from "../../store/ModalStore"
import { useTheme } from "../../hooks/useThemeHandler"
import SunIcon from "../../assets/icons/SunIcon"
import MoonIcon from "../../assets/icons/MoonIcon"

export default function Options() {
    const { openModal } = useModal()
    const { startChat } = useChat()
    const { currentTheme, switchTheme } = useTheme()

    const options = [
        { label: "Start new chat", icon: <PlusIcon />, handleEvent: startChat },
        { label: "Message to creator", icon: <FeedbackIcon />, handleEvent: () => { openModal('feedbackModal') } },
        { label: "Source code", icon: <GithubIcon />, handleEvent: () => { window.open("https://github.com/ritheesh-bs/Zenith", "_blank") } },
        { label: "Switch theme", icon: currentTheme ? <MoonIcon/> : <SunIcon />, handleEvent:()=>{console.log("theme switched");switchTheme()} },
    ]

    return (
        <div className="text-sm flex lg:flex flex-col p-1 gap-1 w-full text-gray-700 dark:text-gray-800">
            {options.map((option) => (
                <div 
                    key={option.label}
                    className="group/option cursor-pointer flex gap-4 lg:gap-3 p-3 lg:p-2 w-full rounded-2xl hover:bg-white-200 hover:dark:bg-gray-200 hover:text-black hover:dark:text-slate-200" 
                    onClick={option.handleEvent}
                >
                    {option.icon}
                    <p className="px-1 lg:text-[14px]">{option.label}</p>
                </div>
            ))}
        </div>
    );
}