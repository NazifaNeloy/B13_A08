"use client";
import { CartItem, useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function AddToCartButton({ product }: { product: Omit<CartItem, "quantity"> & { stock: number } }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="btn btn-primary btn-lg w-full text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
      disabled={product.stock === 0}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </button>
  );
}
