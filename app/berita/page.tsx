"use client";
import Navbar from "../Components/SubNavbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import Berita from "./berita";
import BeritaHero from "./hero";

export default function NewsPage() {
  return (
    <section>
      <Navbar />

      <main className="flex-grow">
        {/* Produk Section */}
        <BeritaHero />
        <div className="bg-gradient-to-b from-[#f2fcfc] to-[#e8f9f9]">
          <Berita />
        </div>
        <Footer />
      </main>
    </section>
  );
}
