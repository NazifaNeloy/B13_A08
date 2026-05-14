"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Sun, LogOut, User as UserIcon, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const { totalItems } = useCart();

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <Sun className="w-6 h-6 text-orange-500" />
          SunCart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/my-profile">My Profile</Link></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <Link href="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="badge badge-sm badge-primary indicator-item text-white">{totalItems}</span>
            )}
          </div>
        </Link>
        {session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border border-orange-200">
                {session.user.image ? (
                  <img alt="User Avatar" src={session.user.image} />
                ) : (
                  <div className="bg-orange-100 text-orange-600 flex items-center justify-center w-full h-full">
                    <UserIcon className="w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {session.user.name}
                  <span className="badge badge-primary">User</span>
                </a>
              </li>
              <li><Link href="/my-profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="text-red-500"><LogOut className="w-4 h-4 mr-2"/>Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/register" className="btn btn-primary text-white">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
