"use client";

import react from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";


const items = [
    { id: 1, img: "/teammember/staff.png", title: "Mark Henry", lable: "Owner" },
    { id: 2, img: "/teammember/staff.png", title: "Lucky Helen", lable: "Chef" },
    { id: 3, img: "/teammember/staff.png", title: "Moon Henry", lable: "Founder" },
    { id: 4, img: "/teammember/staff.png", title: "Tom Monrow", lable: "Specialist" },
  ];


const TeamMember =()=>{
    return(
        <div>
            <main className="bg-white mb-4 lg:mb-[390px] ">
                <header className="bg-cover bg-center w-screen h-[230] lg:h-[460] flex flex-col text-center" style={{ backgroundImage: "url('/teammember/Bg.png')" }}>
                    <h1 className="text-5xl font-bold text-white tracking-wide mt-28 lg:pt-32">Team Member</h1>
                <div className=" text-white text-center justify-center text-base mb-10 lg:pb-32 ">
                    <h1 >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <h1 > Varius sed pharetra dictum neque massa congue</h1>
                </div>                     
                

{/* Grid of staff */}

                <div className=" lg:absolute mt-[290px] items-center justify-center ml-16 lg:ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((item) => (
                    <div key={item.id} className="relative">
{/* Image  */}
                    <Image
                    src={item.img}
                    alt={item.lable}
                    width={312}
                    height={398}
                    className=" object-cover"
                     />

{/* Overlay label */}
                    <div className ="absolute w-[312px] pt-4 text-center flex-col h-20 bottom-0 left-0 bg-white ">
                        <h3 className=" font-semibold text-xl">{item.title}</h3>
                        <h3 className="text-slate-500 text-base">{item.lable}</h3>
                    </div>
                    </div>))} 
                    </div>                               
                    </header>
                
            </main>
        </div>
    )
};

export default TeamMember
