"use client";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppSelector } from "../../hooks/redux";
import { getCart } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default function Header() {

  const cartItem = useAppSelector(getCart);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(groq`*[_type == "product"]{
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
      setProducts(data);
      setFilteredProducts(data); // Initialize with all products
    };

    fetchProducts();
  }, []);

  // Handle search query change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="flex items-center justify-between mx-auto max-w-[1440px] px-4 py-5 bg-white flex-col md:flex-row">
      <div className="flex items-center justify-center md:justify-start">
        <Image src="/nike-logo.png" alt="Nike logo" width={78} height={78} />
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-black items-center">
        <Link href="/" className="text-base">
          New & Featured
        </Link>
        <Link href="/#men" className="text-base">
          Men
        </Link>
        <Link href="/#women" className="text-base">
          Women
        </Link>
        <Link href="/product" className="text-base">
          SNKRS
        </Link>
      </div>
      {/* Search and Icons */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-gray-300 rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent outline-none text-black text-[14px] placeholder:text-gray-500 w-full"
            />
            <IoSearch className="text-black w-[20px] h-[20px]" />
          </div>

          {/* Dropdown for filtered products */}
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-2 z-10">
              <ul>
                {filteredProducts.map((product: any) => (
                  <li
                    key={product._id}
                    className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                  >
                    <Link href={`/product/${product._id}`}>
                      {product.productName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <IoMdHeartEmpty className="h-9 w-9" />
        <Link href="/cart" className="relative">
          <p className="bg-red-600 rounded-full text-white text-sm text-center px-2 py-1 absolute -top-2 -right-2 leading-none">
            {cartItem.length}
          </p>
          <AiOutlineShoppingCart className="h-9 w-9" />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 md:hidden">
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-gray-300 rounded-2xl">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="bg-transparent outline-none text-black text-[14px] placeholder:text-gray-500 w-full"
              />
              <IoSearch className="text-black w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="text-base">
                New & Featured
              </Link>
              <Link href="/#men" className="text-base">
                Men
              </Link>
              <Link href="/#women" className="text-base">
                Women
              </Link>
              <Link href="/product" className="text-base">
                SNKRS
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <IoMdHeartEmpty className="h-9 w-9" />
              <Link href="/cart" className="relative">
                <p className="bg-red-600 rounded-full text-white text-sm text-center px-2 py-1 absolute -top-2 -right-2 leading-none">
                  {cartItem.length}
                </p>
                <AiOutlineShoppingCart className="h-9 w-9" />
              </Link>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
