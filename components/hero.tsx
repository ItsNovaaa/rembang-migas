"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function Hero() {
  return (
    <FadeInSection>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/nature-forest-trees-sky-landscape.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
                Innovate Your Business Today
              </h1>
              <p className="text-lg text-gray-100 max-w-lg">
                We deliver cutting-edge technology solutions that transform enterprises and drive sustainable growth in
                the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
