"use client"; // Ensure this is a Client Component

import { addToCart } from "@/app/action/action";
import { Food } from "@/app/type/food";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Swal from "sweetalert2";

interface FoodPageProps {
    params: { slug: string };
}

// Fetch food data from Sanity
async function getFood(slug: string): Promise<Food> {
    return client.fetch(
        groq`*[_type=="food" && slug.current == $slug][0] {
            _id,
            name,
            category,
            price,
            quantity,
            originalPrice,
            tags,
            image,
            description,
            available,
        }`,
        { slug }
    );
}

export default function FoodPage({ params }: FoodPageProps) {
    const [food, setFood] = useState<Food | null>(null); // ✅ Fixed initialization
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            const fetchedFood = await getFood(params.slug);
            setFood(fetchedFood);
        }
        fetchData();
    }, [params.slug]);

    // Add to cart function
    const handleAddToCart = (e: React.MouseEvent, food: Food) => {
        e.preventDefault();
        Swal.fire({
            position: "top-start",
            icon: "success",
            title:`${food.name} added to cart`,
            showConfirmButton: false,
            timer: 2000,
        })
        if (!food) return; // Prevent error if food is null
        addToCart(food);
    };

    if (!food) {
        return <div className="bg-gray-950"><div className="border border-spacing-1 bg-slate-100 md:mx-20 md:mt-20 md:mb-10 mx-4  mb-4 p-8 rounded-2xl text-center mt-10 text-2xl md:text-6xl">Loading...</div>; // Show loading state
    </div>
    }


    return (
        <main className="bg-black" >
            <header
                    className="bg-cover bg-center h-52 flex flex-col text-center"
                    style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
                      Item Detail
                    </h1>
                    <div className="flex items-center justify-center text-lg md:text-2xl">
                    <Link href={"/menu"}><h1 className="text-white">Our Food Menu</h1></Link>
                      <MdKeyboardArrowRight className="text-white" />
                      <h1 className="text-[#ff9f0d]">
                        <u>Item Detail</u>
                      </h1>  
                    </div>
                    </header>
            <div className=" p-2 md:p-40  ">
            <div className="border border-spacing-1 bg-slate-100 p-2 md:p-8 rounded-2xl">
            <section className="flex-col md:flex items-center justify-center">
                <div className="aspect-square">
                    {food.image && (
                        <Image
                            src={urlFor(food.image).url()}
                            alt={food.name}
                            width={600}
                            height={600}
                            className="w-[600px] h-[600px] object-cover rounded-lg mb-4"
                        />
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        {food.name}
                    </h1>
                </div>
                <div className="w-[300px] md:w-[600px] text-left md:pl-0 pl-2 md:text-2xl text-xl">
                    <p className="text-gray-500 mb-6">
                        <b>Category:&nbsp; &nbsp;</b> {food.category}
                    </p>
                    <p className="font-bold mb-6">
                        Price: ${food.price}{" "}
                        &nbsp; &nbsp;{" "}
                        <span className="line-through text-gray-400">
                            Original Price:&nbsp; &nbsp; ${food.originalPrice}
                        </span>
                    </p>
                    <p className="text-gray-500 mb-6">
                        <b>Food Tag: &nbsp; &nbsp; </b> {food.tags?.join(", ")}
                    </p>
                    <p className="text-gray-500 mb-6">
                        <b>Availability: &nbsp; &nbsp; </b>
                        {food.available ? "Available" : "Out of Stock"}
                    </p>
                    <p className="text-gray-500 mb-6">
                        <b>Description: &nbsp; &nbsp; </b> {food.description}
                    </p>
                    <div >
                <button
                    onClick={(e) => handleAddToCart(e, food!)} 
                    className="w-[380px] md:w-[600px] h-12  bg-[#ff9f0d] hover:bg-orange-300 hover:text-black text-white rounded-lg font-bold px-28 md:px-52 mt-2 md:mt-2"
                >
                    Add to Cart
                </button>
                <button
              className="w-[380px] md:w-[600px] h-12  bg-[#ff9f0d] hover:bg-orange-300 hover:text-black text-white rounded-lg font-bold px-20 md:px-20 mt-2 md:mt-2"
              onClick={() => router.push('/menu')}
            >
              Continue to Shopping
            </button>
                
            </div>
                </div>
                
            </section>
            
            
            </div>
            </div>
        </main>
    );
}
