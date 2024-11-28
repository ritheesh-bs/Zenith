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

    return (<button className="group/profile flex gap-4 lg:gap-3 p-4 lg:p-2.5 w-full items-center hover:bg-[#060606] cursor-pointer" onClick={()=>window.open(creator.link, '_bl')} >
        <img className="size-8 lg:size-6 rounded-full" src={creator.image.pic} alt={creator.image.alt} />

        <div className="flex flex-col gap-1 lg:gap-0 flex-1 text-left">
            <p className="text-[#666666] text-[10px] group-hover/profile:text-[#666666]">Crafted with care by</p>
            <p className="text-[#AAAAAA] text-sm group-hover/profile:text-[#CCCCCC] text-[20px] lg:text-[14px]">{creator.name}</p>
        </div>
    </button>)
}