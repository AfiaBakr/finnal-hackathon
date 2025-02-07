"use client";


import React from 'react'
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-gray-100 text-center p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-black mb-4">Thank you for your purchase! 🎉</h1>
        <p className="text-gray-600 mb-6">We can&apos;t wait to serve you again. 🛍️✨.</p>
        
        <button
          onClick={() => router.push("/")}
          className="bg-[#FF9F0D] text-white px-6 py-3 rounded-lg hover:bg-[#e2b46f] transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
