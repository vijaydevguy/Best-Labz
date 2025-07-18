"use client";
import React, { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import circleText from "../../../assets/about_circle_text5.png";
import text from "../../../assets/about_text5.png";
import stripe from "../../../assets/stripe_svg.svg";
import bg1 from "../../../assets/expertise_bg.png";
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";
import OurTech from "../../sections/Our_tech";
import { analytics } from "@/utils/firebase";
import { logEvent } from "firebase/analytics";



const Expertise = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Nov-2021",
      description:
        "We began our journey as a one-person freelance operation, collaborating with B2B companies and primarily focusing on mobile application projects.",
      month: "Nov",
      year: "2021",
    },
    {
      title: "July-2022",
      description:
        "We transitioned from freelancing to operating as a full-fledged company. We introduced contract-based engagement models (3 to 6 months), expanded into web application development, and started training freshers through 4 to 6-month onboarding programs.",
      month: "July",
      year: "2022",
    },
    {
      title: "July-2023",
      description:
        "Our team grew to 4 members, allowing us to take on project-based work across web, mobile, and backend technologies simultaneously. We also invested in essential assets, including laptops and tools, to support our growing team.",
      month: "July",
      year: "2023",
    },
    {
      title: "July-2024",
      description:
        "We scaled up further, managing multiple long-term projects at once and increasing our team size to 8 members. With deeper technical expertise and the ability to solve complex challenges, we started building internal processes and structures to enable a semi-autonomous team.",
      month: "July",
      year: "2024",
    },
    {
      title: "Our Vision",
      description:
        "In 2025, our goal is to grow our team to 15–20 members and establish a physical office space. This move aims to foster a collaborative culture, improve communication, and double our overall productivity.",
      month: "",
      year: "2025",
    },
  ];

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

      if (analytics) {
        logEvent(analytics, "about_us_page", {
          page_path: window.location.pathname,
          time_spent_seconds: timeSpentSeconds,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      handleBeforeUnload(); // for client-side route changes
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const scrollPosition = window.scrollY;

      // console.log(`containertop : ${containerTop}`);

      // Calculate which project should be active based on scroll position
      const projectHeight = containerHeight / projects.length;

      const newActiveIndex = Math.min(
        projects.length - 1,
        Math.max(0, Math.floor((scrollPosition - containerTop) / projectHeight))
      );
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <>
      <Navbar />
      <div className="px-[5%] relative overflow-x-clip mt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src={bg1}
            alt="bg"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
        </div>

        {isMobile ? (
          // Mobile View (unchanged)

          <div className="mb-10">
            <div className="flex flex-col items-center justify-center pt-10">
              <h2 className="header-mob">About us</h2>
              <p className="subhead-mob">Explore the some of our finest work</p>
            </div>

            <div className="relative flex items-center justify-center pt-6">
              {/* Gradient Background */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)]"></div>

              <div className="flex items-center -ml-8 z-10">
                <Image src={text} alt="text" className="pointer-events-none" />
              </div>

              <div className="flex items-center -z-10 -ml-24">
                <Image
                  src={circleText}
                  alt="circle_text"
                  className="min-w-380px] pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-12">
              <h2 className="header-mob mb-12">Our Journey</h2>

              {/* Timeline Container */}
              <div className="w-full   flex items-start flex-col justify-center">
                {/* <Image src={line} alt="line" className="absolute w-auto h-[250px] left-10 "/> */}
                {projects.map((project, index) => (
                  <div key={index} className="relative flex w-full mb-12">
                    <div className="flex items-center justify-center                      flex-shrink-0 w-16">
                      {/* Glowing Circle */}
                      <div className="relative z-10 flex-shrink-1 w-10 h-10 mr-4">
                        <Image
                          src={stripe}
                          alt="glow"
                          className="min-w-32 relative -left-12 -top-24 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="header-mob text-[24px]">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-[#6D6D6D]">
                        <span className="font-[jost] font-semibold text-[18px] mr-1">
                          {project.month}
                        </span>
                        <span className="font-[jost] font-semibold text-[18px]">
                          {project.year}
                        </span>
                      </div>
                      <p
                        className="text-[16px] font-[outfit] text-[#696969] mb-4"
                        style={{
                          letterSpacing: "0.04em",
                          lineHeight: "1.6",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop View with sticky cards
          <div className="mb-10">
            <div className="flex flex-col items-center justify-center pt-12">
              <h2 className={`header`}>About us</h2>
              <p className="subhead">Explore the some of our finest work</p>
            </div>

            <div className="relative flex items-center justify-center pt-6">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)]"></div>

              <div className="flex items-center lg:-ml-34 md:-ml-18 z-10">
                <Image src={text} alt="text" className="pointer-events-none" />
              </div>

              <div className="flex items-center -z-10 lg:-ml-68 md:-ml-42">
                <Image
                  src={circleText}
                  alt="circle_text"
                  className="min-w-380px] pointer-events-none"
                />
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center pt-12">
              <h2 className="sticky top-[84px] header mb-12  z-10 py-4 w-full">
                Our Journey
              </h2>

              <div
                ref={containerRef}
                className="relative flex items-start justify-center w-full  min-h-[100vh]"
              >
                {/* Left Column - Date that changes with scroll */}
                <div className="sticky top-[200px] flex items-center justify-center w-[40%] h-[400px]">
                  <Image
                    src={stripe}
                    alt="img"
                    className="relative lg:-left-10 left-2 pointer-events-none"
                  />
                  <p className="relative lg:-left-32 -left-16 text-[#6D6D6D] font-[jost] md:text-[32px] text-[48px] font-semibold min-w-[250px]">
                    <span>{projects[activeIndex].month}</span> <span>-</span>{" "}
                    <span>{projects[activeIndex].year}</span>
                  </p>
                </div>

                {/* Right Column - sticky cards */}
                <div className="relative w-[60%]">
                  {projects.map((item, index) => (
                    <div
                      key={index}
                      className="sticky top-[200px] w-[100%] min-h-[80vh] bg-white  flex flex-col items-center justify-center mb-6 p-6 "
                      style={{
                        top: `${100}px`, // slight offset for visual stacking
                        opacity: index === activeIndex ? 1 : 1,
                        transform: `scale(${index === activeIndex ? 1 : 0.95})`,
                        transition: "all 0.3s ease",
                        zIndex: index === activeIndex ? 2 : 1,
                      }}
                    >
                      <h2 className="header  w-full mb-4 text-black">
                        {item.title}
                      </h2>
                      <p
                        className="font-[outfit] md:text-[24px] text-[32px] text-[#696969] "
                        style={{
                          lineHeight: "162%",
                          letterSpacing: "4%",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <OurTech />
      <Footer />
    </>
  );
};

export default Expertise;
