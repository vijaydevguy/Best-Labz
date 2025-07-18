"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import desktop from "../../assets/monitor.svg";
import tab from "../../assets/tab.svg";
import mobile from "../../assets/mobile.svg";
import watch from "../../assets/watch.svg";

import one from "../../assets/1.webp";
import two from "../../assets/2.webp";
import logo from "../../assets/New Logo@2x.svg";
import four from "../../assets/4.webp";
import five from "../../assets/5.webp";
import six from "../../assets/6.webp";
import seven from "../../assets/7.webp";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const devices = [
    { src: desktop, alt: "desktop" },
    { src: tab, alt: "tab" },
    { src: mobile, alt: "mobile" },
    { src: watch, alt: "watch" },
  ];

  // Animation variants (same as original)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.5 },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeviceIndex((prevIndex) => (prevIndex + 1) % devices.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [devices.length]);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-6 pb-4 pt-12 px-[5%]">
        {/* Full Collage at top - scaled down for mobile */}
        <div className="w-full  origin-top">
          <div className="flex gap-2 h-full">
            {/* First Column (60% of collage) */}
            <div className="flex flex-col gap-2 w-[60%] h-full">
              {/* Top Image */}
              <div className="rounded-lg overflow-hidden flex-[4] min-h-0">
                <Image
                  src={one}
                  alt="img1"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </div>

              {/* Bottom Row */}
              <div className="flex gap-2 flex-[6] min-h-0">
                {/* Left Image */}
                <div className="rounded-lg overflow-hidden w-[60%]">
                  <Image
                    src={two}
                    alt="img2"
                    className="rounded-lg h-full w-full object-cover pointer-events-none"
                    priority
                  />
                </div>

                {/* Right Column*/}
                <div className="flex flex-col gap-2 w-[40%]">
                  {/* Logo Container */}
                  <div className="rounded-lg bg-gray-100/50 backdrop-blur-sm flex-1 flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="logo"
                      className="h-12 w-auto pointer-events-none"
                      priority
                    />
                  </div>

                  {/* Bottom Right Image */}
                  <div className="rounded-lg overflow-hidden flex-1">
                    <Image
                      src={four}
                      alt="img4"
                      className="rounded-lg h-full w-full object-cover pointer-events-none"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2 w-[40%] min-h-full">
              {/* 5th Image */}
              <div className="rounded-lg overflow-hidden flex-1">
                <Image
                  src={five}
                  alt="img5"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </div>

              {/* 6th Image */}
              <div className="rounded-lg overflow-hidden flex-1">
                <Image
                  src={six}
                  alt="img6"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </div>

              {/* 7th Image */}
              <div className="rounded-lg overflow-hidden flex-1">
                <Image
                  src={seven}
                  alt="img7"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - left aligned except heading */}
        <div className="w-full">
          {/* Centered heading */}
          <h2 className="text-3xl font-semibold font-[Jost]  mb-4">
            {` I'd like to add your`} <br />
            <span>{`portfolio here!`}</span>
          </h2>

          {/* Left-aligned text */}
          <div className="text-left">
            <p className="font-[urbanist] text-[#6966CF] font-bold text-xl mb-2">
              @ Best Labz,
            </p>

            <p className="font-[outfit] text-[#6D6D6D] font-medium text-base leading-relaxed">
              we build custom software solutions design to <br />
              <span className="font-[urbanist] text-[#6966CF] font-bold text-xl">
                Super charge your growth📈. <br />
              </span>
              We work closely with business to craft innovative, scalable and
              high performance software solution.
            </p>
          </div>
        </div>

        {/* Device Animation */}
        <div className="flex flex-col items-center pt-4">
          <h2 className="text-xl font-semibold">We can handle</h2>
          <div className="relative w-[100px] h-[100px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDeviceIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="absolute top-0 left-0"
              >
                <Image
                  src={devices[currentDeviceIndex].src}
                  alt={devices[currentDeviceIndex].alt}
                  width={100}
                  height={100}
                  className="pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version (unchanged from original)
  return (
    <>
      <div className="flex flex-col md:flex-row gap-24 md:gap-8 items-center justify-center md:pb-8 pb-24 md:pt-16 pt-32 px-[5%] overflow-x-clip overflow-y-clip">
        {/* Image Collage with radial gradient effect - 40% width */}
        <div className="w-full md:w-[40%] min-w-[400px] min-h-[400px] relative">
          {/* Radial gradient background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>

          {/* Collage grid */}
          <div className="flex gap-4  h-full">
            {/* First Column (60% of collage) */}
            <div className="flex flex-col gap-4 w-[60%] h-full">
              {/* Top Image - comes from top */}
              <motion.div
                className="rounded-lg overflow-hidden flex-[4] min-h-0"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src={one}
                  alt="img1"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </motion.div>

              {/* Bottom Row */}
              <div className="flex gap-4 flex-[6] min-h-0">
                {/* Left Image - comes from left */}
                <motion.div
                  className="rounded-lg overflow-hidden w-[60%]"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-20px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src={two}
                    alt="img2"
                    className="rounded-lg h-full w-full object-cover pointer-events-none"
                    priority
                  />
                </motion.div>

                {/* Right Column*/}
                <div className="flex flex-col gap-4 w-[40%]">
                  {/* Logo Container - fade in from center */}
                  <motion.div
                    className="rounded-lg bg-gray-100/50 backdrop-blur-sm flex-1 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={logo}
                      alt="logo"
                      className="h-16 w-auto pointer-events-none"
                      priority
                    />
                  </motion.div>

                  {/* Bottom Right Image - comes from bottom */}
                  <motion.div
                    className="rounded-lg overflow-hidden flex-1"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-10px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src={four}
                      alt="img4"
                      className="rounded-lg h-full w-full object-cover pointer-events-none"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4 w-[40%] min-h-full">
              {/* 5th Image - comes from top */}
              <motion.div
                className="rounded-lg overflow-hidden flex-1"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src={five}
                  alt="img5"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </motion.div>

              {/* 6th Image - comes from right */}
              <motion.div
                className="rounded-lg overflow-hidden flex-1"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src={six}
                  alt="img6"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </motion.div>

              {/* 7th Image - comes from bottom */}
              <motion.div
                className="rounded-lg overflow-hidden flex-1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-70px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src={seven}
                  alt="img7"
                  className="rounded-lg h-full w-full object-cover pointer-events-none"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[60%] max-w-[600px]">
          <motion.div
            className="font-[jost] text-[#1C1C1C]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-[32px] lg:text-[46px] font-[Jost] font-semibold leading-14"
              variants={itemVariants}
            >
              {`I'd like to add your`} <br />
              {`portfolio here!`}
            </motion.h2>

            <motion.p
              className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px] mt-2"
              variants={itemVariants}
            >
              @ Best Labz,
            </motion.p>

            <motion.p
              className="font-[outfit] text-[#6D6D6D] font-medium text-[20px] lg:text-[24px] leading-[42px]"
              variants={itemVariants}
            >
              we build custom software solutions design to <br />
              <span className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px]">
                Super charge your growth📈. <br />
              </span>
              We work closely with business to craft innovative, scalable and
              high performance software solution.
            </motion.p>
          </motion.div>

          {/* Device Animation */}
          <div className="flex flex-col items-center pt-6">
            <h2 className="text-[24px] font-semibold">We can handle</h2>
            <div className="relative w-[140px] h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDeviceIndex}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  className="absolute top-0 left-0"
                >
                  <Image
                    src={devices[currentDeviceIndex].src}
                    alt={devices[currentDeviceIndex].alt}
                    width={150}
                    height={150}
                    className="pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import desktop from "../../assets/monitor.svg";
