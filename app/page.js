import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import vercel from "../public/vercel.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start relative  bg-neutral-900">
      <nav className="w-full h-max p-4 flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md sticky top-0">
        <div>
          <Image src={vercel} width="100" height="100" atl="logo"/>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/" className="hover:text-gray-600 text-white">Features</Link>
          <Link href="/" className="hover:text-gray-600 text-white">Pricing</Link>
          <Link href="/" className="hover:text-gray-600 text-white">FAQs</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/"><Button variant="primary" className="rounded-3xl border hover:border-white bg-white hover:bg-black hover:text-white font-bold">Login</Button></Link>
          <Link href="/"><Button variant="primary" className="rounded-3xl border border-transparent hover:border-white bg-yellow-200 text-black font-bold" >Create Account</Button></Link>
        </div>
      </nav>
    </main>
  );
}
