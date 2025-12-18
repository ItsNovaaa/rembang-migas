"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA MILESTONE ---
const milestones = [
  {
    year: "2017",
    title: "FONDASI DILETAKKAN",
    description:
      "Pemerintah Kabupaten Rembang dan DPRD sepakat membentuk perusahaan daerah dibidang minyak dan gas bumi untuk mengoptimalkan sumber daya alam, meningkatkan PAD, dan menciptakan lapangan kerja",
  },
  {
    year: "2019",
    title: "PENJAJAKAN PELUANG GLOBAL",
    description:
      "PT Rembang Migas Energi (Perseroda) mulai aktif mencari peluang dan investor, mendampingi investor dari Qatar untuk survei lokasi pembangunan kilang gas terapung, pembangkit listrik lepas pantai, dan tempat penyimpanan ikan.  "
  },
  {
    year: "2021",
    title: "PARTISIPASI HULU MIGAS",
    description:
      "Meluncurkan divisi energi baru terbarukan dan memulai pembangunan fasilitas panel surya berkapasitas 50MW.",
  },
];

export default function MilestoneSection() {
  // 1. Setup Ref untuk melacak scroll container ini
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Hook useScroll dari Framer Motion
  // Melacak progress scroll relatif terhadap containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"], // Animasi mulai saat elemen masuk 80% viewport, selesai saat 50%
  });

  // 3. Transformasi tinggi garis (0% -> 100%)
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-slate-900 uppercase mb-4">
            Perjalanan <span className="text-secondary">Kami</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Setiap langkah adalah bukti komitmen kami untuk masa depan energi
            yang lebih baik.
          </p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div ref={containerRef} className="relative">
          {/* A. GARIS VERTIKAL (TRACK ABU-ABU) */}
          {/* Di Mobile: Kiri (left-4), Di Desktop: Tengah (left-1/2) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

          {/* B. GARIS FILL (ANIMASI GRADIENT) */}
          {/* Menggunakan motion.div yang tingginya berubah sesuai scroll */}
          <motion.div
            style={{ height }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-secondary via-primary to-secondary -translate-x-1/2 z-10 origin-top shadow-[0_0_15px_rgba(var(--secondary),0.8)]"
          />

          {/* C. ITEMS LOOP */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: ITEM MILESTONE ---
function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0; // Cek genap/ganjil untuk layout desktop

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center md:justify-between scroll-mt-24",
        // Mobile: Selalu rata kanan dari garis. Desktop: Selang seling.
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
      id={item.year}
    >
      {/* 1. SPACE KOSONG (Untuk menyeimbangkan layout selang-seling di desktop) */}
      <div className="hidden md:block w-5/12" />

      {/* 2. TITIK POINT (DOT) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-300 shadow-md group-hover:border-secondary transition-colors duration-500">
          <div className="w-full h-full rounded-full bg-secondary/0 animate-ping opacity-75" />
        </div>
        {/* Icon Tahun di tengah Dot (Opsional, bisa dihapus jika ingin dot polos) */}
        <div className="absolute -top-8 md:top-auto md:-right-16 md:group-even:right-auto md:group-even:-left-16 bg-white px-2 py-1 rounded border border-slate-200 text-xs font-bold text-primary shadow-sm whitespace-nowrap">
          {item.year}
        </div>
      </div>

      {/* 3. CONTENT CARD */}
      {/* Mobile: padding-left besar karena garis ada di kiri. Desktop: normal. */}
      <div className="w-full pl-12 md:pl-0 md:w-5/12" >
        <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300">
          {/* Header Card */}
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <Calendar size={18} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors" >
              {item.title}
            </h3>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
