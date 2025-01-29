"use client"
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetail = () => {
  const product: Product = {
    id: "1",
    name: "Nike Air Force 1 PLT.AF.ORM",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its 'Inside out'-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    price: 8695.0,
    image: "/shoe-3.png",
  };

  // Cart state: Store product IDs and their quantities
  const [cart, setCart] = useState<Map<string, number>>(new Map());

  // Add product to cart with quantity
  const addToCart = (productId: string) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      newCart.set(productId, (newCart.get(productId) || 0) + 1); // Increment the quantity
      return newCart;
    });
  };

  // Remove product from cart (or reduce quantity)
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      const currentQuantity = newCart.get(productId) || 0;
      if (currentQuantity > 1) {
        newCart.set(productId, currentQuantity - 1); // Decrease the quantity
      } else {
        newCart.delete(productId); // Remove from cart if quantity is 1
      }
      return newCart;
    });
  };

  // Check if product is already in cart and get its quantity
  const quantity = cart.get(product.id) || 0;

  // Calculate the total price based on quantity
  const totalPrice = quantity * product.price;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl p-8">
        {/* Product Image */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg shadow-xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

          {/* Price per Unit */}
          <div className="text-2xl font-semibold text-gray-900">
            ₹ {product.price.toLocaleString()}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-12 h-12 bg-gray-200 text-xl font-semibold text-black rounded-full flex items-center justify-center transition-all transform hover:bg-black hover:text-white"
            >
              -
            </button>
            <span className="text-2xl font-semibold text-gray-900">{quantity}</span>
            <button
              onClick={() => addToCart(product.id)}
              className="w-12 h-12 bg-gray-200 text-xl font-semibold text-black rounded-full flex items-center justify-center transition-all transform hover:bg-black hover:text-white"
            >
              +
            </button>
          </div>

          {/* Total Price (based on quantity) */}
          <div className="text-2xl font-semibold text-gray-900 mb-6">
            Total: ₹ {totalPrice.toLocaleString()}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product.id)}
            className="flex items-center justify-center gap-4 w-full max-w-xs bg-black text-white py-4 px-6 rounded-full hover:bg-gray-800 transition-all transform"
          >
            <Image
              src="/Buy.png"
              alt="Buy"
              height={29}
              width={29}
              className="transition-transform transform hover:scale-110"
            />
            <p className="font-semibold text-lg">Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
