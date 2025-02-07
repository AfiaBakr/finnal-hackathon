import Image from "next/image";
import Link from "next/link";
import react from "react";

const BlogPostlist=[
    {
        id: 1,
        image: "/blogpost/1.png",
        date: "10 February 2022 ",
        descript: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
        more: "Learn More"
    },
    {
        id: 2,
        image: "/blogpost/2.png",
        date: "10 February 2022 ",
        descript: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
        more: "Learn More"
    },
    {
        id: 3,
        image: "/blogpost/3.png",
        date: "10 February 2022 ",
        descript: "Curabitur rutrum velit ac congue malesuada",
        more: "Learn More"
    },
];


const BlogPost =()=>{
    return(
        <div className="bg-black w-auto h-[2150px]  lg:h-[930px] py-32">
            
            <header className="text-white text-center ">
                <h3 className=" text-[20px] lg:text-[32px] text-[#ff9f0d] italic">Blog Post</h3>
                <div className="flex text-center justify-center text-[36px] lg:text-[48px] text-white mt-2">
                <h3 className=" text-[#ff9f0d]"> La</h3><h3>test News & Blog</h3>
                </div>
            </header>
            <div className=" mx-2 lg:ml-1 mt-[44px]">
                <div className="w-auto lg:w-[400px] h-[569px] flex flex-col lg:flex-row gap-[280px] lg:gap-4 lg:ml-4 ">
                    {BlogPostlist.map((list)=>(
                        <div key={list.id} className="w-auto lg:w-[400px] h-[349px] ">
                            <Image src={list.image}
                            alt="1"
                            width={400}
                            height={349}
                            />
                            <div className="w-auto lg:w-[400px] h-[220px]border border-white border-t-0 border-b-2 border-x-2 p-6 text-white">
                                <h3 className="text-[16px] text-[#ff9f0d]">{list.date}</h3>
                                <h3 className="text-[24px] pt-4" >{list.descript}</h3>
                                <div className="flex justify-between pt-6 ">
                                <h3 className="text-[16px]">{list.more}</h3>
                                <Image src={"/blogpost/icon.png"}
                                alt="icon"
                                width={76}
                                height={20}/>
                        
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default BlogPost;



