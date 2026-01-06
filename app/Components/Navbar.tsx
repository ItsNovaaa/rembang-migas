'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ArrowRight, Leaf, Menu, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SubNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      id: 1,
      title: "Beranda",
      href: "/",
      icon: Sparkles,
      children: [
        { id: 1, title: "Tentang Kami", href: "/#about", description: "Pelajari lebih lanjut tentang visi, misi, dan nilai-nilai perusahaan kami." },
        { id: 2, title: "Produk & Layanan", href: "/#produk", description: "Jelajahi berbagai produk dan layanan berkualitas yang kami tawarkan." },
        { id: 3, title: "Berita", href: "/#berita", description: "Dapatkan informasi terbaru dan artikel menarik seputar industri kami." },
        { id: 4, title: "Manfaat", href: "/#benefit", description: "Temukan keuntungan dan nilai tambah bekerjasama dengan kami." },
        { id: 5, title: "Contact", href: "/#contact", description: "Hubungi tim kami untuk pertanyaan, konsultasi, atau kerjasama." },
      ]
    },
    {
      id: 2,
      title: "Tentang Kami",
      href: "/about",
      icon: Leaf,
      children: [
        { id: 6, title: "Cerita Kita", href: "/about/#cerita", description: "Simak perjalanan dan sejarah perkembangan perusahaan dari awal hingga kini." },
        { id: 7, title: "Struktur ", href: "/about/#struktur", description: "Lihat susunan organisasi dan tim manajemen yang memimpin perusahaan." },
        { id: 8, title: "Mitra", href: "/about/#partner", description: "Daftar mitra strategis yang bekerjasama membangun kesuksesan bersama." },
      ]
    },
    {
      id: 3,
      title: "Produk",
      href: "/produk",
      icon: Sparkles,
      children: [
        { id: 9, title: "Produk ", href: "/produk/#produk-section", description: "Katalog lengkap produk unggulan dengan spesifikasi dan detailnya." },
      ]
    },
    {
      id: 4,
      title: "Berita",
      href: "/berita",
      icon: Sparkles,
      children: [
        { id: 10, title: "Berita", href: "/berita/#berita", description: "Update terkini mengenai aktivitas, acara, dan pengumuman perusahaan." },
      ]
    },
    {
      id: 5,
      title: "Pencapaian",
      href: "/milestone",
      icon: Sparkles,
      children: [
        { id: 11, title: "2017", href: "/milestone/#2017", description: "Tonggak sejarah dan pencapaian penting kami di tahun 2017." },
        { id: 12, title: "2019", href: "/milestone/#2019", description: "Inovasi dan ekspansi yang berhasil kami raih sepanjang tahun 2019." },
        { id: 13, title: "2021", href: "/milestone/#2021", description: "Prestasi dan penghargaan yang kami terima pada tahun 2021." },
      ]
    },
    {
      id: 6,
      title: "Ruang Lingkup",
      href: "/ruang-lingkup",
      icon: Sparkles,
      children: [
        { id: 14, title: "Hulu Dan Hilir", href: "/ruang-lingkup/#huluhilir", description: "Integrasi operasional dari sektor hulu hingga hilir." },
        { id: 15, title: "Energi", href: "/ruang-lingkup/#energi", description: "Solusi energi berkelanjutan dan ramah lingkungan." },
        { id: 16, title: "Jasa Penunjang", href: "/ruang-lingkup/#jasapenunjang", description: "Layanan pendukung untuk memastikan kelancaran operasional." },
      ]
    },
  ];

  return (
    <header
      className={`py-2 fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/60 backdrop-blur-md shadow-lg text-primary"
        : "bg-transparent items-center"
        }`}
    >
      {/* LEFT: Logo */}
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



       {/* CENTER: Navigation (Desktop) with Dropdown */}
      <div className="hidden lg:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const childCount = item.children ? item.children.length : 0;
              
              // Dynamic sizing based on child count
              let gridClass = "grid gap-3 p-4 ";
              let numCols = 1;
              if (childCount > 4) {
                 gridClass += "w-[600px] grid-cols-2";
                 numCols = 2;
              } else if (childCount > 1) {
                 gridClass += "w-[400px] grid-cols-1"; 
              } else {
                 gridClass += "w-[300px] grid-cols-1";
              }

              const totalRows = Math.ceil(childCount / numCols);

              return (
                <NavigationMenuItem key={item.id}>
                  {hasChildren ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          navigationMenuTriggerStyle(),
                           "bg-transparent text-lg font-normal hover:!text-secondary hover:!bg-transparent focus:!bg-transparent data-[active]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!text-secondary"
                        )}
                      >
                       <Link href={item.href}>
                          {item.title}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={gridClass}>
                          {item.children?.map((child, index) => {
                            const currentRow = Math.floor(index / numCols);
                            const isLastRow = currentRow === totalRows - 1;
                            
                            return (
                            <ListItem
                              key={child.id}
                              title={child.title}
                              href={child.href}
                              className={!isLastRow ? "border-b border-black/10 pb-3" : ""}
                            >
                              {child.description}
                            </ListItem>
                          )})}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-lg font-normal hover:!text-secondary hover:!bg-transparent focus:!bg-transparent"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* MOBILE: Hamburger Menu (includes tablets) */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900/95 text-white border-l-white/20 p-6 overflow-y-auto">
            <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
            <nav className="flex flex-col mt-8">
              <Accordion type="multiple" className="w-full">
                {navItems.map((item) => {
                  const children = item.children || [];
                  const hasChildren = children.length > 0;

                  if (hasChildren) {
                    return (
                      <AccordionItem
                        key={item.id}
                        value={`item-${item.id}`}
                        className="border-b border-white/10"
                      >
                        <AccordionTrigger className="text-white hover:text-secondary hover:no-underline text-lg font-semibold py-4 [&>svg]:text-white/70">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <div className="flex flex-col gap-2 pl-4 border-l border-white/20 ml-1">
                            {children.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                className="text-white/70 hover:text-secondary text-sm py-1 transition-colors"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }

                  // Items without children - render as simple link
                  return (
                    <div key={item.id} className="border-b border-white/10 py-4">
                      <Link
                        href={item.href}
                        className="text-white hover:text-secondary text-lg font-semibold transition-colors"
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </Accordion>
            </nav>
            <div className="flex flex-col gap-4 mt-auto pt-8">
              <Button className="bg-secondary text-white font-semibold hover:bg-primary w-full rounded-full py-6">
                Hubungi Kami
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* RIGHT: Action Buttons (Desktop) */}
      <div className="hidden lg:flex items-center gap-2">
        <Button className="bg-secondary text-white font-semibold hover:bg-primary rounded-full">
          Hubungi Kami
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm hover:text-white leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

