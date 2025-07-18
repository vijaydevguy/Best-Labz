import React from "react";
import { FaArrowRight} from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

interface Plan {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const Pricing = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });



  const longTermPlans: Plan[] = [
    {
      id: "1",
      title: "Get to Launch",
      description:
        "Founders who are starting out (MVP) and want to get an idea out the door.",
      features: [
        "1 Part time Product Manager",
        "1-2 full time full-stack Sr. Engineer",
        "1 Part time QA (or) UI/UX",
        "All platforms (i.e. Responsive web, Android, IOS)",
      ],
    },
    {
      id: "2",
      title: "Product-Market Fit",
      description:
        "You've achieved product market fit and are consistently making changes to reach growth.",
      features: [
        "1 Part time Product Manager",
        "2-3 full time full-stack Sr. Engineer",
        "1 Part time QA (or) UI/UX",
        "All platforms (i.e. Responsive web, Android, IOS)",
      ],
    },
    {
      id: "3",
      title: "Growth",
      description:
        "You're experiencing growth and must expand the tech team to elevate operations and scale further.",
      features: [
        "1 Part time Product Manager",
        "3-5 full time full-stack Sr. Engineer",
        "1 Full time QA (or) UI/UX",
        "All platforms (i.e. Responsive web, Android, IOS)",
      ],
    },
  ];

  const shortTermPlans: Plan[] = [
    {
      id: "4",
      title: "Basic",
      description:
        "Perfect for small projects or temporary needs with limited scope.",
      features: [
        "1 Full-stack Engineer",
        "1 Mobile Engineer",
        "QA (or) UI/UX Support",
        "Roll out to production in 50 - 60 days",
        "Mobile application with admin panel",
        "Weekly progress updates",
      ],
    },
    {
      id: "5",
      title: "Standard",
      description: "Comprehensive support for complex short-term projects.",
      features: [
        "2 Full-stack Engineer",
        "1 Mobile Engineer",
        "QA (or) UI/UX Support",
        "Roll out to production in 80 - 90 days",
        "Web, Mobile & admin panel",
        "Weekly progress updates",
      ],
    },
  ];

  const renderPlanCards = (plans: Plan[]) => {
    return plans.map((plan) => {
      const shouldLimitFeatures = isMobile || isMd;
      const displayFeatures = shouldLimitFeatures 
        ? plan.features
        : plan.features;
      

      return (
        <div
          key={plan.id}
          className={`md:sticky md:top-52 top-52 sticky bg-white rounded-2xl shadow-lg w-full min-h-[400px] p-6  z-10 ${
            !isMobile && !isMd
              ? `lg:h-[550px] md:h-[500px] hover:shadow-2xl ${
                  plans.length === 2
                    ? "lg:w-[400px] md:w-[350px]"
                    : "lg:min-w-[350px] md:w-[30%]"
                }`
              : ""
          }`}
        >
          <div>
            <div className="space-y-[4px]">
              <h2 className="text-[32px] font-semibold font-[urbanist] text-[#7D6DC2]">
                {plan.title}
              </h2>
              <p className={`text-gray-500 text-[16px] font-[outfit] mt-2  ${
                plans.length === 2
                  ? "lg:h-[40px]"
                  : "lg:h-[60px]"
              }`}>
                {plan.description}
              </p>
            </div>
            <div className="py-4">
              <ul className={`h-full  ${
                plans.length === 2
                  ? "lg:h-[280px]"
                  : "lg:h-[250px]"
              }`}>
                {displayFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-1 lg:py-3 gap-2 text-gray-700 text-[16px]"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              {/* {hasMoreFeatures && (
                <button
                  onClick={() => toggleExpand(plan.id)}
                  className="flex items-center text-[#6966CF] mt-2 text-sm font-medium"
                >
                  {isExpanded ? (
                    <>
                      Show Less <FaChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      Show More <FaChevronDown className="ml-1" />
                    </>
                  )}
                </button>
              )} */}
            </div>
          </div>
          <div className="flex justify-end items-end group">
            <button className="btn-primary" 
            onClick={() =>
              window.location.href = "https://wa.me/7708545098"
            }
            >
                {plans.length === 2 ? "Pricing" : "Pricing/M"}
              <FaArrowRight className="arrow text-white" />
            </button>
          </div>
        </div>
      );
    });
  };

  if (isMobile || isMd) {
    return (
      <div className="relative flex flex-col items-center justify-center h-full py-10 overflow-x-clip">
        <div className="flex flex-col items-center justify-center px-[5%] w-full">
          {/* Main Title - Sticky at top */}
          <div className="sticky top-[80px] z-30 w-full py-4">
            <h2 className="font-[jost] text-[32px] font-semibold  text-center z-20">
              Our Business Model
            </h2>
          </div>

          {/* Long Term Section */}
          <div className="w-full mb-12">
            {/* Long Term Title - Sticky below main title */}
            <div className="sticky top-[140px] bg-[#FBFFFF] z-20 w-full py-2">
              <p className="font-[outfit] text-[16px] text-[#6D6D6D] px-2 text-center">
                {` "Long-Term Project Package:`}
                <span className="font-semibold text-[#6966CF]">
                  {` Transparent, Reliable, and Accurate. "`}
                </span>
              </p>
            </div>

            {/* Long Term Cards */}
            <div className={`relative w-full flex flex-col justify-center items-center mt-2 gap-3 px-[5%] z-30 mb-12 `}>
              {renderPlanCards(longTermPlans)}
            </div>
          </div>

          {/* Short Term Section */}
          <div className="w-full mt-8">
            {/* Short Term Title - Sticky below long term section */}
            <div className="sticky top-[140px] bg-[#FBFFFF] z-20 w-full py-2">
              <p className="font-[outfit] md:text-[16px] text-[14px] text-[#6D6D6D] px-2 text-center">
                {`"Short-Term Project Package:`}
                <span className="font-semibold text-[#6966CF]">
                  {` Flexible and Scalable. "`}
                </span>
              </p>
            </div>

            {/* Short Term Cards */}
            <div className="relative w-full flex flex-col justify-center items-center mt-2 gap-3 px-[5%] z-30">
              {renderPlanCards(shortTermPlans)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop (lg and above)
  return (
    <div className="relative flex flex-col items-center justify-center h-full md:py-10 lg:pb-20 md:space-y-4 py-10 overflow-x-clip min-h-[100vh]">
      <div className=" sticky top-23 flex flex-col items-center justify-center px-[5%] w-full z-20">
        <h2 className="font-[jost] md:text-[48px] font-semibold md:pb-0 pb-4 text-[42px] z-20">
          Our Business Model
        </h2>
      </div>

      {/* Long Term Plans */}
      <div className="sticky top-40 w-full flex flex-col items-center">
        <p className="sticky font-[outfit] md:text-[24px] text-[16px] text-[#6D6D6D] px-2 pb-4 text-center">
          {`"Long-Term Project Package:`}
          <span className="font-semibold text-[#6966CF]">
            {` Transparent, Reliable, and Accurate. "`}
          </span>
        </p>

        <div className="relative lg:h-full w-full flex lg:flex-row lg:gap-12 justify-center items-center lg:px-[10%] md:w-full  md:px-[3%] md:gap-6 gap-3 px-[5%]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>
          {renderPlanCards(longTermPlans)}
        </div>
      </div>

      {/* Short Term Plans */}
      <div className="w-full flex flex-col items-center bg-[#fcffff] lg:mt-16 z-20">
        <p className="md:top-48 font-[outfit] md:text-[24px] text-[16px] text-[#6D6D6D] px-2 text-center pb-4">
          {`"Short-Term Project Package:`}
          <span className="font-semibold text-[#6966CF]">
            {` Flexible and Scalable. "`}
          </span>
        </p>

        <div className="relative w-full flex lg:flex-row lg:gap-12 justify-center items-center mt-2 lg:px-[10%] md:w-full  md:px-[3%] md:gap-6 gap-3 px-[5%]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>
          {renderPlanCards(shortTermPlans)}
        </div>
      </div>
    </div>
  );
};

export default Pricing;





//Working except md
// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { useMediaQuery } from "react-responsive";

// interface Plan {
//   id: string;
//   title: string;
//   description: string;
//   features: string[];
// }

// const Pricing = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

//   const longTermPlans: Plan[] = [
//     {
//       id: "1",
//       title: "Get to Launch",
//       description:
//         "Founders who are starting out (MVP) and want to get an idea out the door.",
//       features: [
//         "1 Part time Product Manager",
//         "1-2 full time full-stack Sr. Engineer",
//         "1 Part time QA (or) UI/UX",
//         "All platforms (i.e. Responsive web, Android, IOS)",
        
//       ],
//     },
//     {
//       id: "2",
//       title: "Product-Market Fit",
//       description:
//         "You've achieved product market fit and are consistently making changes to reach growth.",
//       features: [
//         "1 Part time Product Manager",
//         "2-3 full time full-stack Sr. Engineer",
//         "1 Part time QA (or) UI/UX",
//         "All platforms (i.e. Responsive web, Android, IOS)",
//       ],
//     },
//     {
//       id: "3",
//       title: "Growth",
//       description:
//         "You're experiencing growth and must expand the tech team to elevate operations and scale further.",
//       features: [
//         "1 Part time Product Manager",
//         "3-5 full time full-stack Sr. Engineer",
//         "1 Full time QA (or) UI/UX",
//         "All platforms (i.e. Responsive web, Android, IOS)",
//       ],
//     },
//   ];

//   const shortTermPlans: Plan[] = [
//     {
//       id: "1",
//       title: "Basic",
//       description:
//         "Perfect for small projects or temporary needs with limited scope.",
//       features: [
//         "1 Full-stack Engineer",
//         "1 Mobile Engineer",
//         "QA (or) UI/UX Support",
//         "Roll out to production in 50 - 60 days",
//         "Mobile application with admin panel",
//         "Weekly progress updates",
//       ],
//     },
//     {
//       id: "2",
//       title: "Standard",
//       description: "Comprehensive support for complex short-term projects.",
//       features: [
//         "2 Full-stack Engineer",
//         "1 Mobile Engineer",
//         "QA (or) UI/UX Support",
//         "Roll out to production in 80 - 90 days",
//         "Web, Mobile & admin panel",
//         "Weekly progress updates",
//       ],
//     },
//   ];

//   const renderPlanCards = (plans: Plan[]) => {
//     return plans.map((plan) => (
//       <div
//         key={plan.id}
//         className={`md:sticky md:top-72 top-60  sticky bg-white rounded-2xl shadow-lg w-full min-h-[400px] p-6 mb-6 relative z-10 ${
//           !isMobile
//             ? `lg:h-[550px] md:h-[500px] hover:shadow-2xl ${
//                 plans.length === 2
//                   ? "  md:w-[400px]"
//                   : "min-w-[350px]  md:w-[50%]"
//               }`
//             : ""
//         }`}
//       >
//         <div >
//           <div className="space-y-[4px]">
//             <h2 className="text-[32px] font-semibold font-[urbanist] text-[#7D6DC2]">
//               {plan.title}
//             </h2>
//             <p className="text-gray-500 text-[16px] font-[outfit] mt-2 h-[60px]">
//               {plan.description}
//             </p>
//           </div>
//           <div className="py-4 h-[300px]">
//             <ul
//               className={`${
//                 !isMobile ? "lg:space-y-4 md:space-y-4" : ""
//               } h-full min-w-[350px] `}
//             >
//               {plan.features.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start py-1 gap-2 text-gray-700 text-[16px]"
//                 >
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="flex justify-end items-end group ">
//           <button className="btn-primary">
//             Pricing
//             <FaArrowRight className="arrow text-white" />
//           </button>
//         </div>
//       </div>
//     ));
//   };

//   if (isMobile) {
//     return (
//       <div className="relative flex flex-col items-center justify-center h-full py-10 overflow-x-clip">
//         <div className="flex flex-col items-center justify-center px-[5%] w-full">
//           {/* Main Title - Sticky at top */}
//           <div className="sticky top-20  z-30 w-full py-4">
//             <h2 className="font-[jost] text-[32px] font-semibold pb-4 text-center z-20">
//               Our Business Model
//             </h2>
//           </div>

//           {/* Long Term Section */}
//           <div className="w-full">
//             {/* Long Term Title - Sticky below main title */}
//             <div className="sticky top-[180px] bg-[#FBFFFF] z-20 w-full py-2">
//               <p className="font-[outfit] text-[16px] text-[#6D6D6D] px-2 text-center">
//                 {` "Long-Term Project Package:`}
//                 <span className="font-semibold text-[#6966CF]">
//                   {` Transparent, Reliable, and Accurate. "`}
//                 </span>
//               </p>
//             </div>

//             {/* Long Term Cards */}
//             <div className="relative w-full flex flex-col justify-center items-center mt-2 gap-3 px-[5%]">
//               {renderPlanCards(longTermPlans)}
//             </div>
//           </div>

//           {/* Short Term Section */}
//           <div className="w-full mt-8">
//             {/* Short Term Title - Sticky below long term section */}
//             <div className="sticky top-[180px] bg-[#FBFFFF] z-20 w-full py-2">
//               <p className="font-[outfit] text-[16px] text-[#6D6D6D] px-2 text-center">
//                 {`"Short-Term Project Package:`}
//                 <span className="font-semibold text-[#6966CF]">
//                   {` Flexible and Scalable. "`}
//                 </span>
//               </p>
//             </div>

//             {/* Short Term Cards */}
//             <div className="relative w-full flex flex-col justify-center items-center mt-2 gap-3 px-[5%]">
//               {renderPlanCards(shortTermPlans)}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Desktop
//   return (
//     <div className="relative flex flex-col items-center justify-center h-full md:py-10 lg:pb-20 md:space-y-4 py-10 overflow-x-clip min-h-[100vh]">
//       <div className="relative sticky top-23 flex flex-col items-center justify-center px-[5%] w-full z-20">
//         <h2 className="font-[jost] md:text-[48px] font-semibold md:pb-0 pb-4 text-[42px]  z-20">
//           Our Business Model
//         </h2>
//       </div>

//       {/* Long Term Plans */}
//       <div className="sticky top-40 w-full flex flex-col items-center">
//         <p className="sticky  font-[outfit] md:text-[24px] text-[16px] text-[#6D6D6D] px-2 pb-4 text-center">
//           {`"Long-Term Project Package:`}
//           <span className="font-semibold text-[#6966CF]">
//             {` Transparent, Reliable, and Accurate. "`}
//           </span>
//         </p>

//         <div className="relative lg:h-full  w-full flex  lg:flex-row lg:gap-12 justify-center items-center lg:px-[10%] md:w-full w-full md:px-[3%] md:gap-6 gap-3 px-[5%] ">
//           <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>
//           {renderPlanCards(longTermPlans)}
//         </div>
//       </div>

//       {/* Short Term Plans */}
//       <div className="w-full flex flex-col items-center bg-[#fcffff] z-20">
//         {/* md:sticky */}
//         <p className=" md:top-48 font-[outfit] md:text-[24px] text-[16px] text-[#6D6D6D] px-2 text-center pb-4">
//           {`"Short-Term Project Package:`}
//           <span className="font-semibold text-[#6966CF]">
//             {` Flexible and Scalable. "`}
//           </span>
//         </p>

//         <div className="relative w-full flex  lg:flex-row lg:gap-12 justify-center items-center mt-2 lg:px-[10%] md:w-full w-full md:px-[3%] md:gap-6 gap-3 px-[5%]">
//           <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>
//           {renderPlanCards(shortTermPlans)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;