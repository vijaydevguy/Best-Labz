"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

// Import images with type declarations
import one from "../../assets/diclinic.webp";
import two from "../../assets/hefgrow.webp";
import logo from "../../assets/new_logo_svg.svg";
import four from "../../assets/saudi.webp";
import five from "../../assets/diclinic.webp";
import six from "../../assets/diclinic1.webp";
import seven from "../../assets/diclinic2.webp";

const BentoGrid: React.FC = () => {
  const controls = useAnimation();
  const [showText, setShowText] = useState<boolean>(false);
  const [typingEffect, setTypingEffect] = useState<string>("");
  // const [fullWidth, setFullWidth] = useState<boolean>(false);

  const typeText = useCallback((text: string, index: number, speed: number): void => {
  if (index < text.length) {
    setTypingEffect(text.substring(0, index + 1));
    setTimeout(() => typeText(text, index + 1, speed), speed);
  } else {
    controls.start({
      backgroundPosition: ["100% 0%", "-100% 0%"],
    });
  }
}, [controls]);

useEffect(() => {
  controls.start({
    backgroundPosition: ["100% 0%", "-100% 0%"],
  });

  const timer = setTimeout(() => {
    setShowText(true);
    typeText("Best Labz", 0, 100);
  }, 1400);

  return () => clearTimeout(timer);
}, [controls, typeText]); // ✅ Warning gone



  // useEffect(() => {
  //   controls.start({
  //     backgroundPosition: ["100% 0%", "-100% 0%"],
  //   });

  //   const timer = setTimeout(() => {
  //     setShowText(true);
  //     // setFullWidth(true);
  //     typeText("Best Labz", 0, 100);
  //   }, 1400);

  //   return () => clearTimeout(timer);
  // }, [controls]);

  // const typeText = (text: string, index: number, speed: number): void => {
  //   if (index < text.length) {
  //     setTypingEffect(text.substring(0, index + 1));
  //     setTimeout(() => typeText(text, index + 1, speed), speed);
  //   } else {
  //     controls.start({
  //       backgroundPosition: ["100% 0%", "-100% 0%"],
  //     });
  //   }
  // };

  return (
    <div className="flex items-center justify-center p-4 md:ml-0 md:mt-20 mt-40 z-10">
      <motion.div className="flex gap-4 max-w-[700px] md:h-[600px] min-w-[400px] h-[400px]">
        {/* First Column (60%) */}
        <div className="flex flex-col gap-4 w-[60%] h-full">
          {/* Top Image */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
            className="rounded-lg overflow-hidden flex-[4] min-h-0"
          >
            <Image
              src={one}
              alt="Decorative image 1"
              className="rounded-lg h-auto w-full"
              priority
              placeholder="blur"
            />
          </motion.div>

          {/* Two Smaller Images */}
          <div className="flex gap-4 flex-[6] min-h-0">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ x: -100, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
              className="rounded-lg overflow-hidden w-[60%]"
            >
              <Image
                src={two}
                alt="Decorative image 2"
                className="rounded-lg w-full h-full object-cover"
                priority
                placeholder="blur"
              />
            </motion.div>

            <div className="flex flex-col gap-4 w-[40%]">
              <motion.div className="rounded-lg relative flex-1 flex items-center justify-center overflow-visible">
                <div className="flex items-center justify-center w-full h-full relative">
                  {/* Logo Container */}
                  <motion.div
                    className="absolute"
                    initial={{ x: 0 }}
                    animate={showText ? { x: -180 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-[350px] h-[350px] lg:ml-64 ml-76 flex items-center justify-center relative">
                      <Image
                        src={logo}
                        alt="Company Logo"
                        width={150}
                        height={150}
                        className="w-full h-auto pointer-events-none"
                        priority
                      />
                    </div>
                  </motion.div>
                  
                  {/* Text Container */}
                  {showText && (
                    <motion.div
                      className="absolute"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 100 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.h1
                        className="text-6xl font-extrabold text-transparent bg-clip-text font-[Kayak sans-serif] whitespace-nowrap lg:-ml-48 -ml-32" 
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgb(104, 102, 200), rgb(255, 255, 255))",
                          backgroundSize: "200% 100%",
                        }}
                        animate={controls}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {typingEffect}
                      </motion.h1>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 1 }}
                animate={{ y: 100, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className="rounded-lg overflow-hidden flex-1"
              >
                <Image
                  src={four}
                  alt="Decorative image 4"
                  className="rounded-lg w-full h-full object-cover"
                  priority
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second Column (40%) */}
        <div className="flex flex-col gap-4 w-[40%] h-full">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="rounded-lg overflow-hidden flex-1 min-h-0"
          >
            <Image
              src={five}
              alt="Decorative image 5"
              className="rounded-lg w-full h-full object-cover"
              priority
              placeholder="blur"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ x: 100, opacity: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            className="rounded-lg overflow-hidden flex-1 min-h-0"
          >
            <Image
              src={six}
              alt="Decorative image 6"
              className="rounded-lg w-full h-full object-cover"
              priority
              placeholder="blur"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: 100, opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
            className="rounded-lg overflow-hidden flex-1 min-h-0"
          >
            <Image
              src={seven}
              alt="Decorative image 7"
              className="rounded-lg w-full h-full object-cover"
              priority
              placeholder="blur"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BentoGrid;


// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";

// import one from "../../assets/1.png";
// import two from "../../assets/2.png";
// import logo from "../../assets/logo_1.png";
// import four from "../../assets/4.png";
// import five from "../../assets/5.png";
// import six from "../../assets/6.png";
// import seven from "../../assets/7.png";

// const BentoGrid = () => {
//   const controls = useAnimation();
//   const [showText, setShowText] = useState(false);
//   const [typingEffect, setTypingEffect] = useState("");
//   const [fullWidth, setFullWidth] = useState(false); // State to control full width

//   useEffect(() => {
//     controls.start({
//       backgroundPosition: ["100% 0%", "-100% 0%"],
//     });

//     // Simulate the delay for all image animations to complete
//     setTimeout(() => {
//       setShowText(true);
//       setFullWidth(true); // Expand the parent div to full width
//       typeText("Best Labz", 0, 100); // Start typing effect
//     }, 1400); // Adjust this delay based on your animation durations
//   }, [controls]);

//   const typeText = (text: string, index: number, speed: number) => {
//     if (index < text.length) {
//       setTypingEffect(text.substring(0, index + 1));
//       setTimeout(() => typeText(text, index + 1, speed), speed);
//     } else {
//       // After typing effect, start the gradient animation
//       controls.start({
//         backgroundPosition: ["100% 0%", "-100% 0%"],
//       });
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center p-4 md:ml-0  md:mt-20  mt-40 z-10">
//         {/* Main Container (600px width and 400px height, responsive) */}
//         <motion.div className="flex gap-4 max-w-[700px] md:h-[600px] min-w-[400px] h-[400px]">
//           {/* First Column (60%) */}
//           <div className="flex flex-col gap-4 w-[60%] h-full">
//             {/* Top Image */}
//             <motion.div
//               initial={{ opacity: 1 }}
//               animate={{ y: -100, opacity: 0 }}
//               transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
//               className="rounded-lg overflow-hidden flex-[4] min-h-0"
//             >
//               <Image
//                 src={one}
//                 alt="img1"
//                 className="rounded-lg h-auto w-full"
//                 priority
//               />
//             </motion.div>

//             {/* Two Smaller Images */}
//             <div className="flex gap-4 flex-[6] min-h-0">
//               <motion.div
//                 initial={{ opacity: 1 }}
//                 animate={{ x: -100, opacity: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
//                 className="rounded-lg overflow-hidden w-[60%]"
//               >
//                 <Image
//                   src={two}
//                   alt="img2"
//                   className="rounded-lg w-full h-full"
//                   priority
//                 />
//               </motion.div>

//               <div className="flex flex-col gap-4 w-[40%]">
//                 <motion.div
//                   className={`rounded-lg relative flex-1 flex items-center justify-center transition-all duration-500 `}
//                 >
//                     <div
//                     className={`flex relative items-center gap-6 ${
//                       fullWidth ? "min-w-[400px]" : "w-auto"
//                     }`}
//                     >
//                     <Image
//                       src={logo}
//                       alt="logo"
//                       className={`h-16 w-auto pointer-events-none ${
//                       showText ? "ml-8 sm:ml-0" : ""
//                       }`}
//                     />
//                     {showText && (
//                       <>
//                       <motion.h1
//                         className="text-6xl font-extrabold text-transparent bg-clip-text relative whitespace-nowrap overflow-hidden"
//                         style={{
//                         backgroundImage:
//                           "linear-gradient(to right, rgb(104, 102, 200), rgb(255, 255, 255))",
//                         backgroundSize: "200% 100%",
//                         backgroundPosition: "0% 100%",
//                         }}
//                         animate={controls}
//                         transition={{
//                         duration: 1,
//                         repeat: Infinity,
//                         ease: "linear",
//                         }}
//                       >
//                         {typingEffect}
//                       </motion.h1>
//                       </>
//                     )}
//                     </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 1 }}
//                   animate={{ y: 100, opacity: 0 }}
//                   transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
//                   className="rounded-lg overflow-hidden flex-1"
//                 >
//                   <Image
//                     src={four}
//                     alt="img4"
//                     className="rounded-lg w-full h-auto"
//                     priority
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </div>

//           {/* Second Column (40%) */}
//           <div className="flex flex-col gap-4 w-[40%] h-full">
//             <motion.div
//               initial={{ opacity: 1 }}
//               animate={{ y: -100, opacity: 0 }}
//               transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
//               className="rounded-lg overflow-hidden flex-1 min-h-0"
//             >
//               <Image
//                 src={five}
//                 alt="img5"
//                 className="rounded-lg w-full h-auto"
//                 priority
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 1 }}
//               animate={{ x: 100, opacity: 0 }}
//               transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
//               className="rounded-lg overflow-hidden flex-1 min-h-0"
//             >
//               <Image
//                 src={six}
//                 alt="img6"
//                 className="rounded-lg w-full h-auto"
//                 priority
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 1 }}
//               animate={{ y: 100, opacity: 0 }}
//               transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
//               className="rounded-lg overflow-hidden flex-1 min-h-0"
//             >
//               <Image
//                 src={seven}
//                 alt="img7"
//                 className="rounded-lg w-full h-auto"
//                 priority
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default BentoGrid;
