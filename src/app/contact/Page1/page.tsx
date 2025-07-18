"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import bg from "../../../assets/Portfolio_bg.png";
import circleText from "../../../assets/contact_circle_text5.png";
import text from "../../../assets/contact_text5.png";
import Footer from "../../sections/Footer";
import Navbar from "../../sections/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import { analytics } from "@/utils/firebase";
import { logEvent } from "firebase/analytics";


const Page = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

      if (analytics) {
        logEvent(analytics, "contactus_page", {
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
              <h2 className="header-mob">Contact us</h2>
              <p className="subhead-mob">{`Reach Out & Let’s Build`}</p>
            </div>

            <div className="relative flex items-center justify-center py-6">
              {/* Gradient Background */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)] "></div>

              <div className="flex items-center -ml-7">
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

            <div className="py-10 flex flex-col items-center justify-center gap-4 w-full">
              <h2 className="text-center text-[18px] text-[#1C1C1C] px-4 font-[outfit]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <div className="group">
                <button
                  className=" px-8 py-4 w-full btn-primary"
                  onClick={() =>
                    (window.location.href = "https://wa.me/7708545098")
                  }
                >
                  Let’s Talk with us
                  <FaArrowRight className="arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Desktop View
          <div>
            {/* Heading for Desktop */}
            <div className="relative">
              <div className="flex flex-col items-center justify-center pt-10 lg:pt-12 relative z-10">
                <h2 className="header">Contact us</h2>
                <p className="subhead">{`Reach Out & Let’s Build`}</p>
              </div>

              <div className="relative flex items-center justify-center ">
                {/* Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(180,230,230,0.9),_transparent_30%)]"></div>

                <div className="flex items-center lg:-ml-24 -ml-10">
                  <Image
                    src={text}
                    alt="text"
                    className="min-w-[650px] pointer-events-none -ml-5"
                  />
                </div>

                <div className="flex items-center lg:-ml-72 -ml-38 -z-10">
                  <Image
                    src={circleText}
                    alt="circle_text"
                    className="min-w-380px] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="py-10 flex flex-col items-center justify-center gap-4 w-full">
              <h2 className="text-center lg:w-[950px] lg:text-[32px] text-[24px] text-[#1C1C1C] px-4 font-[outfit]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <div className="group">
                <button
                  className="btn-primary w-full px-8 py-4   
                flex items-center justify-center gap-2 
                "
                  onClick={() =>
                    (window.location.href = "https://wa.me/7708545098")
                  }
                >
                  Let’s Talk with us
                  <FaArrowRight className=" arrow" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Page;
