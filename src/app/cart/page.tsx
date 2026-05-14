"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalCost, totalItems, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate__animated animate__fadeIn">
        <div className="max-w-md mx-auto bg-base-100 p-10 rounded-2xl shadow-xl border border-base-200">
          <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven&apos;t added any summer essentials yet.</p>
          <Link href="/products" className="btn btn-primary text-white w-full">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold mb-10 text-center">Your Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="card card-side bg-base-100 shadow-lg border border-base-200 overflow-hidden">
              <figure className="w-1/3 bg-base-200 p-4">
                <img src={item.image} alt={item.name} className="object-cover h-32 w-full rounded-lg" />
              </figure>
              <div className="card-body w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="card-title text-xl">{item.name}</h2>
                    <p className="text-orange-500 font-bold">${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-ghost btn-sm text-error">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-circle btn-xs">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-circle btn-xs">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-right font-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center pt-6">
            <button onClick={clearCart} className="btn btn-ghost text-error">Clear Cart</button>
            <Link href="/products" className="btn btn-outline">Continue Shopping</Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl border border-base-200 sticky top-24">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="font-bold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-xl border-t pt-4 mt-4">
                  <span className="font-bold">Total Cost</span>
                  <span className="font-bold text-orange-500">${totalCost.toFixed(2)}</span>
                </div>
              </div>
              <div className="card-actions mt-8">
                <button className="btn btn-primary btn-lg w-full text-white" onClick={() => alert("Checkout not implemented yet, but your total is $" + totalCost.toFixed(2))}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
