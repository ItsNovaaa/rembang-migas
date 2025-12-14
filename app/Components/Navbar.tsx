"use client";

import { useState, useEffect } from "react"; // 1. Import hooks
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ArrowRight, Leaf, Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  // 2. State to track scroll status
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Beranda",
      href: "/",
      icon: Sparkles,
    },
    {
      title: "Tentang Kami",
      href: "/about",
      icon: Leaf,
    },
    {
      title: "Produk",
      href: "/produk",
      icon: Sparkles,
    },
    {
      title: "Ruang Lingkup",
      href: "/ruang-lingkup",
      icon: Sparkles,
    },
    {
      title: "Pencapaian",
      href: "/milestone",
      icon: Sparkles,
    },
  ];

  return (
    <header
      // 4. Dynamic ClassName based on isScrolled state
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg p-3" // UPDATED: Tambahkan bg-white/80 agar teks hitam terlihat jelas
        : "bg-transparent"
        }`}
    >
      {/* Sisi Kiri: Logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* <Leaf className="text-primary w-7 h-7" />
        <span
          className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Green Power
        </span> */}
        {isScrolled ? (
          <Image
            src="/logo-color.png"
            alt="Green Power Logo"
            width={300}
            height={100}
            className="object-contain w-[150px] md:w-[200px] lg:w-[300px]"
          />
        ) : (
          <Image
            src="/logo-white.png"
            alt="Green Power Logo"
            width={300}
            height={100}
            className="object-contain w-[150px] md:w-[200px] lg:w-[300px]"
          />
        )}
      </Link>
      {/* Sisi Tengah: Navigasi (Desktop) */}
      <nav className="hidden md:flex gap-6 text-lg">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            // UPDATED: Kondisi warna teks Navigasi
            className={`transition-colors duration-200 flex items-center hover:text-secondary ${isScrolled ? "text-black" : "text-white"
              }`}
          >
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </nav>{" "}
      {/* Sisi Kanan: Tombol Aksi (Desktop) */}
      <div className="hidden md:flex items-center gap-2">
        <Button className="bg-secondary text-white font-semibold hover:bg-primary rounded-full">
          Hubungi Kami
        </Button>
      </div>
      {/* Tombol Menu Mobile (Hamburger) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gray-900/95 text-white border-l-white/20 backdrop-blur-md p-6"
          >
            <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              {/* Using the map here too so mobile matches desktop */}
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-semibold text-white hover:text-primary text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto pt-8">
              <Button className="bg-secondary text-white font-semibold hover:bg-primary w-full rounded-full py-6">
                Hubungi Kami
              </Button>
              <Button
                variant="outline"
                className="text-white font-semibold hover:bg-white/10 hover:text-white w-full border-white/30 rounded-full py-6"
              >
                Pendaftaran
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
