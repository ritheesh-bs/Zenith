import profilePic from "../../assets/images/profile-pic.jpg"

export default function Profile(){

    const creator = {
        name:"Ritheesh BS",
        link:"https://github.com/ritheesh-bs",
        image:{
            pic:profilePic,
            alt:"Creator's image"
        }
    }

    return (<button className="group/profile flex gap-4 lg:gap-3 p-3.5 lg:p-2.5 w-full items-center hover:bg-white-200 hover:dark:bg-gray-200 cursor-pointer" onClick={()=>window.open(creator.link, '_bl')} >
        <img className="size-6 rounded-full" src={creator.image.pic} alt={creator.image.alt} />

        <div className="flex flex-col gap-0 flex-1 text-left">
            <p className="text-slate-300 dark:text-gray-800 text-[10px] group-hover/profile:text-slate-300 group-hover/profile:dark:text-gray-800">Crafted with care by</p>
            <p className="text-gray-600 dark:text-slate-300 text-sm group-hover/profile:text-black group-hover/profile:dark:text-slate-200 text-[16px] lg:text-[14px]">{creator.name}</p>
        </div>
    </button>)
}