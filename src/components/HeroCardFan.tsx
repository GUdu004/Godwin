"use client";

import React, { useRef, useState } from "react";

// avec anni-style S-curve sweeping fan:
// On mobile: 9 focal cards gracefully centered, gentle elevation, fitting within 320-390px screens.
// On desktop: full 16-card sweeping arc from left trough to right peak crest.
const FAN_CARDS = [
  {
    img: "/images/projects/proptii/slide_01.png",
    alt: "Proptii PropTech",
    translateY: 14,
    rotate: -2.5,
    opacity: 0.16,
    blur: 16,
    scale: 0.84,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/easyease/slide_02.png",
    alt: "EasyEase Interaction",
    translateY: 22,
    rotate: -2.0,
    opacity: 0.24,
    blur: 13,
    scale: 0.85,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/myedufusion/slide_01.png",
    alt: "MyEduFusion SIS",
    translateY: 30,
    rotate: -1.5,
    opacity: 0.35,
    blur: 10,
    scale: 0.87,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/proptii/slide_02.png",
    alt: "Proptii Architecture",
    translateY: 36, // S-curve valley trough
    rotate: -0.5,
    opacity: 0.48,
    blur: 7.5,
    scale: 0.89,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/easyease/slide_06.png",
    alt: "EasyEase Sandbox",
    translateY: 34,
    rotate: 0.0,
    opacity: 0.60,
    blur: 5.5,
    scale: 0.91,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/myedufusion/slide_23.png",
    alt: "MyEduFusion Analytics",
    translateY: 26,
    rotate: 0.5,
    opacity: 0.72,
    blur: 3.5,
    scale: 0.93,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/proptii/slide_05.png",
    alt: "Proptii Navigation",
    translateY: 14,
    rotate: 1.0,
    opacity: 0.84,
    blur: 2.0,
    scale: 0.96,
    hideOnMobile: true,
  },
  {
    img: "/images/projects/easyease/slide_08.png",
    alt: "EasyEase System",
    translateY: -2, // crossing baseline
    mobileTranslateY: 6,
    rotate: 1.5,
    opacity: 0.92,
    blur: 1.0,
    scale: 0.98,
  },
  {
    img: "/images/projects/proptii/slide_04.png",
    alt: "Proptii Architecture Soft",
    translateY: -20,
    mobileTranslateY: 2,
    rotate: 2.0,
    opacity: 0.98,
    blur: 0,
    scale: 1.00,
  },
  {
    img: "/images/projects/easyease/line.gif",
    alt: "EasyEase Line Animation",
    translateY: -40,
    mobileTranslateY: -4,
    rotate: 2.0,
    opacity: 1.0,
    blur: 0,
    scale: 1.03,
  },
  {
    img: "/images/projects/easyease/slide_11.png",
    alt: "EasyEase 3D Space",
    translateY: -62,
    mobileTranslateY: -12,
    rotate: 1.5,
    opacity: 1.0,
    blur: 0,
    scale: 1.06,
  },
  {
    img: "/images/projects/easyease/slide_01.png",
    alt: "EasyEase STEM Modules",
    translateY: -86,
    mobileTranslateY: -22,
    rotate: 1.0,
    opacity: 1.0,
    blur: 0,
    scale: 1.09,
  },
  {
    img: "/images/projects/proptii/slide_03.png",
    alt: "Proptii Dashboard",
    translateY: -110,
    mobileTranslateY: -32,
    rotate: 0.5,
    opacity: 1.0,
    blur: 0,
    scale: 1.12,
  },
  {
    img: "/images/projects/easyease/slide_12.png",
    alt: "EasyEase Mobile UI",
    translateY: -132,
    mobileTranslateY: -42,
    rotate: 0.0,
    opacity: 1.0,
    blur: 0,
    scale: 1.15,
  },
  {
    img: "/images/projects/easyease/EasyEase_Cover_01.jpg",
    alt: "EasyEase Cover Showcase",
    translateY: -150, // Peak hero card
    mobileTranslateY: -50,
    rotate: -0.5,
    opacity: 1.0,
    blur: 0,
    scale: 1.18,
  },
  {
    img: "/images/projects/easyease/angle.gif",
    alt: "EasyEase Angle Animation",
    translateY: -160, // Atmospheric crest background card
    mobileTranslateY: -54,
    rotate: 1.0,
    opacity: 0.65,
    blur: 2.0,
    scale: 1.16,
  },
];

export function HeroCardFan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToWork}
      className="relative mt-4 sm:mt-10 mb-2 sm:mb-4 w-full overflow-hidden sm:overflow-visible cursor-pointer select-none py-4 sm:py-8"
    >
      <div className="card-fan-container w-full relative flex items-end justify-center sm:justify-end px-2 sm:px-0 sm:pr-4 lg:pr-6">
        {/* S-curve sweeping arc: compact and fully visible on mobile, expanded on desktop */}
        <div className="flex items-end -space-x-7 sm:-space-x-11 md:-space-x-13 lg:-space-x-16 xl:-space-x-18 relative">
          {FAN_CARDS.map((card, i) => {
            // Interactive 3D tilt response based on mouse position
            const dynamicTranslateY = card.translateY + mouseOffset.y * (16 - i) * 1.6;
            const dynamicRotate = card.rotate + mouseOffset.x * (i - 7) * 0.35;
            const mobileY = card.mobileTranslateY ?? 0;

            return (
              <div
                key={i}
                className={`${
                  card.hideOnMobile ? "hidden sm:block" : "block"
                } fan-card-item relative flex-shrink-0 transition-transform duration-300 ease-out will-change-transform`}
                style={
                  {
                    "--y-mob": `${mobileY}px`,
                    "--y-desk": `${dynamicTranslateY}px`,
                    "--rot": `${dynamicRotate}deg`,
                    "--scale": card.scale,
                    "--scale-mob": (card.scale * 0.94).toFixed(2),
                    opacity: card.opacity,
                    filter: `blur(${card.blur}px)`,
                    zIndex: i + 1,
                  } as React.CSSProperties
                }
              >
                <div className="w-14 sm:w-18 md:w-22 lg:w-28 xl:w-32 aspect-[1/1.52] rounded-lg sm:rounded-xl overflow-hidden border border-black/10 bg-white shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover object-left"
                    draggable={false}
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroCardFan;
