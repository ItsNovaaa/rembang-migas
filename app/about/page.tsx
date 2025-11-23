"use client";

import Navbar from "../Components/SubNavbar"; // Pastikan path ini benar
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Hero from "./hero";
import OurStory from "./our-story";
import Struktur from "./struktur";
import Mitra from "./our-partner";
import Footer from "../Components/Footer";
import Produk from "./produk";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Navbar (Akan kita buat style khusus agar putih seperti gambar) */}
      <Navbar />

      {/* 2. Main Content Wrapper */}
      {/* PENTING: 'pt-[80px]' atau 'pt-20' memberikan jarak agar konten tidak tertutup Navbar Fixed */}
      <main className="flex-grow"> 
        
        {/* HERO SECTION */}
        <Hero />
        {/* Our Story Section */}
        <OurStory />
        {/* Team Section */}
        <Struktur />
        {/* Partners Section */}
        <Mitra />
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}