

// import { chef } from "@/app/type/chef";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import Link from "next/link";
// import { MdKeyboardArrowRight } from "react-icons/md";

// interface ChefPageProps {
//   params: { slug: string };
// }

// async function getChef(slug: string): Promise<chef | null> {
//   return await client.fetch(
//     groq`*[_type=="chef" && slug.current == $slug][0] {
//       _id,
//       name,
//       position,
//       experience,
//       specialty,
//       image,
//       description,
//       available,
//     }`,
//     { slug }
//   );
// }

// export default async function ChefPage({ params }: ChefPageProps) {
//   const chef = await getChef(params.slug);

//   if (!chef) {
//     return (
//       <main className="flex items-center justify-center min-h-screen bg-gray-100">
//         <h1 className="text-2xl font-bold text-gray-700">Chef not found</h1>
//       </main>
//     );
//   }

//   return (
//     <main className="border border-spacing-1 bg-slate-100 md:mx-20 md:mt-20 md:mb-10 mx-4 mt-8 mb-4 p-8 rounded-2xl">
//       <header
//         className="bg-cover bg-center h-52 flex flex-col text-center"
//         style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
//       >
//         <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
//           Chef Detail
//         </h1>
//         <div className="flex items-center justify-center text-lg md:text-2xl">
//           <Link href={"/menu"}>
//             <h1 className="text-white">Our Chefs</h1>
//           </Link>
//           <MdKeyboardArrowRight className="text-white" />
//           <h1 className="text-[#ff9f0d]">
//             <u>Chef Detail</u>
//           </h1>
//         </div>
//       </header>
      
//       <section className="flex flex-col md:flex-row items-center justify-center">
//         <div className="aspect-square">
//           {chef.image && (
//             <Image
//               src={urlFor(chef.image).url()}
//               alt={chef.name}
//               width={600}
//               height={600}
//               className="w-[600px] h-[600px] object-cover rounded-md mb-4"
//             />
//           )}
//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{chef.name}</h1>
//         </div>

//         <div className="md:pl-10 pl-2 md:text-2xl text-xl">
//           <p className="text-gray-500 mb-6"><b>Position:</b> {chef.position}</p>
//           <p className="text-gray-500 mb-6"><b>Specialty:</b> {chef.specialty}</p>
//           <p className="text-gray-500 mb-6"><b>Experience:</b> {chef.experience} Years</p>
//           <p className="text-gray-500 mb-6"><b>Availability:</b> {chef.available ? "Available" : "Out of Stock"}</p>
//           <p className="text-gray-500 mb-6"><b>Description:</b> {chef.description}</p>
//         </div>
//       </section>
//     </main>
//   );
// }




import { chef } from "@/app/type/chef";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ChefPageProps {
    params: { slug: string };
}

async function getChef(slug: string): Promise<chef> {
    return client.fetch(
        groq`*[_type=="chef" && slug.current == $slug][0] {
            _id,
            name,
            position,
            experience,
            specialty,
            image,
            description,
            available
        }`,
        { slug }
    );
}

export default async function ChefPage({ params }: ChefPageProps) {
    const chef = await getChef(params.slug);
    
    return (
        <main className="border border-spacing-1 bg-slate-100 md:mx-20 md:mt-20 md:mb-10 mx-4 mt-8 mb-4 p-8 rounded-2xl">
            <header
                className="bg-cover bg-center h-52 flex flex-col text-center"
                style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-16">
                    Chef Detail
                </h1>
                <div className="flex items-center justify-center text-lg md:text-2xl">
                    <Link href={"/menu"}>
                        <h1 className="text-white">Our Chefs</h1>
                    </Link>
                    <MdKeyboardArrowRight className="text-white" />
                    <h1 className="text-[#ff9f0d]">
                        <u>Chef Detail</u>
                    </h1>
                </div>
            </header>
            <section className="flex-col md:flex items-center justify-center">
                <div className="aspect-square">
                    {chef.image && (
                        <Image
                            src={urlFor(chef.image).url()}
                            alt={chef.name}
                            width={600}
                            height={600}
                            className="w-[600px] h-[600px] object-cover rounded-md mb-4"
                        />
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{chef.name}</h1>
                </div>
                <div className="w-[300px] h-[600px] text-left md:pl-10 pl-2 md:text-2xl text-xl">
                    <p className="text-gray-500 mb-6"><b>Position:&nbsp; </b>{chef.position}</p>
                    <p className="text-gray-500 mb-6"><b>Specialty:&nbsp; </b>{chef.specialty}</p>
                    <p className="text-gray-500 mb-6"><b>Experience:&nbsp; </b>{chef.experience} Years</p>
                    <p className="text-gray-500 mb-6"><b>Availability:&nbsp; </b>{chef.available ? "Available" : "Out of Stock"}</p>
                    <p className="text-gray-500 mb-6"><b>Description:&nbsp; </b>{chef.description}</p>
                </div>
            </section>
        </main>
    );
}



