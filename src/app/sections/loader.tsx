import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BentoAnimation from "../sections/BentoAnimation";
interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [percentage, setPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const controls = useAnimation();
  const containerControls = useAnimation();
  const progressControls = useAnimation();

  // const [showBento, setShowBento] = useState(true);
  // const [bentoAnimationComplete, setBentoAnimationComplete] = useState(false);

  // const handleBentoAnimationComplete = () => {
  //   setBentoAnimationComplete(true);
  // };

  // const handleBentoFadeOutComplete = () => {
  //   setShowBento(false);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoadingComplete(true);
          return prev;
        }
      });
    }, 26);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundPosition: ["100% 0%", "-100% 0%"],
    });
  }, [controls]);

  useEffect(() => {
    if (loadingComplete) {
      // Animate the height to 0 smoothly and move all child elements up
      containerControls
        .start({
          height: 0,
          y: "-100%",
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        })
        .then(() => {
          // Ensure the loader is completely removed before showing the main page
          if (onComplete) onComplete();
        });

      setTimeout(() => {
        if (onComplete) onComplete();
      }, 2000);
    }
  }, [loadingComplete, containerControls, onComplete]);

  // Animate the progress line based on the percentage
  useEffect(() => {
    progressControls.start({
      width: `${percentage}%`,
      transition: {
        duration: 0.5, // Smooth transition for the progress line
        ease: "linear",
      },
    });
  }, [percentage, progressControls]);

  return (
    <>
      <AnimatePresence>
        {!loadingComplete && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-[#000000] overflow-hidden"
            initial={{ height: "100vh" }}
            animate={containerControls}
            exit={{ height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originY: 1 }}
          >
            <div className="flex items-center justify-center h-full relative">
              {/* <div className="flex items-center gap-6">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-16 w-auto pointer-events-none"
                />
                <motion.h1
                  className="text-6xl font-extrabold text-transparent bg-clip-text relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(104, 102, 200), rgb(255, 255, 255))",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 100%",
                  }}
                  animate={controls}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Best Labz
                </motion.h1>
              </div> */}
              <motion.div
                key="bento"
                initial={{ y: ".2vh" }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                // onAnimationComplete={handleBentoFadeOutComplete}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* <BentoAnimation key={"loader"} onComplete={() => {handleBentoAnimationComplete}}/> */}
                <BentoAnimation />
              </motion.div>
              {/* Percentage Loader */}
              <div className="absolute bottom-20 md:bottom-8 right-8 text-white text-6xl font-bold">
                {percentage}%
              </div>

              {/* Progress Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white md:mb-0 mb-[15%]"
                initial={{ width: "0%" }}
                animate={progressControls}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;

// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import BentoAnimation from "../sections/BentoAnimation";

// interface LoaderProps {
//   onComplete?: () => void;
// }

// const MobileLoader = ({ onComplete }: LoaderProps) => {
//   const [percentage, setPercentage] = useState(0);
//   const [loadingComplete, setLoadingComplete] = useState(false);
//   const controls = useAnimation();
//   const containerControls = useAnimation();
//   const progressControls = useAnimation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev < 100) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           setLoadingComplete(true);
//           return prev;
//         }
//       });
//     }, 26);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     controls.start({
//       backgroundPosition: ["100% 0%", "-100% 0%"],
//     });
//   }, [controls]);

//   useEffect(() => {
//     if (loadingComplete) {
//       containerControls.start({
//         height: 0,
//         y: "-100%",
//         transition: {
//           duration: 1,
//           ease: "easeInOut",
//         },
//       }).then(() => {
//         if (onComplete) onComplete();
//       });

//       setTimeout(() => {
//         if (onComplete) onComplete();
//       }, 2000);
//     }
//   }, [loadingComplete, containerControls, onComplete]);

//   useEffect(() => {
//     progressControls.start({
//       width: `${percentage}%`,
//       transition: {
//         duration: 0.5,
//         ease: "linear",
//       },
//     });
//   }, [percentage, progressControls]);

//   return (
//     <AnimatePresence>
//       {!loadingComplete && (
//         <motion.div
//           className="fixed top-0 left-0 w-full bg-[#000000] overflow-hidden"
//           initial={{ height: "100vh" }}
//           animate={containerControls}
//           exit={{ height: 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           style={{ originY: 1 }}
//         >
//           <div className="flex items-center justify-center h-full relative">
//             <div className="absolute bottom-8 right-8 text-white text-4xl font-bold">
//               {percentage}%
//             </div>
//             <motion.div
//               className="absolute bottom-0 left-0 h-1 bg-white"
//               initial={{ width: "0%" }}
//               animate={progressControls}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// const DesktopLoader = ({ onComplete }: LoaderProps) => {
//   const [percentage, setPercentage] = useState(0);
//   const [loadingComplete, setLoadingComplete] = useState(false);
//   const controls = useAnimation();
//   const containerControls = useAnimation();
//   const progressControls = useAnimation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev < 100) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           setLoadingComplete(true);
//           return prev;
//         }
//       });
//     }, 26);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     controls.start({
//       backgroundPosition: ["100% 0%", "-100% 0%"],
//     });
//   }, [controls]);

//   useEffect(() => {
//     if (loadingComplete) {
//       containerControls.start({
//         height: 0,
//         y: "-100%",
//         transition: {
//           duration: 1,
//           ease: "easeInOut",
//         },
//       }).then(() => {
//         if (onComplete) onComplete();
//       });

//       setTimeout(() => {
//         if (onComplete) onComplete();
//       }, 2000);
//     }
//   }, [loadingComplete, containerControls, onComplete]);

//   useEffect(() => {
//     progressControls.start({
//       width: `${percentage}%`,
//       transition: {
//         duration: 0.5,
//         ease: "linear",
//       },
//     });
//   }, [percentage, progressControls]);

//   return (
//     <AnimatePresence>
//       {!loadingComplete && (
//         <motion.div
//           className="fixed top-0 left-0 w-full bg-[#000000] overflow-hidden"
//           initial={{ height: "100vh" }}
//           animate={containerControls}
//           exit={{ height: 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           style={{ originY: 1 }}
//         >
//           <div className="flex items-center justify-center h-full relative">
//             <motion.div
//               key="bento"
//               initial={{ y: ".2vh" }}
//               animate={{ y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//               }}
//             >
//               <BentoAnimation />
//             </motion.div>
//             <div className="absolute bottom-8 right-8 text-white text-6xl font-bold">
//               {percentage}%
//             </div>
//             <motion.div
//               className="absolute bottom-0 left-0 h-1 bg-white"
//               initial={{ width: "0%" }}
//               animate={progressControls}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// const Loader = ({ onComplete }: LoaderProps) => {
//   const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
//   const isMobile = /Mobi|Android|iPhone/i.test(userAgent || "");

//   return isMobile ? (
//     <MobileLoader onComplete={onComplete} />
//   ) : (
//     <DesktopLoader onComplete={onComplete} />
//   );
// };

// export default Loader;
