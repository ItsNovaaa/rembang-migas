"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// IMPORT FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
import StrategyModalContent from "./product-item";

// --- DATA DUMMY ---
const strategies = [
  {
    id: "core-business",
    title: "Core Business",
    subtitle: "More Energy, Less Emissions",
    thumbnail: "/max.jpg",
    content: {
      overview: {
        label: "Overview",
        image: "/max.jpg",
        text: "Operate oil and gas in a differentiated manner...",
        points: ["Optimalkan efisiensi operasional.", "Kurangi flaring.", "Tingkatkan keandalan pasokan."],
      },
      milestone: {
        label: "Milestones",
        image: "/1.jpg",
        text: "Pencapaian utama kami dalam 5 tahun terakhir.",
        points: ["2023: Pengurangan emisi 15%.", "2024: AI Implementasi.", "2025: Zero routine flaring."],
      },
    },
  },
  {
    id: "new-business",
    title: "New Business",
    subtitle: "Capturing New Growth",
    thumbnail: "/max.jpg",
    content: {
      overview: { label: "Overview", image: "/max.jpg", text: "Capture growth opportunities...", points: [] },
      milestone: { label: "Milestones", image: "/1.jpg", text: "Langkah strategis...", points: [] },
    },
  },
  {
    id: "carbon-capture",
    title: "Carbon Capture",
    subtitle: "Technology for Future",
    thumbnail: "/max.jpg",
    content: {
        overview: { label: "Overview", image: "/max.jpg", text: "Dummy text", points: [] },
        milestone: { label: "Milestones", image: "/1.jpg", text: "Dummy text", points: [] }
    }
  },
  { id: "4", title: "Geothermal", subtitle: "Earth Energy", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
  { id: "5", title: "Wind Power", subtitle: "Breezing Through", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
  { id: "6", title: "Solar Tech", subtitle: "Sun Harvesting", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
  { id: "7", title: "Bio Fuel", subtitle: "Organic Power", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
  { id: "8", title: "Hydro", subtitle: "Flowing Energy", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
  { id: "9", title: "Nuclear", subtitle: "Atomic Scale", thumbnail: "/max.jpg", content: { overview: { label: "Ov", image: "/max.jpg", text: "Tx", points: []}, milestone: { label: "Ms", image: "/1.jpg", text: "Tx", points: []}} },
];

export default function ProdukSection() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleShowLess = () => {
    // Scroll sedikit ke atas agar user tidak kehilangan konteks saat item hilang
    // const section = document.getElementById("produk-section");
    // if (section) section.scrollIntoView({ behavior: "smooth" });
    
    setVisibleCount(INITIAL_COUNT);
  };

  const visibleStrategies = strategies.slice(0, visibleCount);

  return (
    <section className="py-12 md:py-20 " id="produk-section">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Produk Unggulan Kami
          </h1>
          <p className="text-primary max-w-3xl mx-auto">
            Hadirkan solusi terbaik bagi kebutuhan Anda dengan kualitas yang
            melampaui ekspektasi.
          </p>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* AnimatePresence memungkinkan animasi saat item DIHAPUS (Show Less) */}
          <AnimatePresence mode="popLayout">
            {visibleStrategies.map((item, index) => (
              <Dialog key={item.id}>
                {/* motion.div Wrapper
                   - layout: Membuat pergeseran posisi item lain menjadi mulus
                   - initial/animate/exit: Efek fade in/out dan scale
                */}
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }} // Stagger effect (berurutan)
                >
                  <DialogTrigger asChild>
                    <div className="group relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h2 className="text-2xl font-bold text-white mb-1 leading-tight">
                          {item.title}
                        </h2>
                        <p className="text-teal-300 font-medium text-xs tracking-wider uppercase mb-3">
                          {item.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
                          View Details <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden rounded-2xl border-none z-50 h-[85vh] md:h-auto flex flex-col">
                    <StrategyModalContent item={item} />
                  </DialogContent>
                </motion.div>
              </Dialog>
            ))}
          </AnimatePresence>
        </div>

        {/* BUTTON ACTIONS (Animasi Fade In tombol) */}
        <motion.div layout className="mt-12 text-center">
          {visibleCount < strategies.length ? (
            <Button 
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 border-secondary text-white bg-secondary hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              Lihat Lebih Banyak
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            visibleCount > INITIAL_COUNT && (
              <Button 
                onClick={handleShowLess}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-700 transition-all"
              >
                Sembunyikan
                <ChevronUp className="ml-2 w-4 h-4" />
              </Button>
            )
          )}
        </motion.div>

      </div>
    </section>
  );
}