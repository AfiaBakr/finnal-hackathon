"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/action/action";
import Link from "next/link";
import { Food } from "../type/food";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const router = useRouter();
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    const orderData ={
      _type : 'order',
      firstName : formValues.firstName,
      lastName : formValues.lastName,
      address : formValues.address,
      phone : formValues.phone,
      email : formValues.email,
      cartItems : cartItems.map(item =>({
        _type: 'reference',
        _ref: item._id
      })),
      total : total,
      discount : discount, 
      orderDate: new Date().toISOString
    }
    try{
      await client.create(orderData)
      localStorage.removeItem('appliedDiscount')
    } catch (error ){
      console.error('error creating order', error)
    }

    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
       toast.success("Order placed successfully!");
    } else {
       toast.error("Please fill in all the fields.");
    }
  };

  return (
    <main className={`min-h-screen bg-black`}>
     
      
        <header
        className="bg-cover bg-center h-52 flex flex-col text-center"
        style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
          Check Out
        </h1>
        <div className="flex items-center justify-center text-lg md:text-2xl">
        <Link href={"/menu"}><h1 className="text-white">Shopping Cart</h1></Link>
          <MdKeyboardArrowRight className="text-white" />
          <h1 className="text-[#ff9f0d]">
            <u>Check Out</u>
          </h1>          
        </div>
        </header>
        

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-gray-50 border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.quantity}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-gray-50 border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
           
            
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-[#FF9F0D] hover:bg-[#e2b46f] text-white hover:text-black"
              onClick={(handlePlaceOrder)=> router.push('/thankyou')}
              //  => router.push('/signin')}
            >
              Place Order
            </button>
            <button
              className="w-full h-12 bg-[#FF9F0D] hover:bg-[#e2b46f] text-white hover:text-black"
              onClick={() => router.push('/menu')}
            >
              Continue to Shopping
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}