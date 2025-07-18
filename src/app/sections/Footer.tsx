import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto ">

        {/* top section */}
        {/* <div className="flex flex-col md:flex-row items-center border-b border-gray-700 md:gap-12 gap-6 sm:gap-2  pb-6 justify-between ">
     
          <div>
            <h2 className="text-lg font-semibold">{`Curious what's next?`}</h2>
            <p className="text-sm text-gray-400 mt-2">
              Join our newsletter for exclusive content, deals, and industry
              insights delivered straight to your inbox.
            </p>
          </div>

          
        
          <div className="flex gap-4 flex-col w-full max-w-[380px]">
            <input
              type="email"
              placeholder="Enter mail address here"
              className="p-3 bg-gray-900 text-white rounded-md border border-gray-700 w-full "
            />
            <button className="bg-[#6253e1] text-white px-6 py-2 rounded-md flex items-center gap-2 shadow-lg w-full md:w-auto">
              Subscribe our newsletter
              <span className="ml-auto fill-gray-600">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div> */}

        <div className="flex flex-wrap items-start justify-between gap-6 pt-6">
          <div>
            <h1 className="text-xl font-bold">BEST LABZ</h1>
            <p className="mt-2 font-semibold">Ideas. Brainstorm. Innovate.</p>
            <p className="font-semibold">Develop. Deploy.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 lg:space-y-1  space-y-4 text-gray-400 flex flex-col items-center">
              <Link href="/">Home</Link>
              <Link href="/about_us">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact_us">Contact us</Link>
            </ul>
          </div>
            <div className="flex gap-8 text-2xl mt-2 md:mt-0">
            <Link href="#"  rel="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" rel="Github">
              <FaGithub />
            </Link>
            <Link href="#"  rel="Twitter">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/riyaz-ahamed-18638317a"  rel="Linked-In">
              <FaLinkedin />
            </Link>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Best labz License © 2024 Transparent Contributors</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
