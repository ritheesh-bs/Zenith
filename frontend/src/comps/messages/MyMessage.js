export default function MyMessage({message}){


    return (<div className="flex w-full justify-end">
        <p className="flex bg-white-100 bg-opacity-20 dark:bg-gray-400 border-[0.5px] border-slate-100 dark:border-gray-500 text-gray-700 dark:text-slate-300 min-w-[60px] max-w-[300px] lg:max-w-[500px] w-auto rounded-3xl rounded-br-none p-4">
            { message }
        </p>
    </div>)
}