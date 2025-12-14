import { Zap, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    // 1. CHANGE: Added 'relative' and 'z-0' to ensure it sits behind the image above
    <footer className="bg-secondary text-white py-12 md:py-16 relative z-0">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* ... (The rest of your footer content remains exactly the same) ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-32">
          {/* --- Kolom 1: Brand & Social Links --- */}
          <div>
            {/* <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                Green Power
              </span>
            </Link> */}
            <img src="/logo-white.png" alt="Logo" />
            <p className="mt-4 text-sm max-w-xs">
              Green Power adalah penyedia terkemuka solusi energi surya.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-4">
              Tautan Sosial
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* --- Kolom 2: Quick Link --- */}
          <div>
            <h3 className="text-lg font-semibold text-white">Tautan Cepat</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {["PENDAFTARAN", "KONTAK", "FITUR", "LAYANAN", "PROYEK", "HARGA"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* --- Kolom 3: Contact --- */}
          <div>
            <h3 className="text-lg font-semibold text-white">Kontak</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a href="mailto:greenpower@gmail.com" className="hover:text-white transition-colors">
                  greenpower@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+111526578" className="hover:text-white transition-colors">
                  +111 526-578
                </a>
                ,{" "}
                <a href="tel:+111623569" className="hover:text-white transition-colors">
                  +111 623-569
                </a>
              </p>
              <p>
                541 Del Monte St.
                <br />
                San Francisco, CA 94122
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}