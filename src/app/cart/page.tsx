"use client";

import React, { useEffect, useState } from "react";
import { Food } from "../type/food";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../action/action";
import Swal from "sweetalert2";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


const CartPage = () => {
    const [cartItems, setCartItems] = useState<Food[]>([]);
  
    
    useEffect(() => {
      setCartItems(getCartItems());
    }, []);
  
    const handleRemove = (id: string) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to undo this action!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeFromCart(id);
          setCartItems(getCartItems());
          Swal.fire(
            "Removed!",
            "Item has been removed from your cart.",
            "success"
          );
        }
      });
    };
  
    const handleQuantityChange = (id: string, quantity: number) => {
      updateCartQuantity(id, quantity);
      setCartItems(getCartItems());
    };
  
    const handleIncrement = (id: string) => {
      const product = cartItems.find((item) => item._id === id);
      if (product) {
        handleQuantityChange(id, product.quantity + 1);
      }
    };
  
    const handleDecrement = (id: string) => {
      const product = cartItems.find((item) => item._id === id);
      if (product && product.quantity > 1) {
        handleQuantityChange(id, product.quantity - 1);
      }
    };
  
    const calculateTotal = () => {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
  
    const handleProceed = () => {
      Swal.fire({
        title: "Processing your order...",
        text: "Please wait a moment.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Success!",
            "Your order has been successfully processed!",
            "success"
          );
          // Clear the cart after proceeding (optional)
          setCartItems([]);
        }
      });
    };

  return (
    <main className="bg-black">
      <header
        className="bg-cover bg-center h-52 flex flex-col text-center"
        style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
          Shopping Cart
        </h1>
        <div className="flex items-center justify-center text-lg md:text-2xl">
        <Link href={"/menu"}><h1 className="text-white">Our Food Menu</h1></Link>
          <MdKeyboardArrowRight className="text-white" />
          <h1 className="text-[#ff9f0d]">
            <u>Shopping Cart</u>
          </h1>          
        </div>
      </header>
      <section className="container mx-auto p-6 bg-gray-100 min-h-screen ">
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-xl md:text-2xl text-center my-10 md:m-20">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <Link href={'/checkout'}><button
            onClick={handleProceed} //=> router.push('/checkout')}
            className="mt-4 w-full px-4 py-2 bg-[#ff9f0d] text-black rounded-md hover:bg-[#e2b46f]"
          >
            Proceed to check Out
          </button>
          </Link>
          <Link href={"/menu"}><button       
            className="mt-4 w-full px-4 py-2 bg-[#ff9f0d] text-black rounded-md hover:bg-[#e2b46f]"
          >
            Continue to Shopping
          </button></Link>
        </div>
      )}
      </section>
    </main>
  );
};

export default CartPage;
