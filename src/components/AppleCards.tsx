"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AuroraText } from "./magicui/aurora-text";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <AuroraText className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black  font-sans">
        Watch your Nature
      </AuroraText>
      <Carousel items={cards} />
    </div>
  );
}



const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
               
              </span>{" "}
            
            </p>
            <Image
              src="/logoimg.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
 
  {
    category: "Waste Management",
    title: "Reduce, Reuse, Recycle: Your Path to Sustainability",
    src: "/butterfly.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Waste Management", 
    title: "Composting: Turn Waste into Black Gold",
    src: "/leaves.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Waste Management",
    title: "Zero Waste Living: Small Steps, Big Impact",
    src: "/mushroom.jpeg", 
    content: <DummyContent />,
  },
  {
    category: "Waste Management",
    title: "Clean Earth, Better Future: Managing Our Waste",
    src: "/trees.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title:"It can be the Last green you see",
    src: "/leaves.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "The nature is calling you",
    src: "/mushroom.jpeg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Your roots are your identity",
    src: "/trees.jpeg",
    content: <DummyContent />,
  },
 
];
