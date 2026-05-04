import Link from "next/link";
import { ShoppingSun, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <aside>
        <ShoppingSun className="w-12 h-12 text-orange-500" />
        <p>
          <span className="font-bold text-xl">SunCart Ltd.</span>
          <br />
          Providing summer essentials since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/" className="link link-hover">About us</Link>
        <Link href="/" className="link link-hover">Contact</Link>
        <Link href="/" className="link link-hover">Jobs</Link>
        <Link href="/" className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:text-primary transition-colors cursor-pointer"><Twitter className="w-6 h-6" /></a>
          <a className="hover:text-primary transition-colors cursor-pointer"><Instagram className="w-6 h-6" /></a>
          <a className="hover:text-primary transition-colors cursor-pointer"><Facebook className="w-6 h-6" /></a>
        </div>
      </nav>
    </footer>
  );
}
