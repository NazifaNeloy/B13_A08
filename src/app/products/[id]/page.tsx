import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";
import productsData from "@/data/products.json";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Protection for Task 13
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?callbackURL=/products/${productId}`);
  }

  return (
    <div className="container mx-auto px-4 py-16 animate__animated animate__fadeIn">
      <div className="flex justify-between items-center mb-8">
        <Link href="/products" className="btn btn-ghost">← Back to Products</Link>
      </div>
      
      <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden border border-base-200">
        <figure className="lg:w-1/2 p-8 bg-base-200 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="rounded-2xl max-h-[500px] object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
        </figure>
        <div className="card-body lg:w-1/2 p-10">
          <div className="flex justify-between items-start">
            <h2 className="card-title text-4xl font-black">{product.name}</h2>
            <div className="badge badge-secondary badge-lg">{product.category}</div>
          </div>
          <p className="text-gray-500 text-lg mb-6">Brand: <span className="font-semibold text-base-content">{product.brand}</span></p>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="text-orange-500 font-bold text-4xl">${product.price}</p>
            <div className="divider divider-horizontal"></div>
            <div>
              <div className="rating rating-sm">
                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
              </div>
              <span className="ml-2 font-medium text-lg">{product.rating} / 5</span>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className={`badge ${product.stock > 0 ? "badge-success" : "badge-error"} badge-lg text-white font-bold p-4`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
            </div>
          </div>
          
          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-primary btn-lg w-full text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow" disabled={product.stock === 0}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
