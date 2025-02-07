

"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

// import { useHistory } from "react-router-dom"; // For navigation

const Register = () => {
  // const history = useHistory(); // Initialize useHistory for navigation

  const route = useRouter()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Once form is submitted, navigate to the /login page
    route.push("/login");
  };

  return (
    <main className="bg-black">
      <header
        className="bg-cover bg-center h-52 flex flex-col text-center"
        style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
          Sign In
        </h1>
        <div className="flex items-center justify-center text-lg md:text-2xl">
        <Link href={"/menu"}><h1 className="text-white">Check Out</h1></Link>
          <MdKeyboardArrowRight className="text-white" />
          <h1 className="text-[#ff9f0d]">
            <u>Sign In</u>
          </h1>          
        </div>
        </header>
        <section className=" flex-col items-center justify-center h-screen  ">
        {/* Title */}
        <div className="my-4 mx-2 md:my-10 md:mx-52">
        <div className="border rounded-lg bg-slate-50 py-6 px-6 md:py-20 md:px-32">
        <div className="text-center text-black text-lg font-bold  ">
        <h1 className="mb-2" >
          Create an Account </h1>
          <h1 className="mb-2 text-[#ff9f0d] italic">To Become Our Family 
        </h1>
        <h1 className="mb-2">
         OR
        </h1>
        <Link href={"/login"}><h2 className=" text-2xl hover:text-[#ff9f0d] mb-6">
            Log In</h2></Link>
        </div>
        <div>
        {/* Form */}
        <form className="space-y-4 flex-auto" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff9f0d] text-black py-3 rounded-md font-bold text-sm tracking-wide"
          >
            Join us
          </button>
        </form>
        </div>
        <p className="text-xs text-center text-gray-600 mt-4">
          By signing up, you agree to Nike{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>
        </div>
        </div>
        </section>
      </main>
  );
};

export default Register;
