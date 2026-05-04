"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const certsAndEducation = [
  "/certs/comptia-security-plus-img.png",
  "/certs/comptia-network-plus-img.png",
  "/certs/isaca-certificate-img.png",
  "/education/rrc/IMG_5336.JPEG",
  "/education/rrc/IMG_0144.JPEG",
  "/education/rrc/IMG_6026.JPEG",
  "/education/rrc/44950c83-68e7-42fd-a94c-f8c86fed74a2.jpg",
  "/education/federation/IMG_20220927_190403.jpg",
  "/education/federation/IMG_20220927_190913.JPEG",
  "/education/federation/IMG_20220924_134359.jpg",
];

const experienceAndBlogs = [
  "/experience/rrc/IMG_0352.JPEG",
  "/volunteering/wcisc/IMG_1368.JPEG",
  "/volunteering/wcisc/IMG_1282.JPEG",
  "/volunteering/wcisc/PSX_20260421_173426.jpg",
  "/volunteering/cme/82d8eed3-a022-418a-b83d-150033e33b9d.JPEG",
  "/blog/pte-scores.png",
  "/blog/china-test-1.jpg",
  "/blog/china-test-2.jpg",
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function Row({ items, animClass }: { items: string[]; animClass: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-2 w-max ${animClass}`}>
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative h-28 w-40 shrink-0 rounded-md overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FlowingGallery() {
  const [row1, setRow1] = useState(certsAndEducation);
  const [row2, setRow2] = useState(experienceAndBlogs);

  useEffect(() => {
    setRow1(shuffle(certsAndEducation));
    setRow2(shuffle(experienceAndBlogs));
  }, []);

  return (
    <div className="relative -mx-4 space-y-2 py-1 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <Row items={row1} animClass="animate-marquee-left" />
      <Row items={row2} animClass="animate-marquee-right" />
    </div>
  );
}
