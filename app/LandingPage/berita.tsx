import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostItem, BlogPostData } from "./item-berita"; // Pastikan path import benar

// Update Data Dummy dengan 'content'
const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "Masa Depan Surya Perumahan: Tren yang Perlu Diperhatikan di 2026",
    description: "Temukan inovasi mendatang dalam teknologi surya, dari panel bifacial hingga sistem manajemen energi cerdas.",
    // Isi konten panjang untuk Modal
    content: `Industri surya berkembang pesat. Pada tahun 2026, kami memperkirakan lonjakan adopsi panel surya bifacial untuk penggunaan perumahan, memungkinkan penangkapan energi dari kedua sisi panel.
    
    Selain itu, sistem manajemen energi cerdas yang terintegrasi dengan AI akan menjadi standar, mengoptimalkan penggunaan baterai berdasarkan pola cuaca dan kebiasaan penggunaan. Ini memastikan efisiensi maksimum dan penghematan biaya bagi pemilik rumah.`,
    imageUrl: "/max.jpg",
    readTime: "06 min read",
    date: "Nov 10, 2025",
  },
  {
    id: "2",
    title: "Bagaimana Insentif Surya Dapat Menghemat Ribuan Tahun Ini",
    description: "Pembahasan mendalam tentang kredit pajak federal dan negara bagian serta rabat terbaru yang tersedia untuk instalasi surya baru.",
    content: `Memahami kredit pajak sangat penting untuk memaksimalkan ROI. Tahun ini, pemerintah federal telah memperpanjang ITC (Kredit Pajak Investasi), yang memungkinkan pemilik rumah memotong 30% dari biaya pemasangan sistem energi surya dari pajak federal mereka.
    
    Selain itu, banyak negara bagian menawarkan rabat lokal yang dapat digabungkan dengan insentif federal. Kami merinci peluang paling menguntungkan yang tersedia di wilayah Anda.`,
    imageUrl: "/max.jpg",
    readTime: "05 min read",
    date: "Nov 02, 2025",
  },
  {
    id: "3",
    title: "Studi Kasus: Rumah Era 1920-an Menjadi Net-Zero dengan Surya",
    description: "Lihat tantangan dan keberhasilan memodernisasi rumah tua dengan susunan surya modern yang efisien tinggi.",
    content: `Memodernisasi rumah berusia 100 tahun menghadirkan tantangan unik, dari integritas struktural hingga pelestarian estetika. Dalam studi kasus ini, kami mengeksplorasi bagaimana tim Green Power berhasil memasang sistem 8kW di properti warisan.
    
    Hasilnya? Rumah Net-Zero yang mempertahankan pesona sejarahnya sambil memproduksi 100% kebutuhan listriknya sendiri.`,
    imageUrl: "/max.jpg",
    readTime: "08 min read",
    date: "Oct 28, 2025",
  },
];

export default function Berita() {
  return (
    <section className="bg-[#f2fcfc] text-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-20">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Berita Terbaru
          </h2>
          <Button size="lg" asChild className="bg-secondary text-white hover:bg-primary rounded-full px-6 py-3 hidden md:flex">
            <Link href="/berita"> {/* Link ke halaman baru */}
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-200">
          {blogPosts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 text-center md:hidden">
          <Button asChild className="bg-secondary text-white hover:bg-primary rounded-full px-6 py-3 w-full">
            <Link href="/berita">
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};