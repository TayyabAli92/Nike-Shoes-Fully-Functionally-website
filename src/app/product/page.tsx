"use client";
import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/Product_Card";

export default function Product() {
  const [isGenderOpen] = useState(true);
  const [isKidsOpen] = useState(true);
  const [isPriceOpen] = useState(true);
  return (
    <div className="flex xs:flex-row flex-col mx-auto max-w-[1440px]">
      {/* Left Section */}
      <div className="ml-4 sm:ml-10 w-full max-w-xs lg:max-w-sm">
        {/* New Section */}
        <div className="w-full py-6">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">
            New (500)
          </h2>

          <ul className="space-y-2 sm:space-y-4 text-gray-700">
            <li className="hover:text-black cursor-pointer">Shoes</li>
            <li className="hover:text-black cursor-pointer">Sports Bras</li>
            <li className="hover:text-black cursor-pointer">Tops & T-Shirts</li>
            <li className="hover:text-black cursor-pointer">
              Hoodies & Sweatshirts
            </li>
            <li className="hover:text-black cursor-pointer">Jackets</li>
            <li className="hover:text-black cursor-pointer">
              Trousers & Tights
            </li>
            <li className="hover:text-black cursor-pointer">Shorts</li>
            <li className="hover:text-black cursor-pointer">Tracksuits</li>
            <li className="hover:text-black cursor-pointer">
              Jumpsuits & Rompers
            </li>
            <li className="hover:text-black cursor-pointer">
              Skirts & Dresses
            </li>
            <li className="hover:text-black cursor-pointer">Socks</li>
            <li className="hover:text-black cursor-pointer">
              Accessories & Equipment
            </li>
          </ul>
        </div>

        <hr />

        {/* Filters Section */}
        <div className="w-full bg-white p-4 space-y-6 text-gray-800">
          {/* Gender Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              // onClick={() => setGenderOpen(!isGenderOpen)}
            >
              <h3 className="font-bold">Gender</h3>
              <span>{isGenderOpen ? "▲" : "▼"}</span>
            </div>
            {isGenderOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Men</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Women</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Unisex</span>
                  </label>
                </li>
              </ul>
            )}
          </div>
          <hr />

          {/* Kids Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              // onClick={() => setKidsOpen(!isKidsOpen)}
            >
              <h3 className="font-bold">Kids</h3>
              <span>{isKidsOpen ? "▲" : "▼"}</span>
            </div>
            {isKidsOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Boys</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Girls</span>
                  </label>
                </li>
              </ul>
            )}
          </div>
          <hr />

          {/* Shop By Price Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              // onClick={() => setPriceOpen(!isPriceOpen)}
            >
              <h3 className="font-bold">Shop By Price</h3>
              <span>{isPriceOpen ? "▲" : "▼"}</span>
            </div>
            {isPriceOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Under ₹ 2,500.00</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>₹ 2,501.00 - ₹</span>
                  </label>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* End */}

      <div className="space-x-6 p-4">
        <div className="flex gap-4 items-center mb-4 justify-end">
          <p>Hide Filters</p>
          <Image
            src="/filter.png"
            alt="Filter"
            width={24}
            height={24}
            className="hover:cursor-pointer"
          />
          <p>Sort By</p>
          <Image
            src="/button.png"
            alt="Button"
            width={14}
            height={14}   
            className="hover:cursor-pointer"
          />
        </div>

        

        <div className=" gap-6 max-w-[1440px] mx-auto p-5">
          <div className="gap-3 flex">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
