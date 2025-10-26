import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Team from "@/components/team"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Services />
      <About />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
