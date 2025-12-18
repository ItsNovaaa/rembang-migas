"use client"; // 1. Wajib ditambahkan karena kita menggunakan interactivity (useState)

import { useState } from "react";
import { BlogPostItem, BlogPostData } from "../LandingPage/item-berita"; // Pastikan path import ini benar

// Data Dummy
const allNewsData: BlogPostData[] = [
  {
    id: "1",
    title: "The Future of Residential Solar: Trends to Watch in 2026",
    description: "Discover the upcoming innovations in solar technology...",
    content: "Isi konten lengkap berita 1...",
    imageUrl: "/max.jpg",
    readTime: "06 min read",
    date: "Nov 10, 2025",
  },
  {
    id: "2",
    title: "How Solar Incentives Can Save You Thousands This Year",
    description: "A deep dive into the latest federal and state tax credits...",
    content: "Isi konten lengkap berita 2...",
    imageUrl: "/max.jpg",
    readTime: "05 min read",
    date: "Nov 02, 2025",
  },
  {
    id: "3",
    title: "Case Study: A 1920s Home Goes Net-Zero with Solar",
    description: "See the challenges and triumphs of retrofitting an older home...",
    content: "Isi konten lengkap berita 3...",
    imageUrl: "/max.jpg",
    readTime: "08 min read",
    date: "Oct 28, 2025",
  },
  {
    id: "4",
    title: "Sustainable Architecture: Building for the Future",
    description: "How modern architecture integrates solar solutions seamlessly.",
    content: "Isi konten lengkap berita 4...",
    imageUrl: "/max.jpg",
    readTime: "05 min read",
    date: "Oct 25, 2025",
  },
  {
    id: "5",
    title: "Battery Storage: The Key to Energy Independence",
    description: "Why you need a battery system to maximize your solar investment.",
    content: "Isi konten lengkap berita 5...",
    imageUrl: "/max.jpg",
    readTime: "07 min read",
    date: "Oct 20, 2025",
  },
  // Tambahkan berita ke-6, ke-7 dst di sini untuk mengetes load more...
];

const ITEMS_PER_PAGE = 4; // Konfigurasi: Tampilkan 4 per load

export default function BeritaPage() {
  // 2. State untuk melacak jumlah berita yang terlihat
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // 3. Fungsi untuk menambah jumlah berita yang terlihat
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  // 4. Cek apakah masih ada berita yang belum ditampilkan
  const hasMoreData = visibleCount < allNewsData.length;

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w" id="berita">
        
        {/* Header Halaman */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
            BLOG & NEWSROOM
          </span>
          <h1 className="text-4xl md:text-5xl  font-bold text-slate-900 mb-6">
            Wawasan & <span className="text-secondary">Berita</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Informasi terkini mengenai teknologi energi, tren industri, dan aktivitas perusahaan kami.
          </p>
        </div>

        {/* Daftar Berita */}
        <div className="flex flex-col border-t border-slate-200" >
          {/* 5. Slice data berdasarkan visibleCount */}
          {allNewsData.slice(0, visibleCount).map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>

        {/* Bagian Tombol / Pesan Habis */}
        <div className="mt-16 flex justify-center">
          {hasMoreData ? (
            // 6. Tampilkan Tombol jika data masih ada
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-full font-semibold transition-colors"
            >
              Muat Lebih Banyak
            </button>
          ) : (
            // 7. Tampilkan Pesan jika semua data sudah muncul
            <p className="text-slate-400 italic text-sm bg-slate-50 px-6 py-2 rounded-full">
              Semua berita telah ditampilkan.
            </p>
          )}
        </div>

      </div>
    </main>
  );
}