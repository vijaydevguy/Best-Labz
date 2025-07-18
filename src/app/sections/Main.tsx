"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import center from "../../assets/center.webp";
import left from "../../assets/left.webp";
import right from "../../assets/right.webp";
import Image from "next/image";
import rightArrow from "../../assets/right arrow_svg.svg";
import Rocket from "../../assets/Rocket.png";
import { useMediaQuery } from "react-responsive";
import mainimage from "../../assets/mainpageimg.png";
import { Metadata } from "next";


//seo
export const metadata: Metadata ={
  title: "Home"
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showDeploy, setShowDeploy] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDeploy(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderWords = () => (
    <>
      <div className="text-black">Ideas.</div>
      <div className="text-black">Brainstorm.</div>
      <div className="text-black">Innovate.</div>
      <div className="text-black">Develop.</div>

      <AnimatePresence mode="wait">
        {showDeploy ? (
          <motion.div
            key="deploy"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex lg:gap-6 gap-4 text-black relative"
          >
            Deploy.
            <div className="relative bottom-4 left-11">
              <Image
                src={Rocket}
                alt="img"
                className={`h-12 w-auto relative top-5 right-11 ${
                  !isMobile && "lg:top-8 lg:h-16 md:top-9"
                } pointer-events-none`}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="test"
            className="relative flex items-center gap-4 text-black"
          >
            Test.
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              className="relative"
            >
              <motion.svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[rgb(9, 140, 48)] md:h-[64px] md:w-[64px] h-[48px] w-[48px]"
              >
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgb(9, 140, 48)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.path
                  d="M8 12L11 15L16 9"
                  stroke="rgb(9, 140, 48)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <div
      className="h-[100vh] relative overflow-x-clip overflow-y-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_gif2.gif')" }}
    >
      {isMobile ? (
        <div className="flex flex-col items-center justify-center text-center pt-32 px-[5%]">
          <div className="text-[42px] font-semibold font-[Jost] text-[#1C1C1C] leading-tight">
            <div className="flex flex-wrap gap-3">{renderWords()}</div>
          </div>

          <p className="text-[24px] text-gray-800 mt-4 font-[kayak] pb-5">
            Transform your business with innovative, cutting-edge software
            solutions
          </p>

          <div className="mt-6 flex gap-4">
            <button className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-md font-medium bg-white/20 transition-all duration-300 ease-in-out shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)] hover:bg-white active:bg-white">
              Chat now
              <Image
                src={rightArrow}
                alt="right"
                className="w-5 h-5 pointer-events-none"
              />
            </button>
          </div>

          <div className="relative w-[600px]">
            <Image
              src={mainimage}
              alt="image"
              className="relative -bottom-16 pointer-events-none"
            />
          </div>
        </div>
      ) : (
        <div className="flex mt-36 md:mt-24 flex-col items-center justify-center px-[5%]">
          <div className="flex flex-col items-center justify-center text-center md:pt-22 pt-8 w-full">
            <div className="lg:text-[72px] font-semibold font-[Jost] text-[#1C1C1C] leading-tight flex flex-wrap md:text-[52px] text-[42px]">
              <div className="flex flex-wrap lg:ml-32 lg:w-[1050px] md:ml-0 md:-mt-10 gap-3 relative">
                {renderWords()}
              </div>
            </div>
          </div>

          <p className="text-[32px] text-gray-800 mt-4 font-[prompt] lg:pb-0 md:pb-0 pb-5">
            Transform your business with innovative, <br /> cutting-edge
            software solutions
          </p>

          <div className="mt-6 flex gap-4">
            <button
              className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-md font-medium bg-white/20 transition-all duration-300 ease-in-out shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)] hover:bg-white active:bg-white"
              onClick={() =>
                (window.location.href = "https://wa.me/7708545098")
              }
            >
              Chat now
              <span className="transition-transform duration-300 lg:-rotate-[45deg] rotate-0 group-hover:rotate-0">
                <Image
                  src={rightArrow}
                  alt="right"
                  className="w-5 h-5 pointer-events-none"
                />
              </span>
            </button>
          </div>

          <div className="relative h-full flex justify-center items-center pb-7 lg:mt-4 md:mt-16 w-full md:pb-110">
            <Image
              src={left}
              alt="left"
              className="relative left-14 -bottom-4 pointer-events-none"
            />
            <Image src={center} alt="center" className="pointer-events-none" />
            <Image
              src={right}
              alt="right"
              className="relative right-14 -bottom-4 pointer-events-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

// "use client";

// import React from "react";
// import center from "../../assets/center.webp";
// import left from "../../assets/left.webp";
// import right from "../../assets/right.webp";
// import Image from "next/image";
// import rightArrow from "../../assets/right arrow_svg.svg";
// import Rocket from "../../assets/Rocket.png";
// import { useMediaQuery } from "react-responsive";
// import mainimage from "../../assets/mainpageimg.png";
// import right1 from "../../assets/right.svg"

// const Hero = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