// import tab from "../../assets/tab.svg";
// import mobile from "../../assets/mobile.svg";
// import watch from "../../assets/watch.svg";

// import one from "../../assets/1.png";
// import two from "../../assets/2.png";
// import logo from "../../assets/logo_1.png";
// import four from "../../assets/4.png";
// import five from "../../assets/5.png";
// import six from "../../assets/6.png";
// import seven from "../../assets/7.png";

// const About = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
//   const [inView, setInView] = useState(false);

//   const devices = [
//     { src: desktop, alt: "desktop" },
//     { src: tab, alt: "tab" },
//     { src: mobile, alt: "mobile" },
//     { src: watch, alt: "watch" },
//   ];

//   // Define animation variants
//   const variants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: "spring", bounce: 0.5 },
//     },
//   };

//   // Infinite loop to cycle through devices
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDeviceIndex((prevIndex) => (prevIndex + 1) % devices.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [devices.length]);

//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-12 items-center justify-center py-6 px-[5%] overflow-x-clip overflow-y-clip">
//         {/* Image Collage with radial gradient effect - 40% width */}
//         <div className="w-full md:w-[40%] min-w-[400px] min-h-[400px] relative">
//           {/* Radial gradient background */}
//           <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>

//           {/* Collage grid */}
//           <div className="flex gap-4 h-full">
//             {/* First Column (60% of collage) */}
//             <div className="flex flex-col gap-4 w-[60%] h-full">
//               {/* Top Image - comes from top */}
//               <motion.div
//                 className="rounded-lg overflow-hidden flex-[4] min-h-0"
//                 initial={{ opacity: 0, y: -100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, margin: "-100px" }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Image
//                   src={one}
//                   alt="img1"
//                   className="rounded-lg h-full w-full object-cover"
//                   priority
//                 />
//               </motion.div>

