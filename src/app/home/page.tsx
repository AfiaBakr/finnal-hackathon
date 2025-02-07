"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from '../foodcategory/page'
import MeetChef from '../Components/MeetChef'
import OurClientSay from '../Components/OurClientSay'
import OverView from "../Components/OverView";
import WhyChoose from '../Components/WhyChoose'
import Mid from '../Components/Mid'
import BlogPost from '../Components/BlogPost'
import ChoosePick from '../Components/ChoosePick'

const Home=()=> {
  return (
    <>
    <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <div className='text-white w-full md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Its Quick & Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
  </h1>

  <p className='text-[10px] md:text-[16px] font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>

  <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
    See More
  </button>
  </div>
</div>

        {/* Image */}

        <div className='mt-[50px] md:mt-0 '>   
            <Image 
                src={"/Hero/Image.png"}
                alt='Hero Image'
                width={700}
                height={500}
                className=''
            />

        </div>
    </section>
        <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]">
      

      {/* Image */}




      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          About us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            <Link href={"/about"}>See More</Link>
          </button>
        </div>
      </div>
      <div className="mt-[50px] md:ml-10 md:mt-0 ">
        <Image src={"/Hero/food1.png"} alt="Hero Image" className="" width={700} height={330} />
        <div className="flex flex-col md:flex-row mt-[16px] ml-14 lg:ml-0 md:mt-[0]">
          <Image src={"/Hero/food2.png"} alt="Hero Image" width={300} height={194} className="mr-[16px] pt-[40px]" />
          <Image src={"/Hero/food3.png"} alt="Hero Image" width={300} height={194} className="pt-[40px]" />
        </div>
      </div>
    </section>
    <div className='pb-10 bg-black'>
    <FoodCategory/>
    </div>
    <div className='pb-10 bg-black'>
    <WhyChoose/>
    </div>
    <div className='pb-10 bg-black'>
      <OverView />
    </div>
    <div className='pb-10 bg-black'>
    <ChoosePick/>
    </div>
    <div>
    <MeetChef/>
    </div>    
    <div className='pb-10 bg-black'>
    <OurClientSay/>
    </div>
    <div className='pb-10 bg-black'>
    <Mid/>
    </div>
    <div className='pb-10 bg-black'>
    <BlogPost/>
    </div>
    </>
  )
}

export default Home;