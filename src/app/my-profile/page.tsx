import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { User, Mail, Image as ImageIcon } from "lucide-react";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="container mx-auto px-4 py-16 animate__animated animate__fadeIn">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Profile</h1>
        
        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
          <div className="bg-primary h-32 w-full"></div>
          <div className="px-8 pb-8 flex flex-col items-center -mt-16">
            <div className="avatar mb-6">
              <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 bg-base-200">
                {user.image ? (
                  <img src={user.image} alt={user.name} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary bg-orange-100">
                    <User className="w-16 h-16" />
                  </div>
                )}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
            <div className="flex items-center gap-2 text-gray-500 mb-6">
              <Mail className="w-4 h-4" />
              <span>{user.email}</span>
            </div>
            
            <div className="w-full divider"></div>
            
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center bg-base-200 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <User className="text-primary w-5 h-5" />
                  <span className="font-semibold">Name</span>
                </div>
                <span>{user.name}</span>
              </div>
              <div className="flex justify-between items-center bg-base-200 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <ImageIcon className="text-primary w-5 h-5" />
                  <span className="font-semibold">Photo URL</span>
                </div>
                <span className="truncate max-w-[200px] sm:max-w-xs">{user.image || "Not provided"}</span>
              </div>
            </div>
            
            <div className="mt-8 w-full">
              <Link href="/my-profile/update" className="btn btn-primary w-full text-white">
                Update Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
