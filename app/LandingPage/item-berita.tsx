"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Definisi Tipe Data (Wajib ada field 'content' untuk isi modal)
export type BlogPostData = {
  id: string;
  title: string;
  description: string;
  content: string; // <--- ISI LENGKAP BERITA
  imageUrl: string;
  readTime: string;
  date: string;
};

export const BlogPostItem = ({ post }: { post: BlogPostData }) => {
  return (
    <article className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 py-8 border-b border-slate-100 last:border-0">
      
      {/* 1. GAMBAR */}
      <div className="w-full md:w-1/3 lg:w-[350px] flex-shrink-0">
        <div className="relative rounded-xl overflow-hidden aspect-video shadow-sm group cursor-pointer">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={700}
            height={394}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 2. TEKS (Judul & Deskripsi Singkat) */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-primary leading-tight mb-3 hover:text-secondary transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-primary leading-relaxed line-clamp-2 md:line-clamp-3">
          {post.description}
        </p>
        
        {/* Info Mobile */}
        <div className="flex items-center gap-4 mt-4 md:hidden text-sm text-slate-500">
             <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
             <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
        </div>
      </div>

      {/* 3. TOMBOL ACTION (Memicu Dialog) */}
      <div className="hidden md:flex flex-col items-end justify-between h-full gap-4 min-w-[140px]">
        <div className="text-right space-y-1">
          <p className="text-sm font-semibold text-slate-900 flex items-center justify-end gap-2">
             <Clock className="w-4 h-4 text-secondary"/> {post.readTime}
          </p>
          <p className="text-sm text-slate-500">{post.date}</p>
        </div>

        {/* --- DIALOG MODAL MULAI DI SINI --- */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-secondary text-white hover:bg-primary rounded-full w-12 h-12 shadow-lg shadow-secondary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primaryn/50"
              size="icon"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white max-w-4xl h-[90vh] md:h-auto md:max-h-[85vh] p-0 gap-0 overflow-hidden rounded-2xl z-50 border-none">
            {/* Header Gambar Modal */}
            <div className="relative w-full h-64 md:h-72 shrink-0">
              <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                 <span className="bg-secondary text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">NEWS</span>
                 <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight shadow-black drop-shadow-md">
                    {post.title}
                 </DialogTitle>
                 <div className="flex items-center gap-4 text-white/80 text-sm mt-2">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                 </div>
              </div>
            </div>

            {/* Isi Modal (Scrollable) */}
            <ScrollArea className="h-full md:h-[400px] p-6 md:p-8 bg-white">
                <DialogDescription className="text-lg font-medium text-slate-700 mb-6">
                    {post.description}
                </DialogDescription>
                <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-line">
                    {post.content}
                </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        {/* --- DIALOG SELESAI --- */}

      </div>
    </article>
  );
};