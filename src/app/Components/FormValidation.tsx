'use client'
import { useForm } from "react-hook-form";

const FormValidation = () => {
    const { register, handleSubmit,
        formState: { errors }

    } = useForm();
    console.log(errors)
    const CustomSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <form onSubmit={handleSubmit(CustomSubmit)} className="bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-black mb-4 text-center">Contact Us</h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Name
                    </label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                    {
                        // errors.name && <p className="text-red-500 text-sm mt-2">Name is required</p>
                        errors.name && errors.name.type === "required" && <p className="text-red-600 font-bold">Name is Required</p>
                    }
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Email
                    </label>
                    <input
                        {...register('email' , {required: true})}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                {
                    errors.email && errors.email.type == 'required' &&
                    <p className="text-red-600 font-bold">Email is Required</p>
                }
                <button
                    type="submit"
                    className="w-fullbg-[#FF9F0D] hover:bg-[#e2b46f] text-black py-2 px-4 rounded-md transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormValidation;