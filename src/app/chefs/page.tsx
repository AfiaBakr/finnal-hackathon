
import { sanityFetch } from "@/sanity/lib/live";
import { allchefs } from "@/sanity/lib/quaries";
import chefs from "@/sanity/schemaTypes/chefs";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

// Define the Item type to describe each food item
type ChefName = {
    _id: string;
    name: string;
    slug: { current: string };
    position: string;
    experience: number;
    specialty: string;
    imageUrl: string;
    description: string;
    available: boolean;
};

  export default async function ChefCards() {
    const response = await sanityFetch({ query: allchefs });
    
  const chef: ChefName[] = 
    response.data?.map((chefname: any) => ({
        _id: chefname._id,
        name: chefname.name,
        slug: chefname.slug,
        position: chefname.positon, 
        experience: chefname.experience,
        specialty: chefname.specialty,
        imageUrl: chefname.imageUrl,
        description: chefname.description,
        available : chefname.available,
        
      })) || [];
    
    return(
        <main className="bg-white">
        <header
      className="bg-cover bg-center h-52 flex flex-col text-center"
      style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
        Our Chefs
      </h1>
      <div className="flex items-center justify-center text-lg md:text-2xl">
      <Link href={"/menu"}><h1 className="text-white">Home</h1></Link>
        <MdKeyboardArrowRight className="text-white" />
        <h1 className="text-[#ff9f0d]">
          <u>Our Chefs</u>
        </h1>  
      </div>
    </header>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2  gap-2 md:gap-6">
          {chef.map((chefname) => (
            <div key={chefname._id}  >
          
        
        <Link  className="border border-gray-300 py-2 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105"
        href={`/chef/${chefname.slug.current}`}>
         
          {chefname.image && (
           <Image
             src={urlFor(chefname.image).url()}
             alt={chefname.name}
             width={500}
             height={500}
             className="w-80 h-80 object-cover rounded-md mb-2 md:mb-4"
           />
         )}
         <h2 className="text-xl font-semibold text-center mb-2">{chefname.name}</h2>
  </Link>
                {/* <p className="text-gray-500 text-center mb-2">{chefname.position}</p>
            <p className="text-lg font-bold text-center">Experience: {chefname.experience} Years</p>
            <p className="text-lg font-bold text-center">{chefname.specialty}</p>
            <p className="text-lg font-bold text-center">{chefname.description}</p>
            <p className="text-lg font-bold text-center">{chefname.available}</p>
           */}
      </div>
    ))}
    </div>
      </section>
        </main>
    )

  } 
