import CautionIcon from "../../assets/icons/CautionIcon";

export default function CautionMessage(){
    return (
        <div className="flex flex-col w-[350px] gap-4 p-6 bg-white dark:bg-gray-400/10 border-[0.5px] border-slate-100 dark:border-gray-500 rounded-3xl shadow-3xl white-shadow">
            <CautionIcon />
            <p className="text-gray-800 dark:text-gray-800 text-md">We use external AI models for better responses. So, please <span className="text-black dark:text-slate-200">don’t expose your identity or sensitive information</span> as these data might be used for improvement of of the model</p>
        </div>
    )
}