//   return (
//     <>
//       <div
//         className="h-[100vh] relative overflow-x-clip overflow-y-hidden bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/bg_gif2.gif')",
//         }}
//       >
//         {/* Mobile Screen */}
//         {isMobile ? (
//           <div className="flex flex-col items-center justify-center text-center pt-32 px-[5%]">
//             {/* Heading */}
//             <div className="text-[42px] font-semibold font-[Jost] text-[#1C1C1C] leading-tight">
//               <div className="flex flex-wrap gap-3">
//                 <div className="text-black">Ideas.</div>
//                 <div className="text-black">Brainstorm.</div>
//                 <div className="text-black">Innovate.</div>
//                 <div className="text-black">Develop.</div>
//                 <div className="text-black">Deploy.</div>
//                 <div className="relative bottom-4 left-11">
//                   <Image
//                     src={Rocket}
//                     alt="img"
//                     className="h-12 w-auto relative top-5 right-11 pointer-events-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Subtext */}
//             <p className="text-[24px] text-gray-800 mt-4 font-[prompt] pb-5">
//               Transform your business with innovative, cutting-edge software
//               solutions
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex gap-4">
//               <button
//                 className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-md font-medium
//               bg-white/20 transition-all duration-300 ease-in-out
//               shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)]
//               hover:bg-white active:bg-white"
//               >
//                 Chat now
//                 <span>
//                   <Image
//                     src={rightArrow}
//                     alt="right"
//                     className="w-5 h-5 pointer-events-none"
//                   />
//                 </span>
//               </button>

//               {/* <button
//                 className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-sm font-medium
//               bg-white/20 transition-all duration-300 ease-in-out
//               shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)]
//               hover:bg-white active:bg-white"
//               >
//                 Getting started
//                 <span>
//                   <Image
//                     src={rightArrow}
//                     alt="right"
//                     className="w-5 h-5 pointer-events-none"
//                   />
//                 </span>
//               </button> */}
//             </div>

//             {/* Images for Mobile */}
//             {/* <div className="relative  w-[240px] flex justify-center items-center mt-6 ">
//               <Image
//                 src={left}
//                 alt="left"
//                 className="relative left-14 -bottom-4 pointer-events-none"
//               />
//               <Image src={center} alt="center" className="pointer-events-none" />
//               <Image
//                 src={right}
//                 alt="right"
//                 className="relative right-14 -bottom-4 pointer-events-none"
//               />
//             </div> */}
//             <div className="relative w-[600px] ">
//               <Image
//                 src={mainimage}
//                 alt="image"
//                 className="relative -bottom-16 pointer-events-none"
//               />
//             </div>
//           </div>
//         ) : (
//           // Desktop/Large Screen
//           <div className="flex mt-36 md:mt-24 flex-col items-center justify-center px-[5%]">
//             <div className="flex flex-col items-center justify-center text-center md:pt-22 pt-8 w-full">
//               {/* Heading for Desktop */}
//               <div className="lg:text-[72px] font-semibold font-[Jost] text-[#1C1C1C] leading-tight flex flex-wrap md:text-[52px] text-[42px]">
//                 <div className="flex flex-wrap lg:ml-32 lg:w-[1050px] md:ml-0 md:-mt-10 gap-3 relative">
//                   <div className="text-black">Ideas.</div>
//                   <div className="text-black">Brainstorm.</div>
//                   <div className="text-black">Innovate.</div>
//                   <div className="text-black">Develop.</div>
//                   <div className="text-black">Deploy.</div>
//                   <div className="relative bottom-4 left-11">
//                     <Image
//                       src={Rocket}
//                       alt="img"
//                       className="h-12 w-auto relative top-5 right-11 lg:top-8 lg:h-16 md:top-9 pointer-events-none"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Subtext */}
//             <p className="text-[32px] text-gray-800 mt-4 font-[prompt] lg:pb-0 md:pb-0 pb-5">
//               Transform your business with innovative, <br /> cutting-edge
//               software solutions
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex gap-4">
//               <button
//                 className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-md font-medium
//               bg-white/20 transition-all duration-300 ease-in-out
//               shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)]
//               hover:bg-white active:bg-white"
//               onClick={() =>
//                 window.location.href = "https://wa.me/7708545098"
//               }
//               >
//                 Chat now
//                 <span className="transition-transform duration-300 lg:-rotate-[45deg] rotate-0 group-hover:rotate-0">
//                   <Image
//                     src={rightArrow}
//                     alt="right"
//                     className="w-5 h-5 pointer-events-none"
//                   />
//                 </span>
//               </button>

//               {/* <button
//                 className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-black text-md font-medium
//               bg-white/20 transition-all duration-300 ease-in-out
//               shadow-[inset_0_0_4px_rgba(255,255,255,0.25),inset_3px_4px_4px_rgba(255,255,255,0.25)]
//               hover:bg-white active:bg-white"
//               >
//                 Getting started
//                 <span className="transition-transform duration-300 rotate-0 lg:-rotate-[45deg] group-hover:rotate-0">
//                   <Image
//                     src={rightArrow}
//                     alt="right"
//                     className="w-5 h-5 pointer-events-none"
//                   />
//                 </span>
//               </button> */}
//             </div>

//             {/* Images for Desktop */}
//             <div className="relative h-full flex justify-center items-center pb-7 lg:mt-4 md:mt-16 w-full md:pb-110">
//               <Image
//                 src={left}
//                 alt="left"
//                 className="relative left-14 -bottom-4 pointer-events-none"
//               />
//               <Image
//                 src={center}
//                 alt="center"
//                 className="pointer-events-none"
//               />
//               <Image
//                 src={right}
//                 alt="right"
//                 className="relative right-14 -bottom-4 pointer-events-none"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Hero;
