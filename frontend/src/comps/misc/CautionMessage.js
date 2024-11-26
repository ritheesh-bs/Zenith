import CautionIcon from "../../assets/icons/CautionIcon";

export default function CautionMessage(){
    return (
        <div className="flex flex-col w-[350px] gap-4 p-6 bg-[#0B0B0B]/10 border-[0.5px] border-[#222222] rounded-3xl white-shadow">
            <CautionIcon />
            <p className="text-[#666666] text-md">We use external AI models for better responses. So, please <span className="text-[#CCCCCC]">don’t expose your identity or sensitive information</span> as these data might be used for improvement of of the model</p>
        </div>
    )
}