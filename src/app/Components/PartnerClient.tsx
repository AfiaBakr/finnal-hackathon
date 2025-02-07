import react from "react";
import Image from "next/image";



const PartnerClient = () => {
    return (
    <div>
        <div className="bg-white items-center justify-center lg:flex-row w-screen h-[1250px] lg:w-screen lg:h-[468px] ">
                <p className="text-lg text-center">Partners & Clients</p>
                <h3 className="font-bold text-3xl lg:text-5xl text-center mt-8">We work with the best people</h3>
                
            <div className="flex flex-col mt-10 lg:flex-row items-center justify-center gap-10 ">
                    {/*Chefs */}
                <div>
                    <Image src={"/our menu/image 2.png "}
                    alt="1"
                    width={240}
                    height={230}/>
                </div>
                {/*baker */}
                <div>
                    <Image src={"/our menu/image 56.png "}
                    alt="1"
                    width={166}
                    height={128}/>
                </div>
                {/*spoon */}
                <div>
                    <Image src={"/our menu/image 60.png "}
                    alt="1"
                    width={144}
                    height={127}/>
                </div>
                {/*Coffee */}
                <div >
                    <Image src={"/our menu/image 58.png "}
                    alt="1"
                    width={131}
                    height={130}/>
                </div>
                {/*Bistro */}
                <div >
                    <Image src={"/our menu/image 57.png "}
                    alt="1"
                    width={170}
                    height={130}/>
                </div>
                {/*bakery */}
                <div >
                    <Image src={"/our menu/image 59.png "}
                    alt="1"
                    width={114}
                    height={130}/>
                </div>
            </div>
        </div>
    </div>
    )
};



export default PartnerClient;
