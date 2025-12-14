"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- 1. DEFINISI TIPE DATA ---
export type ServiceItemData = {
  id: string;
  title: string;
  subtitle: string; // Tambahan: Subtitle untuk di dalam modal
  thumbnail: string; // Gambar kartu depan
  content: {
    overview: {
      label: string;
      image: string;
      text: string;
      points: string[];
    };
    details: {
      label: string;
      image: string;
      text: string;
      points: string[];
    };
  };
};

// --- 2. KONTEN MODAL (Logika Ganti Gambar & Tab) ---
function ServiceModalContent({ item }: { item: ServiceItemData }) {
  const [activeTab, setActiveTab] = useState<"overview" | "details">("overview");
  const currentData = item.content[activeTab];

  return (
    <div className="flex flex-col h-full">
      {/* HEADER IMAGE (Berubah sesuai Tab) */}
      <div className="relative w-full h-56 md:h-72 shrink-0 overflow-hidden bg-gray-100">
        <Image
          key={currentData.image} // Key memaksa animasi ulang saat gambar berubah
          src={currentData.image}
          alt={item.title}
          fill
          className="object-cover animate-in fade-in duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
          <div>
            <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">
              {item.subtitle}
            </p>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-white">
              {item.title}
            </DialogTitle>
          </div>
        </div>
      </div>

      {/* TABS SECTION */}
      <div className="flex-1 flex flex-col bg-white">
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={(val) => setActiveTab(val as "overview" | "details")}
          className="w-full h-full flex flex-col"
        >
          {/* MENU TAB */}
          <div className="px-6 pt-6 border-b border-gray-100">
            <TabsList className="w-full justify-start bg-transparent p-0 h-auto gap-8">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent px-0 py-2 font-semibold text-gray-500 data-[state=active]:border-secondary data-[state=active]:text-secondary bg-transparent focus-visible:ring-0 focus-visible:outline-none"
              >
                Overview
              </TabsTrigger>
              {/* <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent px-0 py-2 font-semibold text-gray-500 data-[state=active]:border-secondary data-[state=active]:text-secondary bg-transparent focus-visible:ring-0 focus-visible:outline-none"
              >
                Technical Details
              </TabsTrigger> */}
            </TabsList>
          </div>

          {/* ISI KONTEN (SCROLLABLE) */}
          <ScrollArea className="flex-1 p-6 md:p-8 h-[350px]">
            <TabsContent value="overview" className="mt-0 animate-in slide-in-from-left-4 duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.content.overview.label}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{item.content.overview.text}</p>
              <ul className="space-y-3">
                {item.content.overview.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="details" className="mt-0 animate-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.content.details.label}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{item.content.details.text}</p>
              <div className="grid gap-3 pl-4 border-l-2 border-gray-200">
                {item.content.details.points.map((point, idx) => (
                  <p key={idx} className="text-slate-700 font-medium">• {point}</p>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
}

// --- 3. KOMPONEN KARTU UTAMA ---
export default function AdvancedServiceCard({ item }: { item: ServiceItemData }) {
  return (
    <Dialog>
      {/* TRIGGER: KARTU */}
      <DialogTrigger asChild>
        <div
          className="relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl 
                     transition-all duration-300 ease-in-out aspect-[4/3] group 
                     hover:-translate-y-2 cursor-pointer bg-gray-900"
        >
          {/* 1. Background Image */}
          <div className="absolute inset-0 rounded-[2rem]">
            {/* Ganti <img> dengan <Image> Next.js jika memungkinkan untuk performa */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* 2. Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* 3. Konten Teks */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 pb-6 pr-6">
            <h3 className="text-white text-3xl font-semibold tracking-wide text-shadow-md">
              {item.title}
            </h3>
          </div>

          {/* 4. Tombol Sudut (Styling) */}
          <div
            className="absolute bottom-0 right-0 w-24 h-22 bg-[#f2fcfc] z-10 rounded-tl-[3.5rem] flex items-center justify-center
                       before:content-[''] before:absolute before:-top-12 before:right-0
                       before:w-11 before:h-14 
                       before:bg-[radial-gradient(circle_at_0_0,_transparent_3rem,_white_3rem)]
                       after:content-[''] after:absolute after:bottom-0 after:-left-12
                       after:w-17 after:h-10
                       after:bg-[radial-gradient(circle_at_0%_0%,_transparent_3rem,_white_3rem)]"
          >
            {/* PENTING: Gunakan DIV di sini, bukan BUTTON, agar tidak error nested button */}
            <div
              className="bg-secondary hover:bg-primary text-white rounded-full w-12 h-12
                         flex items-center justify-center
                         shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-primary/40
                         transition-all duration-300 ease-in-out z-20 relative
                         group-hover:scale-105 active:scale-95"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* ISI MODAL */}
      <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden rounded-2xl border-none z-50 h-[85vh] md:h-auto flex flex-col">
        <ServiceModalContent item={item} />
      </DialogContent>
    </Dialog>
  );
}