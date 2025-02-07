import Image from "next/image";
import Link from "next/link";


const Mid=()=> {
  return (
    <div>
    <section className="w-full lg:w-[1260px] h-[558px] " style={{background:"url('/mid/mid-bg.png')", 
        backgroundSize: "cover",
        backgroundPosition:"center"}}>
        <div className="text-right text-sm lg:text-base text-white pt-28 lg:pt-[130px] pr-[10px] lg:pr-[100px]">
            <div className="font-greatvibes italic">
            <h3 className="text-[22px] lg:text-[32px] text-[#ff9f0d]">Restaurant Active Process</h3>
            </div>
            <div className="text-[28px] lg:text-[48px] font-inter">
            <div className="flex justify-end mt-8">
            <h3 className="text-[#ff9f0d] mr-1 lg:mr-3">We</h3><h3>Document Every Food</h3>
            </div>
            <h3 className="mt-4 lg:mt-8">Bean Process untile it is saved</h3>            
            </div>
            <h3 className="mt-6 ml-4 lg:ml-0 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque<br/>bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </h3>
            <div className=" flex justify-end text-sm lg:text-lg font-semibold font-inter">
            <h3 className="w-[170px] h-[50px] rounded-full border border-[#ff9f0d] mt-8 text-center pt-3 mr-6">Read More</h3>
            <Image className="pt-8" src={"/mid/Play.png"}
            alt="play"
            width={50}
            height={50}/>
            <h3 className="mr-4 lg:mr-0 ml-6 pt-12">Play Video</h3>
            </div>
        </div>
    </section>
    </div>
  )
};
export default Mid;

