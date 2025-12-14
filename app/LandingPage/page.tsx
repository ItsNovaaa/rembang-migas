"use client"; // <-- ADD THIS LINE

import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "./hero";
import AboutUs from "./about-us";
import Product from "./product";
import Service from "./service-section";
import Benefit from "./benefit";
import Marquee from "./marquee";
import Berita from "./berita";
import WorkWithUs from "./work-with-us";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

// Helper functions for the scroll button
const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function HomePage() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled more than 400px
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <main className="relative min-h-screen text-white">
        {/* 1. Gambar Latar Belakang */}
        <Image
          src="/Pertambangan.png" 
          alt="Pemandangan kincir angin"
          fill
          className="object-cover -z-10"
          priority
        />
        {/* Lapisan overlay gelap agar teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-black/30 -z-10" />

        {/* 2. Komponen Navbar */}
        <Navbar />

        {/* 3. Komponen Hero Section */}
        <Hero />
      </main>
      <AboutUs />
      <Product />
      <Berita />
      <Service />
      <Benefit />
      {/* <Marquee /> */}
      <WorkWithUs />
      <Footer />

      {showTopButton && (
        <button
          className={`fixed bottom-0 right-0 bg-black rounded-full px-4 py-4 mr-6 mb-[35px] z-50 items-center text-xs flex=`}
          onClick={scrollToTop}
        >
          <ArrowUp className="inline-block h-5 w-5" color="#fff" />
        </button>
      )}
    </section>
  );
}