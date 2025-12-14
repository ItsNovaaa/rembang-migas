'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WorkWithUs() {
  return (
    // 1. CHANGE: Removed 'overflow-hidden'. Use 'overflow-visible' or nothing.
    // We also add 'relative z-10' to the section context.
    <section className="text-gray-900 overflow-visible relative z-10 pb-10">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-1">
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
              TENTANG KAMI
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Tertarik Bekerja sama dengan PT Rembang Migas? Hubungi Kami
            </h2>
            <Button
              size="lg"
              className="bg-secondary text-white font-semibold hover:bg-primary mt-8 px-6 py-3"
            >
              Kontak Kami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:col-span-1 w-full justify-end">
            {/* 2. CHANGE: Added 'z-20'. 
               'top-24' pushes it down into the footer area. 
               'relative' allows z-index and top positioning to work. 
            */}
            <img
              src="/footer-contact.png"
              alt="Pekerja Green Power dengan panel surya"
              className="relative z-20 rounded-2xl object-contain max-h-[300px] md:max-h-[400px] w-auto 
                       lg:top-21 lg:scale-110 lg:translate-x-12"
            />
          </div>

        </div>
      </div>
    </section>
  );
}