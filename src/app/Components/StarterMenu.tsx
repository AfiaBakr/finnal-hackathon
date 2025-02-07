import react from "react";
import Image from "next/image";


const StarterMenu = ()=> {
    return(
        <main className="bg-white ">
            {/*Starter Menu */}
            <div className="w-screen lg:w-[1320px] h-[1300] lg:h-[628px] flex flex-col lg:flex-row items-center justify-between">
                <div className="mt-4 lg:mt-16 lg:ml-16">
                    <Image
                    src={"/our menu/Starter Menu.png"}
                    alt="Dish"
                    width={448}
                    height={628}/>
                </div>
                <div className="flex-col  w-screen lg:w-[760px] h-[1300] lg:h-[628px] mt-8 lg:mt-20 lg:mr-[30px] lg:ml-16" >
                    <div className="item-left">
                    <Image className="text-[#ff9f0d]"
                    src={"/our menu/Coffee.png"}
                    alt="logo"
                    width={24}
                    height={24}/>
                    <h3 className="font-bold text-5xl text-[#333333] mt-4 ">Starter Menu</h3>
                    </div>
                    {/*First Menu */}
                    <div className="flex items-center justify-between text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
                        <p className="text-[#828282]">560 CAL</p>
                    </div>
                    {/*Secon Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#ff9f0d] font-bold text-left">Berries and creme tart</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="text-[#828282]">700 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left">Tormentoso Bush Pizza Pintoage</h3>
                        <p className="text-[#ff9f0d] items-end">14$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Ground cumin, avocados, peeled and cubed</p>
                        <p className="text-[#828282]">1000 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left">Spicy Vegan Potato Curry</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="text-[#828282]">500 CAL</p>
                    </div>                    
                </div>                
            </div>
            {/*Main Course */}
            <div className="w-screen  lg:w-[1320px] h-[1300] lg:h-[628px] flex flex-col lg:flex-row items-center justify-between my-20">
                
            <div className="flex-col  w-screen lg:w-[760px] h-[1300] lg:h-[628px] mt-8 lg:mt-20 lg:mr-[30px] lg:ml-16" >
                    <div className="item-left">
                    <Image className="text-[#ff9f0d]"
                    src={"/our menu/Coffee.png"}
                    alt="logo"
                    width={24}
                    height={24}/>
                    <h3 className="font-bold text-5xl text-[#333333] mt-4">Main Course</h3>
                    </div>
                    {/*First Menu */}
                    <div className="flex items-center justify-between text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Optic Big Breakfast Combo Menu</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
                        <p className="text-[#828282]">560 CAL</p>
                    </div>
                    {/*Secon Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#4f4f4f] font-bold text-left">Cashew Chicken With Stir-Fry</h3>
                        <p className="text-[#ff9f0d] items-end">43$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="text-[#828282]">700 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left"> Vegetables & Green Salad</h3>
                        <p className="text-[#ff9f0d] items-end">14$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Ground cumin, avocados, peeled and cubed</p>
                        <p className="text-[#828282]">1000 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left">Spicy Vegan Potato Curry</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="text-[#828282]">500 CAL</p>
                    </div>                    
                </div>
                <div className="mt-16 lg:ml-16">
                    <Image
                    src={"/our menu/Main Course.png"}
                    alt="Dish"
                    width={448}
                    height={628}/>
                </div>
            </div>
        </main>
    )
};
export default StarterMenu;