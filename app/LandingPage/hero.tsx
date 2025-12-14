"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Leaf, Menu, Sparkles } from "lucide-react";
import Navbar from "../Components/Navbar";

export default function Hero() {
  return (
    <section>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20 pb-20 md:pb-40">
        <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold max-w-5xl">
          Energi yang Lahir dari Bumi <br /> Rembang, Digerakkan Manusia, dan
          Diberkahi oleh Doa{" "}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
          Temukan cara luar biasa energi surya dapat mengubah rumah atau bisnis
          Anda.
        </p>
      </div>

      {/* 4. Komponen Info Cards */}
      <div className="relative md:absolute z-20 md:bottom-10 left-0 right-0 w-full max-w-sm md:max-w-xl mx-auto px-4 pb-10 md:pb-20 -mt-20 md:mt-0">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 1: Alternative Energy */}
          <Card className="flex-1 grow-2 bg-white/5 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-4 flex items-center gap-4">
              <Image
                src="/1.jpg" // GANTI DENGAN PATH GAMBAR ANDA
                alt="Pekerja panel surya"
                width={80}
                height={80}
                className="rounded-md object-cover h-20 w-20"
              />
              <div>
                <h3 className="font-bold text-lg">Energi Alternatif</h3>
                <p className="text-sm text-gray-200">
                  Temukan cara luar biasa energi surya dapat mengubah.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Social Proof */}
          <Card className="flex-1 bg-white/5 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-4 flex  items-center justify-between gap-4">
              <div className="justify-center items-center gap-4">
                {/* Stacked Avatars */}
                <div className="flex -space-x-4">
                  <Image
                    src="/avatar1.jpg" // GANTI DENGAN PATH GAMBAR ANDA
                    alt="Client 1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white/50"
                  />
                  <Image
                    src="/avatar1.jpg" // GANTI DENGAN PATH GAMBAR ANDA
                    alt="Client 2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white/50"
                  />
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold border-2 border-white/50">
                    80+
                  </div>
                </div>
                <p className="text-sm">
                  200+ klien puas kami di seluruh dunia.
                </p>
              </div>
              {/* <Sparkles className="text-green-400 w-8 h-8 flex-shrink-0" /> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
