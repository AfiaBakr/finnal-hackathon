'use client';

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu"},
    { name: "Chefs", href: "/chefs"},
    { name: "Shopping Cart", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-black text-white p-4 w-full overflow-hidden">
      <section className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <Link href="/" className="md:hidden block text-2xl font-bold">
          <span className="text-orange-500">Food</span>tuck
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div
          className="text-orange-500 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

{/* Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300
             ${menuOpen ? "block" : "hidden"}
          `}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-orange-500 cursor-pointer px-3 md:px-0">
              <Link href={item.href} className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          {/* Cart link for mobile view */}
          <li className="md:hidden block px-4">
            
            <Link href="/cart" className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors">Cart</Link>
          </li>
          {/* Sign In link for mobile view */}
          <li className="md:hidden block px-4">
            <Link href="/signin" className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors">Sign In</Link>
            </li>
            <li className="md:hidden block px-4">
            <Link href="/login" className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors">Log In</Link>
            </li>
            {/* Log Out link for mobile view */}
          <li className="md:hidden block px-4">
            <Link href="/home" className="text-[16px] leading-6 text-white font-inter hover:text-[#FF9F0D] transition-colors">Log Out</Link>
            </li>
        </ul>


        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#ff9f0d]"
            />
            <span className="absolute top-2.5 right-3">
              <CiSearch />
            </span>
          </div>
          <IoBagHandle className="w-[24px] h-[24px]" />
          <Link href="/cart" className=" flex"><FaShoppingCart className="w-[24px] h-[24px] text-white hover:text-[#ff9f0d]" />
          <ChevronDown className="w-4 h-4 mt-1" /></Link>
          
          <div>
          <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-10 h-10 "
      >
        <AiOutlineUser className="w-[40px] h-[40px] hover:text-[#ff9f0d]" /><ChevronDown className="w-4 h-4" />
        
          {/* <SignedIn>
            <UserButton  />
          </SignedIn> */}
      
      </Button>

      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <Link
            href="/signin"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Log In
          </Link>
          <Link
            href="/home"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </Link>
          <div>
           {/* <SignedOut>
           <SignInButton mode="modal"/>
         </SignedOut>
          */}
            
        
        </div>
        </div>
         )}
        </div>    
        </div>    
            
       </section>
    </main>
  );
};