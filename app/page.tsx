"use client";

import { SheetDemo } from "@/components/navbar/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import { SheetTrigger } from "@/components/ui/sheet";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/type-writer-effect";
import { TypewriterEffectSmooth2 } from "@/components/ui/typewriter-text-2";
import { Sheet } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    title: "From Ideas to Software Solutions 💡✨  ",
  },
  {
    title: "building the powerful tool 🌟✨",
  },
  {
    title: "From Ideas to lorem ipsum dolor sit amet  🌟✨",
  },
];

const tagline = "Finding new horizons for visionaries to accelerate their innovation and progress.";

const words1 = [
  { text: "Empowering" }, // Placeholder text to maintain structure
  { text: "Lives" }, // Placeholder text to maintain structure
  { text: "Through" },
];
const words2 = [
  { text: "Innovative" },
  { text: "AI", className: "!border-b-2 !border-blue-600 font-bold !text-blue-500 !hover:text-6xl" },
  { text: "Technologies." },
];

export default function Home() {
  const [start, setStart] = useState(false);
  const [taglineStart, setTaglineStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 2900);
    setTimeout(() => {
      setTaglineStart(true);
    }, 6100);
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative h-screen w-full overflow-x-hidden bg-pattern bg-black">
        <div className="w-full flex sticky">
          <Image
            alt=""
            src={"./assets/ellipse.svg"}
            width={"900"}
            height={"900"}
            className="absolute top-0 right-0  z-0"
          />
          <Image
            alt=""
            src={"./assets/ellipse.svg"}
            width={"900"}
            height={"900"}
            className="absolute -top-10 right-80  z-0"
          />
        </div>
        <Navbar />

        <div className="relative z-10 flex h-screen w-full flex-col items-start justify-center px-6 sm:px-16 md:px-24 lg:px-40 xl:px-80">
          <div className="relative w-auto min-h-96 text-2xl font-outfit text-white">
            <div className="h-48">
              <TypewriterEffectSmooth words={words1} cursorVisible={false} className="font-normal" />
              {start && (
                <TypewriterEffectSmooth2 words={words2} cursorVisible={true} className="font-normal text-7xl" />
              )}
              {taglineStart && <TextGenerateEffect words={tagline} />}
            </div>
            <div className="mt-4 flex w-full md:w-fit gap-3 md:max-w-full flex-wrap">
              <button className="group relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 transition duration-200 group-hover:opacity-75 neon-blue-border"></div>
                <div className="relative rounded-lg bg-transparent px-6 md:px-8 py-1 md:py-2 text-lg md:text-xl text-white">
                  Explore our services
                </div>
              </button>
              <button className="rounded-xl border-2 border-[#6881FF] px-5 py-1 md:py-3 text-lg md:text-xl text-white transition-colors duration-150 hover:bg-[#6881ff] neon-blue-border">
                Learn more
              </button>
            </div>
            <div className="mt-0 w-4/5 text-lg text-white">
              <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
          </div>
        </div>
        <div className="w-full h-64"></div>
      </div>
    </>
  );
}
