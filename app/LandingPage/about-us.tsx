import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="bg-white text-gray-900 py-36c:\Users\Novari\Downloads\ASSETS__-05.png md:py-28"  >
      <div className="container mx-auto px-4">
        {/* 1. Tata Letak Section Utama (Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mx-12 items-center">
          
          {/* 2. Kolom Kiri (Konten Teks) */}
          <div className="lg:col-span-1 ">
            {/* Badge */}
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
              ABOUT US
            </span>

            {/* Judul */}
            <h2 className="text-4xl font-bold text-black mt-4">
              The Green Power
            </h2>

            {/* Paragraf Deskripsi */}
            <p className="text-gray-600 mt-4 text-base">
              Green Power is a leading provider of solar energy solutions,
              dedicated to empowering individuals and businesses with clean,
              renewable energy. We believe in the power of solar energy to
              transform lives and communities.
            </p>

            {/* Blok Review */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-700 font-medium">
                  Excellent 4.8 / 5
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              {/* Stacked Avatars */}
              <div className="flex items-center -space-x-3">
                <img
                  src="/people__1.png"
                  alt="Reviewer 1"
                  width="40"
                  height="40"
                  className="rounded-full border-2 border-white w-10 h-10 object-cover"
                />
                <img
                  src="/people__1.png"
                  alt="Reviewer 2"
                  width="40"
                  height="40"
                  className="rounded-full border-2 border-white w-10 h-10 object-cover"
                />
                <img
                  src="/people__1.png"
                  alt="Reviewer 3"
                  width="40"
                  height="40"
                  className="rounded-full border-2 border-white w-10 h-10 object-cover"
                />
              </div>
              <span className="text-gray-700 font-medium">Reviews 130+</span>
            </div>

            {/* Tombol CTA */}
            <Button
              size="lg"
              className="bg-secondary text-white font-semibold hover:bg-primary mt-8 px-6 py-3"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn more
            </Button>
          </div>

          {/* 3. Kolom Tengah & Kanan (Gambar + Kartu Overlap) */}
          <div className="lg:col-span-2 pl-12 ml-28 relative">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
              {/* Gambar */}
              <div className="relative z-0 lg:ml-8 w-full">
                <img
                  src="/about-us.png"
                  alt="Pekerja Green Power dengan panel surya"
                  className="rounded-2xl object-cover w-full h-auto max-h-[700px]"
                />
                <div className="absolute inset-0 bg-black/10 rounded-2xl"/>
              </div>

              {/* Kartu Statistik (Overlap) */}
              <div className="flex flex-col gap-6 lg:-ml-16 relative z-10">
                {/* Kartu 1: Success */}
                <Card className="bg-white border-gray-200 rounded-2xl shadow-lg p-6 w-100">
                  <CardContent className="p-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">87%</span>
                      <span className="text-lg text-gray-700">Success</span>
                    </div>
                    <p className="text-gray-600 mt-3">
                      Green Power is dedicated to empowering individuals and
                      businesses with clean, renewable energy. We strive to make
                      solar energy accessible and affordable for all.
                    </p>
                  </CardContent>
                </Card>

                {/* Kartu 2: Experience */}
                <Card className="bg-white border-gray-200 rounded-2xl shadow-lg p-6 w-100">
                  <CardContent className="p-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">05+</span>
                      <span className="text-lg text-gray-700">Experience</span>
                    </div>
                    <p className="text-gray-600 mt-3">
                      Our vision is to be a global leader in sustainable energy
                      solutions, creating a brighter, cleaner future for
                      generations to come.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}