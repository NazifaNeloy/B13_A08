"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName((prev) => (prev === "" ? session.user.name || "" : prev));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setImage((prev) => (prev === "" ? session.user.image || "" : prev));
    }
  }, [session]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const { error } = await authClient.updateUser({
        name,
        image
      });
      
      if (error) {
        setError(error.message || "Failed to update profile");
      } else {
        router.push("/my-profile");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!session) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

  return (
    <div className="container mx-auto px-4 py-16 animate__animated animate__fadeIn">
      <div className="max-w-md mx-auto">
        <Link href="/my-profile" className="btn btn-ghost mb-6">← Back to Profile</Link>
        
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold mb-6 justify-center">Update Information</h2>
            
            {error && <div className="alert alert-error mb-4">{error}</div>}
            
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Upload Photo</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
              
              <div className="form-control mt-8">
                <button type="submit" className="btn btn-primary w-full text-white" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : "Update Information"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
