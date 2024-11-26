import DotLoadingicon from "../../assets/icons/DotLoadingicon";

export default function Button({label, handleEvent, isLoading}) {
    return (<button className="flex w-full rounded-full bg-white text-black p-3 h-[48px] justify-center items-center " onClick={handleEvent} disabled={isLoading}>
        {isLoading ? <DotLoadingicon /> : label}
    </button>)
}