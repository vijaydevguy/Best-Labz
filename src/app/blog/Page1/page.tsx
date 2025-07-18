"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import bg from "../../../assets/Portfolio_bg.png";
import circleText from "../../../assets/blog_circle_text5.png";
import text from "../../../assets/blog_text5.png";
import coming_soon from "../../../assets/coming_soon.png";

import { motion } from "framer-motion";

import Footer from "../../sections/Footer";
import Navbar from "../../sections/Navbar";
import { useEffect } from "react";
import { analytics } from "@/utils/firebase";
import { logEvent } from "firebase/analytics";


const Portfolio = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

      if (analytics) {
        logEvent(analytics, "blogs_page", {
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

  return (
    <>
      <Navbar />
      <div className="px-[5%] relative overflow-x-clip mt-20 h-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src={bg}
            alt="bg"
            layout="fill"
            objectFit="cover"
            className="opacity-80 pointer-events-none"
          />
        </div>

        {isMobile ? (
          // Mobile View
          <div>
            {/* Heading for Mobile */}
            <div className="flex flex-col items-center justify-center pt-10 relative z-10">
              <h2 className="header-mob">Blog</h2>
              <p className="subhead-mob">Building Impactful Solutions</p>
            </div>

            <div className="relative flex items-center justify-center py-6">
              {/* Gradient Background */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)] "></div>

              <div className="flex items-center -ml-8">
                <Image src={text} alt="text" className="pointer-events-none" />
              </div>

              <div className="flex items-center -ml-20 -z-10">
                <Image
                  src={circleText}
                  alt="circle_text"
                  className="min-w-380px] pointer-events-none"
                />
              </div>
            </div>

            <div className="pb-20 flex items-center justify-center w-full">
              <Image
                src={coming_soon}
                alt="coming soon"
                className="-ml-10 pointer-events-none"
              />
            </div>
          </div>
        ) : (
          // Desktop View
          <div>
            {/* Heading for Desktop */}
            <div className="relative ">
              <div className="flex flex-col items-center justify-center pt-10 lg:pt-12 relative z-10">
                <h2 className="header">Blog</h2>
                <p className="subhead">Building Impactful Solutions</p>
              </div>

              <motion.div></motion.div>

              <div className="relative flex items-center justify-center ">
                {/* Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)]"></div>

                <div className="flex items-center lg:-ml-38 -ml-20">
                  <Image
                    src={text}
                    alt="text"
                    className="min-w-[750px] pointer-events-none"
                  />
                </div>

                <div className="flex items-center lg:-ml-72 -ml-44 -z-10">
                  <Image
                    src={circleText}
                    alt="circle_text"
                    className="min-w-380px] pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pb-20 md:flex items-center justify-center w-full  hidden">
        <Image
          src={coming_soon}
          alt="coming soon"
          className="-ml-10 lg:ml-30 pointer-events-none"
        />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
