"use client";

import Image from "next/image";

// Data Dummy (Pastikan logo aslinya transparan/PNG)
const partners = [
  {
    name: "Partner One",
    src: "/shell.png", // Biru
  },
  {
    name: "Partner Two",
    src: "/shell.png", // Merah
  },
  {
    name: "Partner Three",
    src: "/shell.png", // Hijau
  },
  {
    name: "Partner Four",
    src: "/shell.png", // Kuning
  },
  {
    name: "Partner Five",
    src: "/shell.png", // Ungu
  },
];

export default function OurPartners() {
  return (
    <section className="py-16 md:py-24 " id="partner">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Partner Kami
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kami bangga dapat berkolaborasi dengan para pemimpin industri untuk
            mendorong inovasi dan memberikan nilai yang luar biasa.{" "}
          </p>
        </div>

        {/* Grid Logo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              // Tambahkan 'group' di parent agar hover terdeteksi lebih mudah
              className="relative h-50 w-full max-w-[300px] flex items-center justify-center group cursor-pointer"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="
                  object-contain p-2
                  transition-all duration-300 ease-in-out
                  
                  grayscale       
                  opacity-40      
                  
                  group-hover:grayscale-0  
                  group-hover:opacity-100  
                  group-hover:scale-110     
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
