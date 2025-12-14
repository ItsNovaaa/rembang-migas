'use client'

import { useState, useEffect } from "react"; // 1. Import hooks
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ArrowRight, Leaf, Menu, Sparkles } from "lucide-react";

export default function SubNavbar() {
  // 2. State to track scroll status
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change threshold as needed
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
      className={` py-2 flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/50 backdrop-blur-md shadow-lg" // Style when scrolled
        : "bg-transparent items-center" // Style when at top
        }`}
    >
      {/* Sisi Kiri: Logo */}
      <Link href="/" className="flex items-center gap-2">
        {isScrolled ? (
          <Image
            src="/logo-color.png"
            alt="Green Power Logo"
            width={300}
            height={100}
            className="w-[150px] md:w-[200px] lg:w-[300px]"
          />
        ) : (
          <Image
            src="/logo-color.png"
            alt="Green Power Logo"
            width={300}
            height={100}
            className="w-[150px] md:w-[200px] lg:w-[300px]"
          />
        )}
      </Link>

      {/* Sisi Tengah: Navigasi (Desktop) */}
      <nav className="hidden md:flex gap-6 text-lg">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-black hover:text-secondary transition-colors duration-200 flex items-center"
          >
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </nav>

      {/* Sisi Kanan: Tombol Aksi (Desktop) */}
      <div className="hidden md:flex items-center gap-2">
        <Button className="bg-secondary text-white font-semibold hover:bg-primary rounded-full">
          Hubungi Kami
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Tombol Menu Mobile (Hamburger) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-black/10 hover:text-black"
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
                  className="font-semibold text-white hover:text-secondary text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto pt-8">
              <Button className="bg-secondary text-white font-semibold hover:bg-primary w-full rounded-full py-6">
                Hubungi Kami
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}