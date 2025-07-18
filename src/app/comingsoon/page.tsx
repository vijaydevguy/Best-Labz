"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import bg from "../../assets/Portfolio_bg.png";

import coming_soon from "../../assets/coming_soon.png";

import { motion } from "framer-motion";

import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

import { analytics } from "@/utils/firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
// import { Metadata } from "next";

// //seo
// export const metadata: Metadata = {
//   title: "About",
// };

const CommingSoon = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });


  useEffect(() => {
      const startTime = Date.now();
  
      const handleBeforeUnload = () => {
        const endTime = Date.now();
        const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);
  
        if (analytics) {
          logEvent(analytics, "commingsoon_page", {
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

            <div className="pb-20 flex items-center justify-center w-full mt-40">
              <Image src={coming_soon} alt="coming soon" className="-ml-10" />
            </div>
          </div>
        ) : (
          // Desktop View
          <div>
            {/* Heading for Desktop */}
            <div className="relative ">
              <motion.div></motion.div>

              <div className="relative flex items-center justify-center ">
                {/* Gradient Background */}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pb-20 md:flex items-center justify-center w-full  hidden lg:mt-15 lg:-ml-16">
        <Image
          src={coming_soon}
          alt="coming soon"
          className="-ml-10 lg:ml-30"
        />
      </div>
      <Footer />
    </>
  );
};

export default CommingSoon;
