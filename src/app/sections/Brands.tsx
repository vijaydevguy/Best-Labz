"use client";
import React from "react";
import Technotackle from "../../assets/technotackle.png";
import Hefgro from "../../assets/hefgrow.png";
import Positivity from "../../assets/dseven.png";
import DiClinic from "../../assets/diclinic.png";
import Image from "next/image";

export const Brands = () => {
  const companies = [
    { name: "Techno tackle", logo: Technotackle },
    { name: "Hefgro", logo: Hefgro },
    { name: "POSitivity", logo: Positivity },
    { name: "DI CLINIC", logo: DiClinic },
  ];

  // Duplicate the companies array to create seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="flex flex-col lg:pb-20 md:pb-8 px-[5%] w-full items-center justify-center gap-5 py-12 overflow-x-clip relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>

      {/* Header */}
      <div className="flex flex-row items-center justify-center w-full lg:px-[15%] md:px-[5%]">
        <hr className="flex-grow border-t border-[#686868] block" />
        <h2 className="md:px-[10%] px-[5%] whitespace-nowrap font-[outfit] text-[#6D6D6D] font-medium md:text-[24px] text-[16px]">
          Adopted by renowned enterprises such as
        </h2>
        <hr className="flex-grow border-t border-[#686868] block" />
      </div>

      {/* Brands Container - with your original masking effect */}
      <div className="relative w-full max-w-[90%] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_10%,black_30%,black_70%,transparent_90%)]">
        {/* Brands Scroller */}
        <div className="flex items-center justify-center w-max animate-infinite-scroll mt-4">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="mx-8 flex-shrink-0 lg:grayscale  grayscale-0 hover:grayscale-0"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="w-[250px] min-w-[180px] h-auto pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};





// import React from "react";
// import Technotackle from "../../assets/technotackle.png";
// import Hefgro from "../../assets/hefgrow.png";
// import Positivity from "../../assets/dseven.png";
// import DiClinic from "../../assets/diclinic.png";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export const Brands = () => {
//   const companies = [
//     { name: "Techno tackle", logo: Technotackle },
//     { name: "Hefgro", logo: Hefgro },
//     { name: "POSitivity", logo: Positivity },
//     {
//       name: "DI CLINIC",
//       logo: DiClinic,
//       tagline: "Now Your Clinic in Documentation",
//     },
//   ];

//   return (
//     <div className="flex flex-col lg:pb-20 md:pb-8 px-[5%] w-full items-center justify-center gap-5 pb-10 overflow-x-clip relative">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>

//       {/* Header */}
//       <div className="flex flex-row items-center justify-center w-full lg:px-[15%] px-[5%]">
//         <hr className="flex-grow border-t border-[#686868]" />
//         <h2 className="px-[10%] whitespace-nowrap font-[outfit] text-[#6D6D6D] font-medium md:text-[28px] text-[24px]">
//           Adopted by renowned enterprises such as
//         </h2>
//         <hr className="flex-grow border-t border-[#686868]" />
//       </div>

//       {/* Brands */}
//       <div className="flex flex-row items-center justify-center min-w-full max-w-[90%] gap-8 overflow-x-hidden [mask-image:linear-gradient(to_right,transparent_10%,black_30%,black_70%,transparent_90%)]">
//         {companies.map((company) => (
//           <motion.div
//             key={company.name}
//             animate={{
//               translateX: "-50%",
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "linear",
//               repeatType: "loop",
//             }}
//             className="flex items-center justify-center"
//           >
//             <Image
//               src={company.logo}
//               alt={company.name}
//               className="w-[250px] min-w-[180px] h-auto pointer-events-none"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };
