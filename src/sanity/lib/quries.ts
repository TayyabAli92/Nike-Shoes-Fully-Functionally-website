import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]{
    _id,
    productName,
    _type,
    image,  
    price,
    description
    }`
export const fourProduct = groq `*[_type == "pruduct"] | order(_createdAt desc)[0..3] {
    _id,
    productName,
    _type,
    image,  
    price,
    description
    }`