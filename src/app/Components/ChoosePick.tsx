import Image from "next/image";
import Link from "next/link";
import react from "react";


const ChooseList1 =[
    {
        id: 1,
        image: "/choosepick/Lettuce Leaf.png",
        lable: "Lettuce Leaf ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
    {
        id: 2,
        image: "/choosepick/Fresh Breakfast.png",
        lable: "Fresh Breakfast",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "14.5$"
    },
    {
        id: 3,
        image: "/choosepick/Mild Butter.png",
        lable: "Mild Butter ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
    {
        id: 4,
        image: "/choosepick/Fresh Bread.png",
        lable: "Fresh Bread ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
]

const ChooseList2 =[
    {
        id: 1,
        image: "/choosepick/Glow Cheese.png",
        lable: "Glow Cheese ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
    {
        id: 2,
        image: "/choosepick/Glow Cheese.png",
        lable: "Glow Cheese",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "14.5$"
    },
    {
        id: 3,
        image: "/choosepick/Sllice Beef.png",
        lable: "Sllice Beef ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
    {
        id: 4,
        image: "/choosepick/Mushaom Pizza.png",
        lable: "Mushaom Pizza ",
        descript: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
]

const ChoosePick =()=>{
    return (
        <div className="bg-black w-auto h-auto py-10">
             <header className="text-white text-center ">
                <h3 className="font-greatvibes
                 text-[20px] lg:text-[32px] text-[#ff9f0d] italic">Choose & Pick</h3>
                <div className="flex text-center justify-center text-[36px] lg:text-[48px] text-white mt-2">
                <h3 className=" text-[#ff9f0d]">Fr</h3><h3>om Our Menu</h3>
                </div>
            </header>
            <div className="pt-10 mb-10  ">
                    <ul className="flex justify-center gap-4 lg:gap-28 text-white text-base lg:mr-52">
                        <li className="text-[#ff9f0d]">Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>                        
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-10">
                <section className="w-[425px] lg:w-[515px] h-[406px]">
                    <Image src={"/choosepick/1.png"}
                    alt="1"
                    width={515}
                    height={406}/>
                    <Image className="absolute top-[6100px] lg:top-[3630px] left-10  lg:left-[50px]" src={"/choosepick/2.png"}
                    alt="2"
                    width={340}
                    height={340}/>
                </section>
                <section className="w-[400px] lg:w-[300px] h-[426px] flex flex-row ml-4 lg:ml-10">
                    <div className="w-auto lg:w-[300px] h-[79px] flex flex-col gap-[22px] ">
                                        {ChooseList1.map((list1)=>(
                                            <div key={list1.id} className="w-auto lg:w-[90px] h-[90px] ">
                                                <Image src={list1.image}
                                                alt="1"
                                                width={90}
                                                height={90}
                                                />
                                            </div>
                                            ))}</div>
                                                <div className="w-auto lg:w-[230px] h-[90px] flex flex-col gap-[18px] lg:gap-[22px] pl-3 text-white">
                                                {ChooseList1.map((list1)=>(
                                                    <div key={list1.id} className="w-auto lg:w-[300px] h-[90px] ">
                                                    <h3 className="text-[20px] ">{list1.lable}</h3>
                                                    <h3 className="text-[14px] pt-2" >{list1.descript}</h3>
                                                    <h3 className="text-[18px] text-[#ff9f0d] pt-2">{list1.price}</h3>                                                                                                
                                                    </div>
                                            ))}</div>
                                
                </section>

                <section className="w-[400px] lg:w-[300px] h-[426px] flex flex-row ml-4 lg:ml-20">
                    <div className="w-auto lg:w-[300px] h-[79px] flex flex-col gap-[22px] ">
                                        {ChooseList2.map((list2)=>(
                                            <div key={list2.id} className="w-auto lg:w-[90px] h-[90px] ">
                                                <Image src={list2.image}
                                                alt="1"
                                                width={90}
                                                height={90}
                                                />
                                            </div>
                                            ))}</div>
                                                <div className="w-auto lg:w-[230px] h-[90px] flex flex-col gap-[18px] lg:gap-[22px] pl-3 text-white">
                                                {ChooseList1.map((list2)=>(
                                                    <div key={list2.id} className=" w-[300px] h-[90px] ">
                                                    <h3 className="text-[20px] ">{list2.lable}</h3>
                                                    <h3 className="text-[14px] pt-2" >{list2.descript}</h3>
                                                    <h3 className="text-[18px] text-[#ff9f0d] pt-2">{list2.price}</h3>                                                                                                
                                                    </div>
                                            ))}</div>
                                
                </section>
                
                </div>
        </div>
    )
};

export default ChoosePick;