"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
// import Produk from "./produk-section";
import Link from "next/link";

// --- 1. DATA BARU (DENGAN 2 KONTEKS & GAMBAR BERBEDA) ---
export default function StrategyHero() {
  return (
    <section>
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* A. Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/ruang-lingkup-banner.png" // Ganti dengan gambar pabrik/gedung Anda
            alt="Fasilitas Pabrik"
            fill
            className="object-cover object-center" // object-center agar fokus gambar di tengah
            priority
          />
        </div>

        {/* B. Gradient Overlay (Sesuai Referensi) */}
        {/* Gradient Biru Gelap Pekat di kiri, memudar ke kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-transparent z-10" />

        {/* C. Konten Teks */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
          {/* Judul Besar */}
          <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-white tracking-wide uppercase drop-shadow-lg">
            Ruang Lingkup
          </h1>

          {/* Breadcrumb (Posisi Kiri Bawah) */}
          <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-2 text-gray-300 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-white font-semibold border-b border-transparent">
              Ruang Lingkup
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
