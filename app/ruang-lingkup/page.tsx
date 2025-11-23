'use client'

import Navbar from "../Components/SubNavbar"; // Pastikan path ini benar
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Hero from "./hero";
import RuangLingkupSection from "./ruang-lingkup";
import Footer from "../Components/Footer";

export default function RuangLingkup() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Navbar (Akan kita buat style khusus agar putih seperti gambar) */}
      <Navbar />

      {/* 2. Main Content Wrapper */}
      <main className="flex-grow">
        {/* Produk Section */}
        <Hero />

    {/* Ruang Lingkup Section */}
    <RuangLingkupSection />
    <Footer />
      </main>
    </div>
  );
}