//               {/* Bottom Row */}
//               <div className="flex gap-4 flex-[6] min-h-0">
//                 {/* Left Image - comes from left */}
//                 <motion.div
//                   className="rounded-lg overflow-hidden w-[60%]"
//                   initial={{ opacity: 0, x: -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: false, margin: "-20px" }}
//                   transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Image
//                     src={two}
//                     alt="img2"
//                     className="rounded-lg h-full w-full object-cover"
//                     priority
//                   />
//                 </motion.div>

//                 {/* Right Column*/}
//                 <div className="flex flex-col gap-4 w-[40%]">
//                   {/* Logo Container - fade in from center */}
//                   <motion.div
//                     className="rounded-lg bg-gray-100/50 backdrop-blur-sm flex-1 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <Image
//                       src={logo}
//                       alt="logo"
//                       className="h-16 w-auto"
//                       priority
//                     />
//                   </motion.div>

//                   {/* Bottom Right Image - comes from bottom */}
//                   <motion.div
//                     className="rounded-lg overflow-hidden flex-1"
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, margin: "-10px" }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Image
//                       src={four}
//                       alt="img4"
//                       className="rounded-lg h-full w-full object-cover"
//                       priority
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>

//             {/* Second Column */}
//             <div className="flex flex-col gap-4 w-[40%] min-h-full">
//               {/* 5th Image - comes from top */}
//               <motion.div
//                 className="rounded-lg overflow-hidden flex-1"
//                 initial={{ opacity: 0, y: -100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, margin: "-100px" }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Image
//                   src={five}
//                   alt="img5"
//                   className="rounded-lg h-full w-full object-cover"
//                   priority
//                 />
//               </motion.div>

//               {/* 6th Image - comes from right */}
//               <motion.div
//                 className="rounded-lg overflow-hidden flex-1"
//                 initial={{ opacity: 0, x: 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: false, margin: "-40px" }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Image
//                   src={six}
//                   alt="img6"
//                   className="rounded-lg h-full w-full object-cover"
//                   priority
//                 />
//               </motion.div>

//               {/* 7th Image - comes from bottom */}
//               <motion.div
//                 className="rounded-lg overflow-hidden flex-1"
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, margin: "-70px" }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Image
//                   src={seven}
//                   alt="img7"
//                   className="rounded-lg h-full w-full object-cover"
//                   priority
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="w-full md:w-[60%] max-w-[600px]">
//           {/* <div className="font-[jost] text-[#1C1C1C]">
//             <h2 className="text-[32px] lg:text-[46px] font-semibold leading-14">
//               I'd like to add your <br />
//               <span>portfolio here!</span>
//             </h2>
//             <p className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px] mt-2">
//               @ Best Labz,
//             </p>
//             <p className="font-[outfit] text-[#6D6D6D] font-medium text-[20px] lg:text-[24px] leading-[42px]">
//               we build custom software solutions design to <br />
//               <span className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px]">
//                 Super charge your growth📈. <br />
//               </span>
//               We work closely with business to craft innovative, scalable and
//               high performance software solution.
//             </p>
//           </div> */}

//           <motion.div
//             className="font-[jost] text-[#1C1C1C]"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={containerVariants}
//           >
//             <motion.h2
//               className="text-[32px] lg:text-[46px] font-semibold leading-14"
//               variants={itemVariants}
//             >
//               I'd like to add your <br />
//               <span>portfolio here!</span>
//             </motion.h2>

//             <motion.p
//               className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px] mt-2"
//               variants={itemVariants}
//             >
//               @ Best Labz,
//             </motion.p>

//             <motion.p
//               className="font-[outfit] text-[#6D6D6D] font-medium text-[20px] lg:text-[24px] leading-[42px]"
//               variants={itemVariants}
//             >
//               we build custom software solutions design to <br />
//               <span className="font-[urbanist] text-[#6966CF] font-bold text-[24px] lg:text-[28px]">
//                 Super charge your growth📈. <br />
//               </span>
//               We work closely with business to craft innovative, scalable and
//               high performance software solution.
//             </motion.p>
//           </motion.div>

//           {/* Device Animation */}
//           <div className="flex flex-col items-center pt-6">
//             <h2 className="text-[24px] font-semibold">We can handle</h2>
//             <div className="relative w-[140px] h-[140px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentDeviceIndex}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                   variants={variants}
//                   className="absolute top-0 left-0"
//                 >
//                   <Image
//                     src={devices[currentDeviceIndex].src}
//                     alt={devices[currentDeviceIndex].alt}
//                     width={150}
//                     height={150}
//                     className="pointer-events-none"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
