"üse client"

import React from "react";
import Image from "next/image";
import Link from "next/link";


import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-black">

        <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
          <div className="text-white md:w-[50%] w-[100%]">
              <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support?</h2>
              <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <div className="flex md:mt-0 mt-[20px]">
            <input type="text" placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
          </div>

          
        </div>

          <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2  md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              About Us.
            </h2>
            <ul className="text-gray-500  font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Houres
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday -_- Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
            Useful Links
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <Link href={"/about"} className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  News
                </Link>
              </li>
              <li className="mb-4">
                <Link href={"/OurMenu/PartnerClient"} className="hover:underline">
                  Partner
                </Link>
              </li>
              <li className="mb-4">
                <Link href={"/TeamMember"} className="hover:underline">
                  Team 
                </Link>
              </li>

              <li className="mb-4">
                <Link href={"/menu"} className="hover:underline">
                Menu
                </Link>
              </li> 

              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Contact
                </Link>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
            Help?
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <Link href={"/faq"} className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Term & conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Reporting
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Documentation 
                </Link>
              </li>

              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Support Policy
                </Link>
              </li> 

              <li className="mb-4">
                <Link href="#" className="hover:underline">
                Privacy
                </Link>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
            Recent Post
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
  {/* Post 1 */}
  <li className="flex gap-[16.5px]">
    <Image src={"/footer/Post1.png"}
    alt="Food" 
    width={60}
    height={50} />
    <div className="ml-1">
      <h2 
        className="text-[14] lg:text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49] w-[96px] h-[24px] ml-[75px]">
        20 Feb 2022
      </h2>
      <h3 className="font-inter text-[16] lg:text-[18px] font-normal leading-[26px] text-left decoration-skip-ink-none text-[#FFFFFF]">
        Keep Your Business
      </h3>
    </div>
  </li>

  {/* Post 2 */}
  <li className="flex gap-[16.5px]">
    <Image src={"/footer/Post2.png"} alt="Food" width={60}
    height={50} />
    <div className="ml-1">
      <h2 
        className="text-[14] lg:text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49] w-[96px] h-[24px] ml-[75px]">
        20 Feb 2022
      </h2>
      <h3 className="font-inter text-[16] lg:text-[18px] font-normal leading-[26px] text-left decoration-skip-ink-none text-[#FFFFFF]">
        Keep Your Business
      </h3>
    </div>
  </li>

  {/* Post 3 */}
  <li className="flex gap-[16.5px]">
    <Image src={"/footer/Post3.png"} alt="Food" width={60}
    height={50} />
    <div className="ml-1">
      <h2 
        className="text-[14] lg:text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49] w-[96px] h-[24px] ml-24 lg:ml-[75px]">
        20 Feb 2022
      </h2>
      <h3 className="font-inter text-[16] lg:text-[18px] font-normal leading-[26px] text-left decoration-skip-ink-none text-[#FFFFFF]">
        Keep Your Business
      </h3>
    </div>
  </li>
</ul>

          </div>
        </div>
        
        <div className="w-[100%] px-4 py-6 bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          <span className="flex text-sm text-[#FFFFFF] sm:text-center">
        Copyright @ 2025 by &nbsp; <h1 className="italic">Afia Bakr.</h1>&nbsp; All RightsReserved.
          </span>

          <div className="flex justify-center gap-[14px]">
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaTwitter className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaInstagram className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaYoutube className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaPinterest className="text-[#4F4F4F] text-[20px]" />
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;