
import Image from "next/image";


const OverView =()=>{
    return(
        <main>
            {/*Over View */}                          
            
            <div className="flex flex-col items-center justify-center gap-[60px] lg:gap-[110px] lg:flex-row w-full h-[1250px] lg:w-full lg:h-[468px] relative"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/our menu/unsplash-bg.png')",
                
                backgroundPosition: "center",
            }}>


                {/*Chefs */}
                <div className="items-center justify-center">
                    <div className=" ml-12">
                        <Image src={"/our menu/logo4.png"}
                        alt="logo4"
                        width={120}
                        height={119}/>
                    </div>              

                    <div className="font-bold text-white text-center mt-4">
                        <h3 className=" text-[40px]">420</h3>
                        <h3 className=" text-[24px]">Professional Chefs</h3>
                    </div>
                </div>
                {/*Foods */}
                <div className="items-center justify-center">
                    <div className=" ml-6">
                        <Image src={"/our menu/logo1.png"}
                        alt="logo1"
                        width={120}
                        height={119}/>
                    </div>
                    <div className="font-bold text-white text-center mt-4">
                        <h3 className=" text-[40px]">320</h3>
                        <h3 className=" text-[24px]">Items Of Food</h3>
                    </div>
                </div>
                {/*Experiences */}
                <div className="items-center justify-center">
                    <div className=" ml-14">
                        <Image src={"/our menu/logo2.png"}
                        alt="logo2"
                        width={120}
                        height={119}/>
                    </div>
                    <div className="font-bold text-white text-center mt-4">
                        <h3 className=" text-[40px]">30+</h3>
                        <h3 className=" text-[24px]">Year Of Experiences</h3>
                    </div>
                </div>
                {/*Customers */}
                <div className="items-center justify-center">
                    <div className=" ml-14">
                        <Image src={"/our menu/logo3.png"}
                        alt="logo3"
                        width={120}
                        height={119}/>
                    </div>
                    <div className="font-bold text-white text-center mt-4">
                        <h3 className=" text-[40px]">220</h3>
                        <h3 className=" text-[24px]">Happy Customers</h3>
                    </div>
                </div>
            </div>
             
        </main>
    )
};
export default OverView;        
        
