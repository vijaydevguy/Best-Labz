"use client";
import "./globals.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import About from "./sections/About";
import { Brands } from "./sections/Brands";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
// import Loader from "./sections/loader";
import Ourservices from "./sections/Ourservices";
import ClientLayout from "./clientLayout";
import { trackLocation } from "@/utils/trackLocation";
import { analytics } from "@/utils/firebase";
import { logEvent } from "firebase/analytics";

export default function Home() {
  useEffect(() => {
    trackLocation().then((res) => {
      if (analytics) {
        logEvent(analytics, "location_info", res);
      }
    });
  }, []);
  return (
    <>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence> */}

      {/* {!isLoading && ( */}
      <ClientLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Main />
          <About />
          <Brands />
          <Pricing />
          <Ourservices />
          <Footer />
        </motion.div>
      </ClientLayout>
      {/* )} */}
    </>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import About from "./sections/About";
// import { Brands } from "./sections/Brands";
// import Main from "./sections/Main";
// import Navbar from "./sections/Navbar";
// import Pricing from "./sections/Pricing";
// import Footer from "./sections/Footer";
// import Loader from "./sections/loader";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const handleLoaderComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {isLoading && <Loader key="loader" onComplete={handleLoaderComplete} />}
//       </AnimatePresence>

//       {!isLoading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Navbar />
//           <Main />
//           <About />
//           <Brands />
//           <Pricing />
//           <Footer />
//         </motion.div>
//       )}
//     </>
//   );
// }
