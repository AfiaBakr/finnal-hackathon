"use client";

import react from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const items = [
    { id: 1, img: "/meet chef/Chef card.png", title: "D.Estwood", lable: "Chief Chef" },
    { id: 2, img: "/meet chef/card 4.png", title: "D.Scoriesh", lable: "Assistant Chef" },
    { id: 3, img: "/meet chef/Rectangle 8863.png", title: "M. William", lable: "Advertising Chef" },
    { id: 4, img: "/meet chef/card 3.png", title: "W.Readfroad", lable: "Specialist" },
  ];


const MeetChef =()=>{
    return(
        <div className="bg-black">
            <main className="bg-black mb-4 lg:mb-[520px] ">
                <header >
                <h1 className="text-sm text-center  font-medium text-[#ff9f0d] italic">
                Chefs
            </h1>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white text-center tracking-wide mt-2 lg:mt-4 ">Meet Our Chef</h1>
                                    
                

{/* Grid of staff */}

                <div className="bg-black lg:absolute mt-4 lg:mt-[50px] items-center justify-center ml-16 lg:ml-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className ="absolute w-[150px] pt-4 text-center flex-col h-20 bottom-0 left-0 bg-white ">
                        <h3 className=" font-semibold text-xl">{item.title}</h3>
                        <h3 className="text-slate-500 text-base">{item.lable}</h3>
                    </div>
                    </div>))} 
                    </div>                               
                    </header>
                
            </main>
            <div className="text-base text-center text-[#ff9f0d] pb-16">
                <button className="w-[155px] h-[50px] border border-[#ff9f0d] rounded-full"><Link href={"/chefs"}>See More</Link></button>
            </div>
        </div>
    )
};

export default MeetChef
