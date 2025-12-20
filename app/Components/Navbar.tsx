'use client'

import { useState, useEffect } from "react";
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
    { id: 1, title: "Beranda", href: "/", icon: Sparkles },
    { id: 2, title: "Tentang Kami", href: "/about", icon: Leaf },
    { id: 3, title: "Produk", href: "/produk", icon: Sparkles },
    { id: 4, title: "Berita", href: "/berita", icon: Sparkles },
    { id: 5, title: "Pencapaian", href: "/milestone", icon: Sparkles },
    { id: 6, title: "Ruang Lingkup", href: "/ruang-lingkup", icon: Sparkles },
  ];

  const Navchild = [
    { id: 1, title: "Tentang Kami", href: "/#about", icon: Leaf, idParent: 1 },
    { id: 2, title: "Produk & Layanan", href: "/#produk", icon: Leaf, idParent: 1 },
    { id: 3, title: "Berita", href: "/#berita", icon: Leaf, idParent: 1 },
    { id: 4, title: "Manfaat", href: "/#benefit", icon: Leaf, idParent: 1 },
    { id: 5, title: "Contact", href: "/#contact", icon: Leaf, idParent: 1 },
    { id: 6, title: "Cerita Kita", href: "/about/#cerita", icon: Leaf, idParent: 2 },
    { id: 7, title: "Struktur ", href: "/about/#struktur", icon: Leaf, idParent: 2 },
    { id: 8, title: "Mitra", href: "/about/#partner", icon: Leaf, idParent: 2 },
    { id: 9, title: "Produk ", href: "/produk/#produk-section", icon: Sparkles, idParent: 3 },
    { id: 10, title: "Berita", href: "/berita/#berita", icon: Sparkles, idParent: 4 },
    { id: 11, title: "2017", href: "/milestone/#2017", icon: Sparkles, idParent: 5 },
    { id: 12, title: "2019", href: "/milestone/#2019", icon: Sparkles, idParent: 5 },
    { id: 13, title: "2021", href: "/milestone/#2021", icon: Sparkles, idParent: 5 },
    { id: 14, title: "Hulu Dan Hilir", href: "/ruang-lingkup/#huluhilir", icon: Sparkles, idParent: 6 },
    { id: 15, title: "Energi", href: "/ruang-lingkup/#energi", icon: Sparkles, idParent: 6 },
    { id: 16, title: "Jasa Penunjang", href: "/ruang-lingkup/#jasapenunjang", icon: Sparkles, idParent: 6 },

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
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => {
              // Check if this item has children
              const children = Navchild.filter((child) => child.idParent === item.id);
              const hasChildren = children.length > 0;

              return (
                <NavigationMenuItem key={item.id}>
                  {hasChildren ? (
                    <>
                      {/* Using Trigger for items with dropdowns */}
                      <NavigationMenuTrigger
                        className="bg-transparent text-lg font-normal hover:!text-secondary hover:!bg-transparent focus:!bg-transparent data-[active]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!text-secondary"
                      // asChild
                      >
                        <Link href={item.href}>
                          {item.title}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] lg:w-[400px] bg-white rounded-md shadow-md">
                          {children.map((child) => (
                            <ListItem
                              key={child.id}
                              title={child.title}
                              href={child.href}
                              icon={child.icon}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    /* Standard Link for items without dropdowns */
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

      {/* RIGHT: Action Buttons (Desktop) */}
      <div className="hidden lg:flex items-center gap-2">
        <Button className="bg-secondary text-white font-semibold hover:bg-primary rounded-full">
          Hubungi Kami
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
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
                  const children = Navchild.filter((child) => child.idParent === item.id);
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
    </header>
  );
}

// Helper component for the dropdown list items
const ListItem = ({ className, title, href, icon: Icon, ...props }: any) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {Icon && <Icon className="w-4 h-4 text-secondary" />}
              {title}
            </div>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};