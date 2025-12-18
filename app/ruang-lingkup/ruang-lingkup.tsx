"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Droplets, Pickaxe, Wrench } from "lucide-react";

// Komponen Card Wrapper (Light Mode)
const BentoCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      // Base Style: Putih Bersih + Shadow Halus + Border Abu-abu tipis
      "relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all duration-300 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 group",
      className
    )}
  >
    {/* Pattern Background (Titik-titik hitam tipis) */}
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
    
    {/* Glow effect Halus di pojok */}
    <div className="absolute -right-20 -top-20 h-[150px] w-[150px] rounded-full bg-primary/5 blur-[50px] transition-all group-hover:bg-secondary/10" />
    
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

export default function BusinessScope() {
  return (
    // BACKGROUND UTAMA: Abu-abu Sangat Muda (Slate-50)
    <section className=" text-slate-900 py-20 px-4 md:px-8 relative overflow-hidden">
      
      {/* Dekorasi Background Abstract (Halus) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary uppercase lg:text-5xl">
            Lingkup <span className="text-secondary">Bisnis</span>
          </h2>
          {/* Garis Aksen: Gradient Hijau ke Biru */}
          <div className="h-1.5 w-32 bg-gradient-to-r from-secondary to-primary mt-3 rounded-full shadow-sm" />
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* --- KARTU 1: HULU & HILIR (Besar) --- */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-4" id="huluhilir">
              {/* Icon Wrapper: Hijau Muda */}
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Droplets size={32} />
              </div>
              {/* Judul Utama: HIJAU (Secondary) */}
              <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                Hulu dan Hilir Minyak dan Gas Bumi
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Sektor Hulu */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-l-4 border-primary pl-3">
                  Sektor Hulu
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Mengelola 10% saham partisipasi (PI) dari hasil produksi migas
                  di wilayah Kabupaten Rembang.
                </p>
              </div>

              {/* Sektor Hilir */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-l-4 border-secondary pl-3">
                  Sektor Hilir
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Niaga dan jasa penunjang, pengelolaan CNG, distribusi solar
                  non-subsidi, kajian jaringan gas (city gas).
                </p>
              </div>
            </div>
          </BentoCard>

          {/* --- KARTU 2: IMAGE VISUAL (Kanan) --- */}
          <div className="relative hidden lg:block lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden border border-gray-200 group shadow-lg">
             <Image 
                src="/max.jpg" 
                alt="Operasi Tambang"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             {/* Overlay tipis agar gambar tidak terlalu tajam kontrasnya, tapi tetap terang */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
             {/* Gradient bawah untuk estetik */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
          </div>

          {/* --- KARTU 3: ENERGI & MINERAL --- */}
          <BentoCard className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3" id="energi">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Pickaxe size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary">
                Energi dan Mineral Lainnya
              </h3>
            </div>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span> {/* Bullet Biru */}
                Pengembangan bisnis aspal buton untuk kebutuhan infrastruktur lokal.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Keagenan BBM Industri Pertamina.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Perdagangan mineral (batubara, limestone, pasir, batu).
              </li>
            </ul>
          </BentoCard>

          {/* --- KARTU 4: JASA PENUNJANG --- */}
          <BentoCard className="md:col-span-1" >
            <div className="mb-4 flex items-center gap-3" id="jasapenunjang">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary">
                Jasa Penunjang
              </h3>
            </div>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Jasa teknis dan konsultasi untuk proyek sektor energi dan mineral.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Kerja sama pengembangan proyek energi baru dan inovatif.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Bisnis terkait energi dan mineral seperti jasa logistik.
              </li>
            </ul>
          </BentoCard>

          {/* GAMBAR MOBILE */}
          <div className="block lg:hidden h-56 relative rounded-2xl overflow-hidden border border-gray-200 shadow-md">
             <Image 
                src="/max.jpg" 
                alt="Mining"
                fill
                className="object-cover"
             />
          </div>

        </div>
      </div>
    </section>
  );
}