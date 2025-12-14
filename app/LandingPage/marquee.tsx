"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { Section } from "lucide-react";
// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/1.jpg",
    name: "John Doe",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/1.jpg",
    name: "John Doe",
  },
];

export default function MarqueeSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f2fcfc]">
      <div className="text-center px-40 py-10 flex flex-col items-center gap-4">
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
          TENTANG KAMI
        </span>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Tanggapan Mereka tentang Kami
        </h2>

        {/* Paragraf Deskripsi */}
        <p className="text-gray-600 mt-4 text-base">
          Green Power adalah penyedia terkemuka solusi energi surya, berdedikasi
          untuk memberdayakan individu dan bisnis dengan energi bersih dan terbarukan.
          Kami percaya pada kekuatan energi surya untuk mengubah kehidupan dan
          komunitas.
        </p>
      </div>

      <Marquee className="" >
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent >
          {data.map((item, index) => (
            <MarqueeItem key={index}>
              <Card className="max-w-[400px] mx-2 my-1 bg-white">
                <CardHeader className="flex gap-3 items-center">
                  <img
                    alt="heroui logo"
                    height={40}
                    //   radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-md">{item.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
      <Marquee className="pt-5">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="right">
          {data.map((item, index) => (
            <MarqueeItem key={index}>
              <Card className="max-w-[400px] mx-2 my-3 bg-white">
                <CardHeader className="flex gap-3 items-center">
                  <img
                    alt="heroui logo"
                    height={40}
                    //   radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-md">{item.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                  {/* <CardDescription>{item.description}</CardDescription> */}
                </CardContent>
              </Card>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
