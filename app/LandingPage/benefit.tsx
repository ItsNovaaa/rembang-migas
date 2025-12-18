import Image from "next/image";
import { Card, CardContent } from "@/components/card-custom";
import {
  Leaf,
  DollarSign,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

// Tipe data untuk setiap kartu manfaat
type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Data untuk kartu-kartu
const benefitsData: Benefit[] = [
  {
    icon: Leaf,
    title: "Manfaat Lingkungan",
    description:
      "Kurangi jejak karbon, lindungi planet ini, dan lestarikan lingkungan.",
  },
  {
    icon: DollarSign,
    title: "Manfaat Finansial",
    description:
      "Tagihan energi lebih rendah, potensi insentif pajak, dan lebih banyak penghematan.",
  },
  {
    icon: Zap,
    title: "Kemandirian Energi",
    description:
      "Ambil kendali penuh atas sumber energi Anda dan maksimalkan potensi Anda.",
  },
  //   {
  //     icon: ShieldCheck,
  //     title: "Reliability",
  //     description: "Enjoy uninterrupted power supply for your convenience.",
  //   },
];

export default function BenefitsSection() {
  return (
    // 1. Tata Letak Section Utama
    <section className="text-gray-900 py-16 md:py-20" id="benefit">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">

        {/* 2. Area Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-12">
          {/* Kolom Kiri */}
          <div>
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
              MANFAAT
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Kemudahan Bekerja Bersama Kami
            </h2>
          </div>
          {/* Kolom Kanan */}
          <p className="text-gray-600 text-lg max-w-md md:mt-2">
            Kami percaya pada kekuatan energi surya untuk mengubah kehidupan dan
            komunitas.
          </p>
        </div>

        {/* 3. Grid Kartu Manfaat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit) => {
            const IconComponent = benefit.icon; // Ambil komponen Ikon
            return (
              // 4. Styling Kartu Individual
              <Card
                key={benefit.title}
                className="rounded-2xl overflow-hidden border  bg-[#e8f9f9]"
              >
                {/* Area Gambar & Ikon (Bagian Atas) */}
                <div className="relative">
                  {/* Gambar Latar */}
                  <Image
                    src="/1.jpg" // GANTI PATH INI
                    alt="Langit berawan"
                    width={400}
                    height={225}
                    className="w-full object-cover rounded-t-lg aspect-video"
                  />
                  {/* Container Ikon */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-secondary rounded-full p-3 inline-block">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Area Konten (Bagian Bawah) */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-primary mt-2">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}