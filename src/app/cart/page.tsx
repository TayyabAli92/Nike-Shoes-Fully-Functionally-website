"use client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Product } from "../../../types/products";
import { decrementQuantity, getCart, incrementQuantity, removeFromTheCart } from "../../../redux/cartSlice";

export default function Bag() {
  const productCart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  let totalPrice = 0;
  productCart.forEach((item: Product) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col lg:flex-row mx-auto max-w-[1440px] gap-8">
      {/* Bag Section */}
      <div className="p-6 w-full lg:w-[717px]">
        {/* Free Delivery Section */}
        <div className="bg-gray-50 p-4 border rounded-md text-start w-full mb-6">
          <p className="text-sm font-medium text-gray-600">Free Delivery</p>
          <p className="text-xs text-gray-500">
            Applies to orders of $14,000.00 or more.{" "}
            <a href="#" className="text-blue-500 underline">
              View details
            </a>
          </p>
        </div>
        <h1 className="text-xl font-semibold mb-6">Bag</h1>

        {productCart.map((product: Product) => (
          <div
            key={product._id}
            className="flex flex-col sm:flex-row items-start border-b pb-6 mb-6"
          >
            <div className="w-24 h-24 relative mr-4">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={150}
                  height={150}
                  className="object-cover rounded"
                />
              )}
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-gray-800">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {product.description}
              </p>
            </div>

            <div className="text-right mt-4 sm:mt-0">
              <p className="font-medium text-gray-800">MRP: ${product.price}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (product.quantity > 1) {
                      dispatch(decrementQuantity(product));
                    }
                  }}
                  className="w-8 h-8 bg-gray-200 text-2xl font-bold text-gray-800 rounded-full flex items-center justify-center transition-all transform hover:bg-gray-800 hover:text-white hover:scale-110"
                >
                  -
                </button>
                <span className="text-2xl font-semibold text-gray-900">
                  {product.quantity}
                </span>
                <button
                  onClick={() => {
                    dispatch(incrementQuantity(product));
                  }}
                  className="w-8 h-8 bg-gray-200 text-2xl font-bold text-gray-800 rounded-full flex items-center justify-center transition-all transform hover:bg-gray-800 hover:text-white hover:scale-110"
                >
                  +
                </button>
              </div>
              <button onClick={() => {
                        dispatch(removeFromTheCart(product._id));
                      }}
              >Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-white p-6 w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Estimated Delivery &amp; Handling</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-800 font-medium">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
        <Link href="/checkout">
          <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm hover:bg-gray-800">
            Member Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
