"use client";
import { useMediaQuery } from "react-responsive";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Import all specified images
import web from "../../assets/Web development.svg";
import digital_marketing from "../../assets/Digital.svg";
import branding from "../../assets/branding1.svg";
import it_consulting from "../../assets/IT_consulting&services.svg";
import mobile_dev from "../../assets/App development.svg";

import pattern from "../../assets/card_pattern.svg";

// Service data with corresponding images and descriptions
const services = [
  {
    id: "01",
    title: "Web Development",
    image: web,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "02",
    title: "Mobile Development",
    image: mobile_dev,
    description:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    id: "03",
    title: "Digital Marketing",
    image: digital_marketing,
    description:
      "But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
  },
  {
    id: "04",
    title: "Branding",
    image: branding,
    description:
      "Containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "05",
    title: "IT Consulting",
    image: it_consulting,
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.",
  },
];

export default function Ourservices() {
  const galleryRef = useRef(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });

  // Mobile scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (mobileScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          mobileScrollRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
      }
    };

    const scrollContainer = mobileScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate scroll distance to stop exactly at last card
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMedium
      ? ["0%", `-${(services.length - 1) * 45}vw`]
      : ["0%", `-${(services.length - 1) * 24}vw`]
  );

  // Loader visibility control
  const loaderOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Loader rotation
  const loaderRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <div className="bg-[#FCFFFF] p-4 relative">
      <h2 className="font-[jost] font-semibold w-full text-center pb-4 text-[32px]">
        Our Services
      </h2>
      <div
        ref={mobileScrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[85vw] snap-center bg-white rounded-lg shadow-lg p-6 overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className=" h-0 w-full -top-2 -z-10">
              <Image
                src={pattern}
                alt="pattern"
                className="relative w-[2000px] pointer-events-none"
              />
            </div>

            <div className="relative z-30">
              <div className="relative h-48 w-full mb-4 z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>
            </div>
              <h3 className="text-3xl font-semibold text-center  z-50">
                {service.title}
              </h3>
          </div>
        ))}
      </div>

      {/* Custom scroll indicator */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6866c8] transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  ) : (
    <article
      id="gallery"
      className="relative px-[10%] overflow-x-clip w-[98vw] bg-[#FCFFFF] "
    >
      <header className="sticky top-[100px] flex justify-center items-center z-5">
        <h2 className="font-[jost] md:text-[32px] lg:text-[48px] font-semibold">
          Our Services
        </h2>
      </header>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_center,_rgba(178,230,228,0.8),_transparent_50%)] z-4"></div>
      <section ref={galleryRef} className="h-[150vh] relative z-10">
        <div className="sticky top-[160px] overflow-hidden h-screen ">
          <motion.ul
            style={{ x }}
            className="flex h-[600px] items-center gap-12 pl-8"
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                className=" flex w-[400px] h-[500px] flex-shrink-0 items-center justify-center flex-col bg-white rounded-xl shadow-xl p-8 z-15 "
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className=" h-0 w-full relative -z-50">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="relative w-[1500px] pointer-events-none"
                  />
                </div>
                <div className="relative w-full h-[300px] mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>
                <div className="text-center">
                  {/* <h3 className="font-['Azeret_Mono'] text-[50px] font-bold leading-[1.2] m-0 tracking-[-3px] relative bottom-[30px]">
                    {service.id}
                  </h3> */}
                  <p className="text-3xl font-semibold mt-2 mb-4 font-[jost]">
                    {service.title}
                  </p>
                  {/* <p className="text-gray-600 max-w-[600px] mx-auto">
                    {service.description}
                  </p> */}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Circular loader - bottom right corner */}
        <motion.div
          style={{
            rotate: loaderRotation,
            opacity: loaderOpacity,
          }}
          className="fixed bottom-8 right-8 w-12 h-12 border-4 border-[#6866c8] border-t-transparent rounded-full z-50"
        />
      </section>
    </article>
  );
}
