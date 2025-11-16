// Wajib ada karena tombol "View All" memiliki onClick
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AdvancedServiceCard from "./service-card"; // Impor komponen kartu

// Data untuk kartu
const services = [
  {
    title: "Residential Solar",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Hydropower System",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    title: "Wind Turbine",
    imageUrl:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
  },
];

export default function AdvancedServiceSection() {
  const handleViewAll = () => {
    console.log("View all services clicked");
    alert("View all services");
  };

  return (
    <section className="bg-white md:py-20">
      <div className="mx:auto mx-22 my-12 py-12 bg-gray-200 rounded-2xl">
        <div className="gap-8 mb-12 mx-16">
          <span className="inline-block bg-lime-100 text-lime-800 text-sm font-semibold px-4 py-1 rounded-full">
            SERVICE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Our Solar Solutions
          </h2>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mb-12 mx-16">
          {services.map((service) => (
            <AdvancedServiceCard
              key={service.title}
              title={service.title}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            className="bg-[#C5F82A] hover:bg-[#b5e820] text-black font-semibold rounded-full 
                       px-8 py-4 text-base h-auto
                       shadow-lg shadow-[#C5F82A]/40 hover:shadow-xl hover:shadow-[#C5F82A]/50 
                       transition-all duration-300 ease-in-out hover:scale-105"
            onClick={handleViewAll}
          >
            <ArrowRight className="w-5 h-5 mr-2" strokeWidth={2.5} />
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}
