"use client";

import Navbar from "../Components/SubNavbar"; // Pastikan path ini benar
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Hero from "./hero";
import ProdukSection from "./produk-section";
import Footer from "../Components/Footer";

export default function Produk() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Navbar (Akan kita buat style khusus agar putih seperti gambar) */}
      <Navbar />

      {/* 2. Main Content Wrapper */}
      {/* PENTING: 'pt-[80px]' atau 'pt-20' memberikan jarak agar konten tidak tertutup Navbar Fixed */}
      <main className="flex-grow">
        {/* Produk Section */}
        <Hero />
        <div className="bg-gradient-to-b from-[#f2fcfc] to-[#e8f9f9]">
          <ProdukSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
