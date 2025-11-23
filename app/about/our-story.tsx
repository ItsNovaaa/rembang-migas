"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion"; // 1. Import Framer Motion

export default function OurStory() {
  // 2. State untuk melacak tab yang aktif agar animasi tahu harus pindah ke mana
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Cerita Kami
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our journey, our values, and what drives us forward.
          {/* translate ke bahasa indonesia Discover our journey, our values, and what drives us forward. */}
          Cari Tahu Tentang Kami, Niat Kami, dan apa yang kami ingin berusaha.
          
        </p>
      </div>

      {/* Tambahkan value dan onValueChange untuk mengontrol state */}
      <Tabs
        defaultValue="vision"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col items-center"
      >
        <TabsList className="w-full md:w-fit gap-8 border-b border-gray-200 relative">
          {/* --- TRIGGER 1: VISION --- */}
          <TabsTrigger
            value="vision"
            className="
              relative px-2 pb-3 pt-2 font-semibold text-gray-500 transition-colors duration-300
              hover:text-secondary
              data-[state=active]:text-primary
            "
          >
            Visi & Misi
            {/* 3. INI LOGIKA MAGIC-NYA: */}
            {/* Jika tab ini aktif, render garis bawah animasi */}
            {activeTab === "vision" && (
              <motion.div
                layoutId="active-tab-underline" // ID ini harus SAMA di semua tab
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </TabsTrigger>

          {/* --- TRIGGER 2: PROFILE --- */}
          <TabsTrigger
            value="profile"
            className="
              relative px-2 pb-3 pt-2 font-semibold text-gray-500 transition-colors duration-300
              hover:text-secondary
              data-[state=active]:text-primary
            "
          >
            Profil Perusahaan
            {/* Copy logika motion div ke sini juga */}
            {activeTab === "profile" && (
              <motion.div
                layoutId="active-tab-underline" // ID ini harus SAMA di semua tab
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </TabsTrigger>
        </TabsList>

        {/* --- CONTENT (Tetap menggunakan animasi slide masuk) --- */}
        <TabsContent
          value="vision"
          className="w-full mt-8 animate-in fade-in slide-in-from-left-8 duration-500 ease-out"
        >
          <div className="bg-slate-50/80 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-200 pb-8">
              <h3 className="min-w-[150px] font-bold text-primary text-lg">
                Visi
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                Menjadi pilar strategis dalam pembangunan daerah yang
                berkelanjutan melalui pengelolaan sumber daya energi dan mineral
                yang optimal.{" "}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 pt-8">
              <h3 className="min-w-[150px] font-bold text-primary text-lg">
                Misi
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                ● Mengoptimalkan Pendapatan Asli Daerah (PAD) melalui
                pemanfaatan sektor energi dan sumber daya mineral <br />
                ● Mengembangkan usaha dari hulu hingga hilir di sektor migas
                <br />
                ● Menciptakan lapangan kerja dan mendorong pertumbuhan ekonomi
                lokal <br />● Menjalankan tata kelola perusahaan yang
                profesional, transparan, dan akuntabel.{" "}
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="profile"
          className="w-full mt-8 animate-in fade-in slide-in-from-left-8 duration-500 ease-out"
        >
          <div className="bg-slate-50/80 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm text-center h-[300px] flex items-center justify-center">
            
            <p className="text-gray-500">
              <span className="font-bold text-xl"> PT Rembang Migas Energi (Perseroda) <br /><br /></span>
              PT Rembang Migas Energi (Perseroda) adalah Badan Usaha Milik
              Daerah (BUMD) yang didirikan berdasarkan kesepakatan antara
              Pemerintah Kabupaten Rembang dan Dewan Perwakilan Rakyat Daerah
              (DPRD). Pendirian ini dilandasi oleh urgensi untuk mengoptimalkan
              potensi sumber daya alam lokal, khususnya di sektor minyak dan gas
              bumi.{" "}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
