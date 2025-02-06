"use client"
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import ShopCard from "@/components/Shose_Card";
import MenWomenCard from "@/components/Men_Women_Card";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ClothesCard } from "@/components/Men_Women_Card";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
import { Product } from "../../types/products";

export default function Home() {

  const handlePrev = () => {
    console.log("Previous button clicked");
  };

  const handleNext = () => {
    console.log("Next button clicked");
  };

  const [product, setProduct] = useState<Product[]>([])

  useEffect(()=> {
    async function fetchproduct(){
      const fetchProductData : Product[] = await client.fetch(allProducts)
      setProduct(fetchProductData)
    }
    fetchproduct()
  },[])
  console.log(product);
  

  return (
    <div className="flex flex-col justify-center mx-auto max-w-[1440px]">
      <div className="bg-[#F5F5F5] w-full flex justify-center flex-col items-center text-center py-8">
        <h1 className="font-bold text-xl text-black md:text-3xl lg:text-4xl">
          Hello Nike App
        </h1>
        <p className="mt-4 text-sm md:text-base text-black lg:text-lg">
          Download the app to access everything Nike.{" "}
          <Link href="/" className="text-black underline">
            Get Your Great
          </Link>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src="/Image-00.png"
          alt="Image"
          width={1260}
          height={977}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-center mt-8 px-4">
        <p className="text-xl md:text-2xl lg:text-3xl">First Look</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 text-center">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-center mt-8 text-sm md:text-base lg:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          --designed to push you past your limits and help you go to the max.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-9 mt-12 w-full px-4">
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Notify Me
        </button>
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Shop Air Max
        </button>
      </div>

      <div className="flex flex-col items-start ml-4 mt-6 md:ml-7 md:mt-10 "
      id="men">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">Best of Air Max</h1>
          <span className="gap-3 flex items-center">
            <p className="text-sm md:text-base">Shop</p>
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={500}  
              height={300}
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <Image
              src="/arrow-0.png"
              alt="Arrow"
              width={500}  
              height={300}
              className="w-6 h-6 md:w-12 md:h-12"
            />
          </span>
        </div>
        <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-5">
          <ShopCard
            image="/shose-2.png"
            name="Nike Air Max Pulse"
            description="Women's Shoes"
            discount="$ 13 995"
          />
          <ShopCard
            image="/shose-2.png"
            name="Nike Air Max Pulse"
            description="Men's Shoes"
            discount="$ 13 995"
          />
          <ShopCard
            image="/shose-00.png"
            name="Nike Air Max 97 SE"
            description="Men's Shoes"
            discount="$ 16 995"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-start justify-between mx-7"
      id="women">
        <div className="flex flex-col w-full">
          <h1 className="text-lg md:text-xl font-bold mt-9 mb-5">Gear Up</h1>
          <div className="flex items-center justify-end mt-5">
            <p className="text-sm md:text-base mr-3">Shop</p>
            {/* Previous Arrow Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 mr-3 transition-all"
            >
              <FiArrowLeft className="w-6 h-6 md:w-12 md:h-12 text-gray-600" />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 mr-3 transition-all"
            >
              <FiArrowRight className="w-6 h-6 md:w-12 md:h-12 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-x-auto mt-5 mx-7">
        <MenWomenCard
          image="/men-00.png"
          name="Nike Dri-FIT ADV TechKnit Ultra"
          description="Men's Shoes-Sleeve Running Top"
          discount="$ 3,895"
        />
        <MenWomenCard
          image="/men-02.png"
          name="Nike Dri-FIT Challenger"
          description="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
          discount="$ 2,495"
        />
        <MenWomenCard
          image="/women-00.png"
          name="Nike Dri-FIT ADV Run Division"
          description="Women's Long-Sleeve Running Top"
          discount="$ 5,295"
        />
        <MenWomenCard
          image="/women-02.png"
          name="Nike Fast"
          description="Women's Mid-Rise 7/8 Running Legging with Pockets"
          discount="$ 3,795"
        />
      </div>

      <div className="mx-4 md:mx-0">
        <div className="mt-12">
          <h1 className="text-lg md:text-xl font-bold mt-9 mb-5 ml-6">
            Don't Miss
          </h1>
          <div className="flex justify-center mt-12">
            <Image
              src="/see-site-image.png"
              alt="See Site Image"
              width={1344}
              height={700}
              className="max-w-full h-auto"
            />
          </div>

          <div className="text-center">
            <h1 className="font-bold mt-14 text-[32px] md:text-[52px]">
              FLIGHT ESSENTIALS
            </h1>
            <p className="mt-5 text-sm md:text-base">
              Your built-to-last, all-week wears—but with style only Jordan
              Brand can deliver.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-black rounded-full text-white mt-12 h-12 w-full md:w-32">
              Shop
            </button>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-0">
        <h1 className="text-lg md:text-xl font-bold mt-9 mb-5 ml-6 text-center md:text-left">
          The Essentials
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <ClothesCard image="/men-01.png" button="Men's" width="w-[77px]" />
          <ClothesCard image="/women-01.png" button="Women's" width="w-[109px]" />
          <ClothesCard image="/kid-01.png" button="Kids'" width="w-[77px]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-7 mt-7 gap-16 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Icons</h1>
          <p className="text-[#757575]">Air Force 1</p>
          <p className="text-[#757575]">Huarache</p>
          <p className="text-[#757575]">Air Max 90</p>
          <p className="text-[#757575]">Air Max 95</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Shoes</h1>
          <p className="text-[#757575]">All Shoes</p>
          <p className="text-[#757575]">Custom Shoes</p>
          <p className="text-[#757575]">Jordan Shoes</p>
          <p className="text-[#757575]">Running Shoes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Clothing</h1>
          <p className="text-[#757575]">All Clothing</p>
          <p className="text-[#757575]">Modest Wear</p>
          <p className="text-[#757575]">Hoodies & Pullovers</p>
          <p className="text-[#757575]">Shirts & Tops</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Kids'</h1>
          <p className="text-[#757575]">Infant & Toddler Shoes</p>
          <p className="text-[#757575]">Kids' Shoes</p>
          <p className="text-[#757575]">Kids' Jordan Shoes</p>
          <p className="text-[#757575]">Kids' Basketball Shoes</p>
        </div>
      </div>
    </div>
  );
}