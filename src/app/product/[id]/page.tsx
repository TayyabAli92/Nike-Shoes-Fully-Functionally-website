"use client";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../../../hooks/redux";
import { addToCart } from "../../../../redux/cartSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [id, setId] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const extractedId = path.split("/").pop();

    if (extractedId) {
      setId(extractedId);
    } else {
      setErrorMessage("Product ID is missing.");
    }
  }, [])

  useEffect(() => {
    const fetchProductData = async () => {
      if(!id) return;
      try {
        const productFetchData: Product[] = await client.fetch(
          groq`*[_type == "product" && _id == $id]{
              _id,
              productName,
              _type,
              image,  
              price,
              description
          }`,
          { id }
        );

        if (productFetchData.length > 0) {
          setProduct(productFetchData[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading product...</p>;
  }

  if (error || !product) {
    return <p className="text-center text-lg font-semibold text-red-500">Product not found or failed to load.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl p-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          {product.image && (
            <Image
              src={urlFor(product?.image).url()}
              alt={product.productName}
              height={400}
              width={400}
              className="w-full max-w-md rounded-lg shadow-xl transition-transform transform hover:scale-110"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900">{product?.productName}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{product?.description}</p>
          <div className="text-3xl font-bold text-gray-800">$ {product?.price}</div>
          <div className="text-xl font-medium text-gray-700">Total: $ {product?.price}</div>
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            className="flex items-center justify-center gap-4 w-full max-w-sm bg-black text-white py-4 px-6 rounded-full hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
          >
            <Image src="/Buy.png" alt="Buy" height={24} width={24} className="transition-transform transform hover:scale-110" />
            <p className="font-semibold text-lg">Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
