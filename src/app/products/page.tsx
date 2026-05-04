import Link from "next/link";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10 animate__animated animate__fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">All Summer Essentials</h1>
        <p className="text-gray-500 text-lg">Browse our complete collection of summer products.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-200">
            <figure className="px-4 pt-4">
              <img src={product.image} alt={product.name} className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-xl leading-tight">{product.name}</h2>
                <div className="badge badge-secondary whitespace-nowrap">{product.category}</div>
              </div>
              <p className="text-sm text-gray-500">{product.brand}</p>
              
              <div className="mt-4 flex justify-between items-end w-full">
                <div>
                  <p className="text-orange-500 font-bold text-2xl">${product.price}</p>
                  <div className="rating rating-xs mt-1">
                    <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                    <span className="ml-1 text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
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
