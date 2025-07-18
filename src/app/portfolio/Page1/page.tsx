"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import jagopos from "../../../assets/project3.webp";
import hefgrow from "../../../assets/project2.webp";
import oceanhub from "../../../assets/project1.webp";
import DiClinic from "../../../assets/Di_Clinic.webp";
import cureboon from "../../../assets/cureboonproject.webp";
import bg from "../../../assets/Portfolio_bg.png";

import circleText from "../../../assets/portfolio_circle_text.png";
import text from "../../../assets/Portfolio_text.png";

import { motion } from "framer-motion";
import Footer from "../../sections/Footer";
import Navbar from "../../sections/Navbar";
import { FaArrowRight } from "react-icons/fa6";


import PageAnalytics from "../../../../components/pageAnalytics/page";


const Portfolio = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const projects = [
    {
      title: "JagoPOS",
      description:
        "This is a SaaS-based application designed for both restaurants and retail businesses. It includes a powerful POS billing system with an integrated Kitchen Display System (KDS) to streamline order processing in the kitchen. The Token App provides real-time order status updates to customers, while the Web Order App enables online ordering. The Digital Menu App allows businesses to showcase their menu on any device, and the Media Playlist App supports Android TVs to enhance the in-store experience. All operations can be centrally managed through the Store Management App, giving owners full control from one place.",
      platform: "Mobile , Tablet, Web app and Android TV",
      image: jagopos,
    },
    {
      title: "Hefgro",
      description:
        "This is a SaaS-based application tailored for manufacturing companies to digitize and streamline their operations. It offers robust features such as inventory management, sales and purchase tracking, accounting, and automated report generation. Additionally, the platform includes integrated B2B commerce and e-commerce modules, enabling businesses to easily order products or raw materials online.",
      platform: "Web app and mobile app",
      image: hefgrow,
    },
    {
      title: "Cureboon",
      description:
        " Cureboon is a doctor-to-doctor teleconsultation platform designed to empower healthcare professionals, enhance patient outcomes, and increase doctors’ earning potential.We understand the challenges doctors face in delivering optimal care, which is why we’ve developed a unique communication system that enables seamless collaboration between primary care physicians and specialists.With real-time connectivity, doctors can easily exchange insights, seek second opinions, and co-manage cases—leading to more accurate diagnoses, better treatment plans, and improved patient satisfaction.",
      platform: "Web app and mobile app",
      image: cureboon,
    },
    {
      title: "DI Clinic",
      description:
        "This is a SaaS-based application specifically designed for small-scale clinics to digitize and securely manage patient data. From appointment scheduling to prescription history, the platform ensures all medical records are well-organized and easily accessible. By maintaining a complete digital history, it helps prevent disputes between doctors and patients, while enhancing overall clinic efficiency and care quality.",
      platform: "Web app and mobile app",
      image: DiClinic,
    },
    {
      title: "Ocean Hub",
      description:
        "This project is an online boat booking platform designed to eliminate broker commissions typically involved in offline bookings. Boat owners can register their vessels on our platform, and each listing is verified by Ocean Hub for authenticity. Users can conveniently browse and book boats online based on their preferences, ensuring a transparent, secure, and commission-free experience.",
      platform: "Web app and mobile app",
      image: oceanhub,
    },
  ];

  // useEffect(() => {
  //   const startTime = Date.now();

  //   const handleBeforeUnload = () => {
  //     const endTime = Date.now();
  //     const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

  //     if (analytics) {
  //       logEvent(analytics, "portfolio_page", {
  //         page_path: window.location.pathname,
  //         time_spent_seconds: timeSpentSeconds,
  //       });
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     handleBeforeUnload(); // for client-side route changes
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <>
      <PageAnalytics eventName="portfolio_page" />
      <Navbar />
      <div className="px-[5%] relative overflow-x-clip mt-20">
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
              <h2 className="header-mob">Our Portfolio</h2>
              <p className="subhead-mob">Explore the some of our finest work</p>
            </div>

            <div className="relative flex items-center justify-center py-6">
              {/* Gradient Background */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)] "></div>

              <div className="flex items-center -ml-9">
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

            {/* Projects for Mobile */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-between gap-6 py-10 relative z-10"
              >
                {/* Image */}
                <div className="w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Text */}
                <div className="w-full">
                  <h2 className="font-[urbanist] text-[24px] font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="font-[poppins] text-[16px] text-[#848484] mb-6">
                    {project.description}
                  </p>
                  <p className="text-[16px] mb-4">{project.platform}</p>
                  <div className="w-full flex flex-col sm:flex-row justify-end gap-4">
                    {/* Outline button without rotate animation */}
                    <button
                      className="text-[#6966CF] border-1 border-[#6966CF] px-6 py-3 w-full sm:w-[200px] rounded-full 
                      hover:bg-[#6966CF] hover:text-white hover:border-transparent
                      transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Contact us
                      <FaArrowRight className="text-[#6966CF] hover:text-white" />
                    </button>

                    {/* Primary button without rotate animation */}
                    <button
                      className="bg-[#6966CF] text-white px-6 py-3 w-full sm:w-[200px] rounded-full 
                      hover:bg-[#5D5AB5] transition-all duration-300 
                      flex items-center justify-center gap-2"
                      onClick={() => (window.location.href = "/comingsoon")}
                    >
                      View project
                      <FaArrowRight className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View
          <div>
            {/* Heading for Desktop */}
            <div className="relative">
              <div className="flex flex-col items-center justify-center pt-10 lg:pt-12 relative z-10">
                <h2 className="header ">Our Portfolio</h2>
                <p className="subhead">Explore the some of our finest work</p>
              </div>

              <motion.div></motion.div>
              <div className="relative flex items-center justify-center ">
                {/* Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)]"></div>

                <div className="flex items-center lg:-ml-42 -ml-20">
                  <Image
                    src={text}
                    alt="text"
                    className="min-w-[750px] pointer-events-none"
                  />
                </div>

                <div className="flex items-center lg:-ml-74 -ml-44 -z-10">
                  <Image
                    src={circleText}
                    alt="circle_text"
                    className="min-w-380px] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Projects for Desktop */}
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-full flex flex-col items-center justify-between lg:gap-12 ${
                  index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 py-10 relative z-10`}
              >
                {/* Image */}
                <div className="w-full md:w-[35%] lg:w-[750px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-[594px] h-auto pointer-events-none"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-full md:w-[62%]">
                  <h2 className="font-[urbanist] lg:text-[32px] text-[24px] font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="font-[poppins] text-16px lg:text-[20px] text-[#848484] mb-6">
                    {project.description}
                  </p>
                  <p className="text-[20px] mb-4">{project.platform}</p>
                  <div className="w-full flex justify-end items-center gap-6">
                    {/* Outline button with rotate animation */}
                    <div className="group">
                      <button
                        className="btn-secondary"
                        onClick={() =>
                          (window.location.href = "https://wa.me/7708545098")
                        }
                      >
                        Contact us
                        <FaArrowRight className="text-[#6966CF] group-hover:text-white transition-all duration-300  -rotate-[45deg] group-hover:rotate-0" />
                      </button>
                    </div>

                    {/* Primary button with rotate animation */}
                    <div className="group">
                      <button
                        className="btn-primary "
                        onClick={() => (window.location.href = "/comingsoon")}
                      >
                        View project
                        <FaArrowRight className="text-white transition-transform duration-300 -rotate-[45deg] group-hover:rotate-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
