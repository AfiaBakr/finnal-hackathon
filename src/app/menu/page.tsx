


import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { allfoods } from "@/sanity/lib/quaries";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";


// Define the Item type to describe each food item
type FoodItem = {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  price: number;
  originalPrice: number;
  quantity:number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
};

export default async function FoodCards() {
    const response = await sanityFetch({ query: allfoods });
  

    const foods: FoodItem[] = 
    response.data?.map((foodname: FoodItem) => ({
        _id: foodname._id,
        name: foodname.name,
        slug: foodname.slug,
        category: foodname.category,
        originalPrice: foodname.originalPrice,
        price: foodname.price,
        quantity:foodname.quantity,
        tags: foodname.tags || [],
        imageUrl: foodname.imageUrl,
        description: foodname.description,
        available: foodname.available,
      })) || [];
  

  return (
    <main className="bg-black">
      <header
        className="bg-cover bg-center h-52 flex flex-col text-center"
        style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
          Our Food Menu
        </h1>
        <div className="flex items-center justify-center text-lg md:text-2xl">
          <h1 className="text-white">Home</h1>
          <MdKeyboardArrowRight className="text-white" />
          <h1 className="text-[#ff9f0d]">
            <u>Our Food Menu</u>
          </h1>
        </div>
      </header>
      <section>
        {/* <div><FoodCardFilter/></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 md:gap-6">
          {foods.map((food) => (
            <div key={food._id}>
              <Link
                className="border border-gray-300 bg-slate-100 py-2 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-95 md:hover:scale-105"
                href={`/food/${food.slug.current}`}
              >
                {food.imageUrl && (
                  <Image
                    src={urlFor(food.imageUrl).url()}
                    alt={food.name}
                    width={500}
                    height={500}
                    className="w-80 h-80 object-cover rounded-md mb-2 md:mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-center mb-2">{food.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
