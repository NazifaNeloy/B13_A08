import Link from "next/link";
import productsData from "@/data/products.json";

function Hero() {
  return (
    <div className="hero min-h-[70vh] relative overflow-hidden" style={{backgroundImage: "url('/assets/product1.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-xl animate__animated animate__fadeInUp">
          <h1 className="mb-5 text-6xl font-extrabold text-white drop-shadow-lg">Summer Sale <span className="text-orange-400">50% OFF</span></h1>
          <p className="mb-8 text-xl text-gray-200">
            Get ready for the summer with our hot deals 🔥 on all summer essentials. Stay cool, stylish, and protected.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg text-white border-none rounded-full px-8 shadow-lg">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

function PopularProducts() {
  const popular = productsData.slice(0, 3);
  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-base-content mb-4">Popular Products</h2>
        <p className="text-gray-500">Our best-selling summer essentials just for you.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popular.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200">
            <figure className="px-6 pt-6">
              <img src={product.image} alt={product.name} className="rounded-xl h-56 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{product.name}</h2>
              <p className="text-orange-500 font-bold text-2xl">${product.price}</p>
              <div className="rating rating-sm mt-2">
                <input type="radio" name={`rating-${product.id}`} className="mask mask-star-2 bg-orange-400" disabled checked />
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <div className="card-actions mt-6 w-full">
                <Link href={`/products/${product.id}`} className="btn btn-primary w-full text-white rounded-full">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExtraSections() {
  return (
    <div className="bg-base-200 py-20 rounded-t-[3rem]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-4xl font-bold mb-8">Summer Care Tips</h2>
          <ul className="space-y-6">
            <li className="flex gap-6 items-start bg-base-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="badge badge-primary badge-lg py-4 px-3 font-bold text-lg">1</div>
              <div>
                <strong className="text-xl block mb-1">Stay Hydrated</strong>
                <p className="text-gray-600">Drink plenty of water throughout the day to keep your body cool and skin glowing.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start bg-base-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="badge badge-primary badge-lg py-4 px-3 font-bold text-lg">2</div>
              <div>
                <strong className="text-xl block mb-1">Use Sunscreen</strong>
                <p className="text-gray-600">Apply SPF 50+ generously every 2 hours when outdoors to prevent sunburns.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start bg-base-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="badge badge-primary badge-lg py-4 px-3 font-bold text-lg">3</div>
              <div>
                <strong className="text-xl block mb-1">Wear Sunglasses</strong>
                <p className="text-gray-600">Protect your eyes from harmful UV rays with quality polarized shades.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <h2 className="text-4xl font-bold mb-8">Top Brands</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-sm border border-base-300 p-8 flex items-center justify-center font-black text-2xl text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer rounded-2xl">SunShade</div>
            <div className="card bg-base-100 shadow-sm border border-base-300 p-8 flex items-center justify-center font-black text-2xl text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer rounded-2xl">BreezeWear</div>
            <div className="card bg-base-100 shadow-sm border border-base-300 p-8 flex items-center justify-center font-black text-2xl text-accent hover:bg-accent hover:text-white transition-colors cursor-pointer rounded-2xl">GlowSkin</div>
            <div className="card bg-base-100 shadow-sm border border-base-300 p-8 flex items-center justify-center font-black text-2xl text-info hover:bg-info hover:text-white transition-colors cursor-pointer rounded-2xl">BeachVibe</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn pb-10">
      <Hero />
      <PopularProducts />
      <ExtraSections />
    </div>
  );
}
