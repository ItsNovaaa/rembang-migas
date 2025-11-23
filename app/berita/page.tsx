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
        <Berita />
        <Footer />
      </main>
    </section>
  );
}
