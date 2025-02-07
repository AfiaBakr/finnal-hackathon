import { createClient } from "next-sanity";

const client = createClient({
  projectId :"0tjb24gi",
  dataset :"production",
  apiVersion :"2021-08-31",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token:"skgq60RO7mI2MXVNrIId80oghmoa9VxAukAsX74s9ymlXE5T5MUsMbGg0ghFgey3X10YiyAbgDtpu4FNBcaFvozje6vs3kFvMNaCDteqLNRA1eLzIlpxBOhOE800oqZfVia35gg9IjTZOu5IuiyFcWwGyTD4uAzkyRWV7iPEOGE4L888PKRp"

});


// export async function sanityFatch({query , params ={}} : {query : string , params? :any}){

//     return await client.fetch(query,params)
// }

export async function sanityFetch({ query, params = {} }: { query: string; params?: Record<string, unknown> }) {
  return await client.fetch(query, params);
}
