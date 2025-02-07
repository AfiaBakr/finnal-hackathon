import Link from "next/link";
import react from "react";
import Image from "next/image";


const WhyChoose =()=>{
    return(
        
            <div className="flex justify-center items-center bg-black pt-4 lg:pt-10">
            <div className="w-screen h-auto  lg:w-[1320px] lg:h-[800px] lg:justify-between flex flex-col lg:flex-row">
        {/*Left side */}        
                <section className="w-screen lg:w-[660px] mx-0 lg:mx-0 h-[716px] grid grid-cols-1 lg:grid-rows-2 ">
                    <div >
                        <div className="col-span-1 lg:row-span-1 flex gap-2 lg:gap-4">                       
                            <Image src={"/whychoose/1.png"}
                            alt="1"
                            width={362}
                            height={356}/>
                            <Image className="pt-[115px]" src={"/whychoose/2.png"}
                            alt="2"
                            width={281}
                            height={231}/>                        
                        </div>
                        <div className="col-span-1 lg:row-span-2 flex gap-2 lg:gap-4 mt-4">                       
                            <Image className="mb-[53px]" src={"/whychoose/3.png"}
                            alt="3"
                            width={244}
                            height={306}/>
                            <Image className="mb-[106px]" src={"/whychoose/4.png"}
                            alt="4"
                            width={221}
                            height={226}/>
                            <div className="col-span-1">
                                <Image src={"/whychoose/5.png"}
                                alt="5"
                                width={161}
                                height={168}/>
                                <Image className="mt-4" src={"/whychoose/6.png"}
                                alt="6"
                                width={161}
                                height={168}/>
                            </div>                        
                        </div>   
                    </div>
                </section>
        {/*Right side */}        
                <section className="w-screen ml-4 lg:ml-0 lg:w-[526px] h-[716px] pt-0 lg:pt-[60px] text-white">
                    <div className="text-left">
                            <h3 className="text-[#ff9f0d] italic text-[28px] lg:text-[32px]">Why Choose us</h3>                        
                        <div className="flex text-[36px] lg:text-[48px] ">
                            <h3 className="text-[#ff9f0d]">Ex</h3><h3>tra ordinary taste</h3>
                        </div>
                        <h3 className="text-[36px] lg:text-[48px]">And Experienced </h3>
                    </div>
                        <p className="text-[16px] mr-4 lg:mr-0 pt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className="flex text-[18px] py-8">
                        <div className="items-center justify-center">
                            <div className="w-[80px] h-[80px] lg:w-[102px] lg:h-[100] bg-[#ff9f0d] rounded-lg ml-12 lg:ml-0 mr-8 lg:mr-12 pl-3 lg:pl-6 py-4 border-lg">
                                <Image src={"/whychoose/Hamburger.png"}
                                alt="logo"
                                width={56}
                                height={56}/>                                
                            </div>
                            <h3 className="text-center pt-2 pl-3 lg:pl-0 lg:pr-12">Fast Food</h3>
                        </div>
                        <div className=" items-center justify-center">
                        <div className="w-[80px] h-[80px] lg:w-[102px] lg:h-[100] bg-[#ff9f0d] rounded-lg mr-8 lg:mr-12 pl-3 lg:pl-6 py-4 border-lg">
                                <Image src={"/whychoose/Cookie.png"}
                                alt="logo"
                                width={56}
                                height={56}/>                                
                            </div>
                            <h3 className="text-center pt-2 pr-10">Lunch</h3>
                        </div>
                            
                        <div className=" items-center justify-center">
                            <div className="w-[80px] h-[80px] lg:w-[102px] lg:h-[100] bg-[#ff9f0d] rounded-lg pl-3 lg:pl-6 py-4 border-lg">
                                <Image src={"/whychoose/Wine.png"}
                                alt="logo"
                                width={56}
                                height={56}/>                                
                            </div>
                            <h3 className="text-center pt-2">Dinner</h3>
                        </div>
                    </div>
                    <div className="bg-white w-[320px] h-[73px] lg:w-[398px] lg:h-[93px] ml-10 lg:ml-0 rounded-lg flex relative">
                        <div className="absolute w-8 h-[73px] lg:w-10 lg:h-[93px] rounded-l-lg left-[0px] bg-[#ff9f0d]"></div>
                        <h2 className="text-[#ff9f0d] text-[36px] lg:text-[48px] pl-[64px] lg:pl-[80px] pt-2">30+</h2>
                        <div className="text-left text-black pt-3 lg:pt-4 pl-[30px] lg:pl-[40px] ">
                        <h3 className="text-[18px] lg:text-[20px]">Years of</h3>
                        <h3 className="text-[20px] lg:text-[24px]">Experienced</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    
    )
};

export default WhyChoose;