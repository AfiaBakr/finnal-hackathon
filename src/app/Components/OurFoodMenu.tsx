

import Link from "next/link";





const OurFoodMenu =()=>{
    return(
        <div>
             <div>
            <main className="bg-white ">
                <header className="bg-cover bg-center h-[176] flex flex-col text-center" 
                style={{ backgroundImage: "url('/teammember/leaf.png')",
                    backgroundPosition: "center",  
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "161px 176px"
                 }}>
                    <h1 className="mx-2 lg:mx-0 text-3xl lg:text-5xl font-bold text-black tracking-wide pt-32">Our Food Menu</h1>
                <div className=" text-black text-center justify-center text-sm lg:text-base mx-4 pt-6 pb-4 lg:pb-16 ">
                    <h1 >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <h1 > Varius sed pharetra dictum neque massa congue</h1>
                </div> 
                </header>
                <div className=" mb-10">
                    <ul className="flex text-center justify-center gap-4 lg:gap-16 text-black text-base">
                        <li className="text-[#ff9f0d]">Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>
                        
                    </ul>
                    <hr className="mt-6 lg:mt-10"/>
                </div>
               
                <div className="w-screen mx-2 lg:ml-0  lg:w-[1320px] h-[1000] lg:h-[532px] flex flex-col lg:flex-row items-center justify-center gap-8">
                
                
                    <div className="flex-col w-screen lg:w-[648px] h-[450px] lg:h-[532px] ml-0 lg:ml-8">
                    {/*First Menu */}
                    <div className="flex text-[#333333] items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#ff9f0d]">Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*Second Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>           
                    </div>                
                

                    <div className="flex-col w-screen lg:w-[648px] h-[450px] lg:h-[532px] ml-0 lg:ml-8">
                    {/*First Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-0 lg:mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*Second Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-xl lg:text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Alder Grilled Chinook Salmon</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-sm lg:text-base text-[#4f4f4f] text-left mt-2 lg:mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p >Toasted French bread topped with romano, cheddar</p>
                        <p >560 CAL</p>
                    </div>         
                </div>               
            </div>            
                 
            </main>
            <div className="text-[#ff9f0d] text-base text-center ">
                <Link href={"/menu"}><button className="w-[143px] h-[52px] mb-10 lg:mb-6 border border-[#ff9f0d] rounded-md">View menu</button></Link>
            </div>
        </div>
        </div>

    )
};
export default OurFoodMenu;
