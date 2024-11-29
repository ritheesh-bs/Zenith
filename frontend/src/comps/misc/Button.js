import DotLoadingicon from "../../assets/icons/DotLoadingicon";

export default function Button({label, handleEvent, isLoading}) {
    return (<button className="flex w-full rounded-full bg-black dark:bg-white-100 text-white-100 dark:text-black p-3 h-[48px] justify-center items-center " onClick={handleEvent} disabled={isLoading}>
        {isLoading ? <DotLoadingicon /> : label}
    </button>)
}