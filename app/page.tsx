import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </div>  
  );
}
