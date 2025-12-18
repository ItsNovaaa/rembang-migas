"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

// --- UI COMPONENTS IMPORTS ---
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- 1. DATA DEFINITION ---
interface BlogPostData {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  features: string[];
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: "1",
    category: "PEMBANGKIT LISTRIK TENAGA AIR",
    title: "Energi Dan Mineral Lainnya",
    description: "Inovasi terbaru dalam panel surya bifacial.",
    content: "Pemanfaatan aliran air sungai dan bendungan untuk pembangkit listrik skala mikro hingga menengah. Sistem ini dirancang untuk mengurangi ketergantungan pada energi fosil.",
    features: [
      "Energi bersih dan stabil 24 jam",
      "Cocok untuk daerah pedesaan/terpencil",
      "Low maintenance cost"
    ],
    imageUrl: "/max.jpg", // Ganti dengan path gambar Anda
    date: "Nov 10, 2025",
  },
  {
    id: "2",
    category: "TEKNOLOGI PENYIMPANAN",
    title: "Baterai Solid State Baru",
    description: "Kapasitas penyimpanan ganda dengan ukuran setengah.",
    content: "Teknologi baterai terbaru yang menggunakan elektrolit padat, memungkinkan pengisian daya super cepat dan keamanan yang jauh lebih tinggi dibandingkan baterai lithium-ion konvensional.",
    features: [
      "Pengisian daya 0-80% dalam 15 menit",
      "Siklus hidup 3x lebih lama",
      "Aman dari risiko kebocoran"
    ],
    imageUrl: "/max.jpg",
    date: "Nov 02, 2025",
  },
  {
    id: "3",
    category: "PEMBANGKIT LISTRIK TENAGA AIR",
    title: "Mikrohidro Pedesaan",
    description: "Solusi mandiri energi untuk desa terpencil.",
    content: "Pemanfaatan aliran air sungai dan bendungan untuk pembangkit listrik skala mikro hingga menengah. Sangat efektif untuk daerah yang memiliki sumber air melimpah.",
    features: [
      "Energi bersih dan stabil 24 jam",
      "Cocok untuk daerah pedesaan/terpencil",
      "Biaya operasional sangat rendah"
    ],
    imageUrl: "/max.jpg",
    date: "Oct 28, 2025",
  },
  {
    id: "4",
    category: "EFISIENSI ENERGI",
    title: "Smart Home Energy",
    description: "Manajemen listrik otomatis berbasis AI.",
    content: "Sistem manajemen energi rumah tangga pintar yang memonitor penggunaan listrik secara real-time dan mematikan perangkat yang tidak digunakan secara otomatis.",
    features: [
      "Penghematan tagihan hingga 30%",
      "Integrasi penuh dengan smartphone",
      "Laporan konsumsi harian detail"
    ],
    imageUrl: "/max.jpg",
    date: "Oct 20, 2025",
  },
  {
    id: "5",
    category: "ENERGI ANGIN",
    title: "Turbin Angin Vertikal",
    description: "Desain baru untuk area dengan angin kecepatan rendah.",
    content: "Turbin angin sumbu vertikal yang dirancang untuk lingkungan perkotaan, mampu menangkap angin dari segala arah tanpa perlu diarahkan ulang.",
    features: [
      "Tidak bising (Silent Operation)",
      "Aman untuk burung dan satwa liar",
      "Desain estetis untuk gedung modern"
    ],
    imageUrl: "/max.jpg",
    date: "Oct 15, 2025",
  },
  {
    id: "6",
    category: "BIOENERGI",
    title: "Pengolahan Limbah Sawit",
    description: "Mengubah limbah menjadi energi listrik.",
    content: "Pemanfaatan limbah cair kelapa sawit (POME) menjadi biogas untuk pembangkit listrik, mengurangi emisi gas metana sekaligus menghasilkan energi.",
    features: [
      "Mengurangi emisi karbon signifikan",
      "Menghasilkan pupuk organik cair",
      "Sumber pendapatan tambahan"
    ],
    imageUrl: "/max.jpg",
    date: "Oct 10, 2025",
  },
];

// --- 2. SUB-COMPONENT: NEWS CARD (ITEM + DIALOG) ---
const NewsCard = ({ post }: { post: BlogPostData }) => {
  return (
    <Dialog>
      {/* TRIGGER (Tampilan Kartu di Carousel) */}
      <DialogTrigger asChild>
        <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-md transition-all hover:shadow-xl">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end h-full">
            <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="mb-2 block text-[10px] md:text-xs font-bold tracking-widest text-[#00d2b6] uppercase">
                Lihat Detail
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1 line-clamp-2">
                {post.title}
                </h3>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-10">
             <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#00bfa5] text-white shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#00bfa5] group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
             </div>
          </div>
        </div>
      </DialogTrigger>

      {/* CONTENT (Popup Dialog - Sesuai Gambar) */}
      <DialogContent className="max-w-lg p-0 overflow-hidden border-none bg-white gap-0 rounded-xl">
        
        {/* Header Image Section */}
        <div className="relative h-[280px] w-full">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent/20" />
            
            <DialogClose className="absolute right-4 top-4 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors z-50">
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </DialogClose>

            <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#00dfc4] font-bold text-xs tracking-wider uppercase mb-1">
                    {post.category}
                </p>
                <h2 className="text-3xl font-extrabold text-white leading-tight">
                    {post.title}
                </h2>
            </div>
        </div>

        {/* Body Content Section */}
        <div className="p-6 md:p-8 bg-white">
            <div className="border-b border-gray-200 mb-6">
                <span className="inline-block border-b-[3px] border-[#00bfa5] pb-2 text-[#00bfa5] font-bold text-sm uppercase tracking-wide px-1">
                    Overview
                </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Overview</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                {post.content}
            </p>

            <div className="space-y-4">
                {post.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#00bfa5] shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm md:text-base">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

// --- 3. MAIN COMPONENT ---
export default function BeritaSection() {
  return (
    <section className="bg-[#f2fcfc] text-gray-900 py-16 md:py-24" id="berita">
      <div className="container mx-auto px-4 md:px-12 relative">

        {/* --- HEADER SECTION --- */}
        {/* Menggunakan items-start untuk mensejajarkan dengan bagian atas */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div className="max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-2">
               Wawasan & Berita Terbaru
             </h2>
             <p className="text-[#566694] text-lg">
               Informasi terkini seputar energi dan mineral.
             </p>
          </div>
          
          {/* Tombol 'Lihat Semua' diposisikan di kanan atas, sejajar dengan header area */}
          <Button size="lg" asChild className="bg-secondary text-white hover:bg-primary rounded-full px-8 py-6 hidden md:flex transition-all hover:gap-3 shrink-0">
            <Link href="/berita">
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 3, 
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                  <div className="h-full p-1">
                    <NewsCard post={post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* --- NAVIGATION BUTTONS --- */}
            {/* Menggunakan justify-start agar tombol berada di KIRI (Rata Kiri) */}
            <div className="flex justify-start items-center gap-4 mt-8">
               <CarouselPrevious className="static translate-y-0 h-14 w-14 border-slate-300 bg-secondary text-white hover:bg-primary hover:border-primary hover:text-white transition-all " />
               <CarouselNext className="static translate-y-0 h-14 w-14 border-slate-300 bg-secondary text-white hover:bg-primary hover:border-primary hover:text-white transition-all " />
            </div>

          </Carousel>
        </div>

        {/* Mobile Button (Fallback) */}
        <div className="mt-8 text-center md:hidden">
          <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-full w-full py-6 text-lg">
            <Link href="/berita">
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}