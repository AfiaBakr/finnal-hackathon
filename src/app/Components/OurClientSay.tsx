

import Image from "next/image";


const OurClientSay =()=>{
    return(
        <div className="bg-black lg:ml-0">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" >
            <h1 className="text-sm mb-4 font-medium text-[#ff9f0d] italic">
            Testimonials
            </h1>
            <p className="text-white title-font text-3xl lg:text-4xl mb-8 font-bold">
            What our client are saying
            </p>
            </div>
            <div className="ml-32  lg:ml-[600px] item-center justify-center">
                <Image className="absolute rounded-full "
                alt="client"
                src={"/teammember/client.png"}
                 width={133} height={133}
                /> 
                </div>
            <div className="bg-white w-screen lg:w-[868px] h-[450px] mt-16 items-center justify-center ml-0 lg:ml-60 " 
                style={{ backgroundImage: "url('/teammember/flower.png')",
                    backgroundPosition: "right  bottom",  
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "400px 500px" }} >
            
            <p className="text-[#ff9f0d] text-lg text-center pt-20">99</p>
            <div className=" text-center justify-center mx-0 lg:mx-32 mt-8">           
            <p className=" text-[#333333] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            </div>
            <div className="text-center justify-center pt-8 lg:pt-16">
            <Image className="ml-36 lg:ml-[375px] "
            src={"/teammember/star.png"}
            alt="stars"
            width={150}
            height={24}/>
            <h3 className=" font-semibold text-2xl lg:text-4xl mt-6 lg:mt-6">Alamin Hasan</h3>
            <h3 className="text-[#333333] text-xl lg:text-2xl">Food Specialist</h3>
        </div>
        </div>
        <div>
        <Image className=" py-16 lg:py-20 ml-40 lg:ml-[630px]"
            src={"/teammember/Dot.png"}
            alt="dots"
            width={86}
            height={16}/>
        </div>

        </div>
        

    )
};

export default OurClientSay;