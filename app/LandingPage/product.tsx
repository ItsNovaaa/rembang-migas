"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// 1. DATA LAYANAN (Digabung dengan detail untuk Modal)
const services = [
  {
    id: "produk-energi",
    title: "Produk Energi",
    subtitle: "Solusi Energi Terbarukan",
    imageSrc: "/bbm.jpg", // Pastikan path ini benar
    description:
      "Kami menyediakan berbagai produk energi yang efisien dan ramah lingkungan untuk kebutuhan industri maupun komersial.",
    details:
      "Detail lengkap mengenai spesifikasi Produk Energi, kapasitas, dan teknologi yang digunakan akan dijelaskan di sini. Termasuk panel surya, baterai penyimpanan, dan inverter.",
  },
  {
    id: "perdagangan-mineral",
    title: "Perdagangan Mineral",
    subtitle: "Perdagangan Pertambangan Berkelanjutan",
    imageSrc: "/perdagangan-mineral.jpeg",
    description:
      "Layanan perdagangan mineral yang transparan dan berkelanjutan, menghubungkan sumber daya alam dengan kebutuhan pasar global.",
    details:
      "Informasi mendalam mengenai jenis mineral yang diperdagangkan (nikel, batubara, dll), standar kepatuhan lingkungan, dan rantai pasok kami.",
  },
  {
    id: "layanan-penunjang",
    title: "Layanan Penunjang",
    subtitle: "Dukungan & Pemeliharaan",
    imageSrc: "/layanan-penunjang.jpg",
    description:
      "Dukungan teknis dan operasional menyeluruh untuk memastikan infrastruktur energi Anda berjalan optimal.",
    details:
      "Cakupan layanan maintenance, konsultasi teknis, audit energi, serta layanan purna jual untuk memaksimalkan umur investasi aset Anda.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#f2fcfc] text-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">

        {/* --- AREA HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-12">
          <div>
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
              Produk & Layanan
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Solusi Surya Kami
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md md:mt-2">
            Kami percaya pada kekuatan energi surya untuk mengubah kehidupan dan
            komunitas melalui solusi komprehensif.
          </p>
        </div>

        {/* --- GRID KARTU LAYANAN --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Dialog key={service.id}>

              {/* 1. TRIGGER (Tampilan Kartu di Landing Page) */}
              <DialogTrigger asChild>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">

                  {/* Gambar Latar */}
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Konten Bawah (Judul & Tombol Panah) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          Lihat Detail
                        </p>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      <Button
                        size="icon"
                        className="bg-secondary text-white rounded-full hover:bg-secondary flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* 2. CONTENT (Tampilan Popup Modal) */}
              {/* bg-white ditambahkan untuk mencegah transparan */}
              <DialogContent className="bg-white max-w-3xl p-0 overflow-hidden rounded-2xl border-none z-50">

                {/* Header Gambar di dalam Modal */}
                <div className="relative w-full h-56 md:h-72">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                    <DialogTitle className="text-3xl md:text-4xl font-bold text-white">
                      {service.title}
                    </DialogTitle>
                  </div>
                </div>

                <DialogHeader className="px-6 md:px-8 pt-6">
                  <DialogDescription className="text-green-600 font-bold text-lg uppercase tracking-wide">
                    {service.subtitle}
                  </DialogDescription>
                </DialogHeader>

                {/* Area Scroll untuk Teks Panjang */}
                <ScrollArea className="h-[250px] w-full px-6 md:px-8 pb-8 pt-2">
                  <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                    <p className="font-medium text-lg text-gray-900">
                      {service.description}
                    </p>
                    <hr className="border-gray-200" />
                    <p>{service.details}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Keunggulan layanan utama 1</li>
                      <li>Keunggulan layanan utama 2</li>
                      <li>Sertifikasi dan standar keamanan</li>
                    </ul>
                  </div>
                </ScrollArea>

              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-secondary text-white font-semibold hover:bg-primary rounded-full px-8 py-6 text-base"
          >
            Lihat semua layanan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}