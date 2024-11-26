export default function MyMessage({message}){


    return (<div className="flex w-full justify-end">
        <p className="flex bg-[#0B0B0B] border-[0.5px] border-[#222222] text-[#AAAAAA] min-w-[60px] max-w-[500px] w-auto rounded-3xl rounded-br-none p-4">
            { message }
        </p>
    </div>)
}