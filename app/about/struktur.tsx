"use client";

import { cn } from "@/lib/utils";
import Image from "next/image"; // Opsional: Jika ingin menggunakan Next Image

// 1. Tipe Data & Card Component
interface TeamMember {
  name: string;
  role: string;
  level: "ceo" | "manager" | "staff";
  imageSrc?: string; // TAMBAHAN: Properti untuk URL gambar
}

function TeamCard({ member }: { member: TeamMember }) {
  const roleColor =
    member.level === "ceo"
      ? "text-teal-600"
      : member.level === "manager"
        ? "text-blue-600"
        : "text-gray-500";

  const cardStyle =
    member.level === "ceo"
      ? "border-teal-200 shadow-md bg-teal-50/50"
      : member.level === "manager"
        ? "border-blue-200 shadow-sm bg-blue-50/50"
        : "border border-slate-100 bg-white";

  // Warna border lingkaran gambar berdasarkan level
  const imgBorderColor =
    member.level === "ceo"
      ? "border-teal-500"
      : member.level === "manager"
        ? "border-blue-400"
        : "border-slate-200";

  return (
    <div
      className={cn(
        // Mengubah padding (p-4 ke p-6) dan lebar (w-48 ke w-56) agar lebih lega dengan gambar
        "p-6 rounded-2xl border w-56 text-center z-10 relative transition-all hover:-translate-y-1 hover:shadow-md",
        cardStyle
      )}
    >
      {/* --- BAGIAN GAMBAR --- */}
      <div className="flex justify-center -mt-1 mb-4">
        <div
          className={cn("p-1 rounded-full border-2 bg-white", imgBorderColor)}
        >
          {/* Menggunakan tag <img> standar HTML untuk kemudahan demo. 
                 Untuk produksi di Next.js, disarankan menggunakan component <Image /> */}
          <img
            src={
              member.imageSrc ||
              `https://ui-avatars.com/api/?name=${member.name}&background=random`
            }
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover"
          // Jika menggunakan Next Image, ganti line di atas dengan:
          // width={80} height={80} className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* --- BAGIAN TEKS --- */}
      <h3 className="font-bold text-slate-900 text-lg leading-tight">
        {member.name}
      </h3>
      <p
        className={cn(
          "text-sm font-medium mt-1 uppercase tracking-wider",
          roleColor
        )}
      >
        {member.role}
      </p>
    </div>
  );
}

// 2. Konektor Lurus Vertikal (Sama)
function VerticalLine() {
  // Menambah tinggi garis sedikit agar proporsional dengan kartu yang lebih besar
  return <div className="h-12 w-px bg-slate-300/80"></div>;
}

// 3. Konektor Bercabang (Sama, sedikit penyesuaian warna)
function BranchConnector() {
  return (
    // Lebar diubah menyesuaikan kartu yang sekarang lebih lebar
    <div className="flex flex-col items-center w-full max-w-[460px]">
      {/* Garis Vertikal dari Atas */}
      <div className="h-10 w-px bg-slate-300/80"></div>

      {/* Garis Horizontal + Kaki */}
      <div className="relative w-full h-10">
        {/* Garis Mendatar */}
        <div className="absolute top-0 left-[25%] right-[25%] h-px bg-slate-300/80"></div>

        {/* Kaki Kiri */}
        <div className="absolute top-0 left-[25%] h-full w-px bg-slate-300/80"></div>

        {/* Kaki Kanan */}
        <div className="absolute top-0 right-[25%] h-full w-px bg-slate-300/80"></div>
      </div>
    </div>
  );
}

export default function OrganizationChartWithImages() {
  return (
    <section className="py-20 px-4 bg-slate-50 min-h-screen flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">Tim Teknis</h2>
        <p className="text-lg text-slate-600 mt-2">
          Struktur Divisi Teknologi & Pengembangan
        </p>
      </div>

      {/* --- STRUKTUR DIAGRAM --- */}
      <div className="flex flex-col items-center">
        {/* === LEVEL 1: HEAD / CEO === */}
        {/* TAMBAHAN: imageSrc ditambahkan di sini */}
        <TeamCard
          member={{
            name: "Sarah Jenkins",
            role: "Head of Engineering",
            level: "ceo",
            imageSrc: "/1.jpg", // Gambar contoh
          }}
        />

        {/* Garis Lurus */}
        <VerticalLine />

        {/* === LEVEL 2: MANAGER === */}
        <TeamCard
          member={{
            name: "Michael Chang",
            role: "Lead Architect",
            level: "manager",
            imageSrc: "/1.jpg", // Gambar contoh
          }}
        />

        {/* Garis Bercabang */}
        {/* Lebar container disesuaikan agar pas dengan 2 kartu staff di bawahnya */}
        <div className="w-full max-w-[460px]">
          <BranchConnector />
        </div>

        {/* === LEVEL 3: STAFF === */}
        {/* Lebar container disesuaikan */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[460px] gap-4 md:gap-0">
          {/* Staff Kiri */}
          <div className="flex flex-col items-center">
            <TeamCard
              member={{
                name: "Alex Brown",
                role: "Frontend Dev",
                level: "staff",
                imageSrc: "/1.jpg", // Gambar contoh
              }}
            />
          </div>

          {/* Staff Kanan */}
          <div className="flex flex-col items-center">
            <TeamCard
              member={{
                name: "Alex Brown",
                role: "Frontend Dev",
                level: "staff",
                imageSrc: "/1.jpg", // Gambar contoh
              }}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
