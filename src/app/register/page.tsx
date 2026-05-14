"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { error: signUpError } = await authClient.signUp.email({
        email,
        password,
        name,
        image: photoUrl,
      });
      if (signUpError) {
        setError(signUpError.message || "Registration failed");
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-base-200 py-10 animate__animated animate__fadeIn">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center mb-6">Register</h2>
          {error && <div className="alert alert-error">{error}</div>}
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Photo</span>
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
                      setPhotoUrl(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Register"}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>Already have an account? <Link href="/login" className="link link-primary">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
