"use client";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { groq } from "next-sanity";

export default function ProductCard() {
  const [product, setProduct] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function productData() {
      try {
        const productFetchData: Product[] = await client.fetch(groq`*[_type == "product"]{
          productName,
          price,
          image,
          color,
          description,
          inventory,
          category,
          status,
          _id
        }`);
        setProduct(productFetchData);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    productData();
  }, []);

  const dispatch = useAppDispatch();

  if (loading) return <p className="text-center text-lg">Loading products...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {product?.map((element: Product) => (
        <Link
          href={`/product/${element._id}`}
          key={element._id}
          className="group relative"
        >
          <div className="relative">
            {element.image && (
              <Image
                src={urlFor(element.image).url()}
                alt={element.productName || "Product"}
                width={348}
                height={348}
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <Link href={""}>
                <button
                  className="bg-white text-black font-medium py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => {
                    dispatch(addToCart(element));
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center sm:text-left">
            <h3 className="text-[#111111] font-bold text-md sm:text-xl">
              {element.productName}
            </h3>
            <p className="text-[#111111] font-medium text-sm sm:text-base mt-1">
              ${element.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
