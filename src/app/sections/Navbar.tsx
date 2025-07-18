"use client";
import logo from "../../assets/new_logo_svg.svg";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  onClick,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) => (
  <li className="relative group">
    <Link
      href={href}
      onClick={onClick}
      className={`relative inline-block py-2 ${
        isActive ? "text-[#6866c8] font-semibold tracking-wider" : "text-black"
      } hover:text-[#6866c8] hover:font-semibold hover:tracking-wider transition-colors duration-300`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-[rgb(104,102,200)] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  </li>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMediumOrSmaller = useMediaQuery({ maxWidth: 1023 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{
          width: isMediumOrSmaller ? "80%" : "75%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "999px",
          border: "1px solid rgba(255, 255, 255, 1)",
          top: "24px",
        }}
        animate={{
          width: scrolled ? "100%" : isMediumOrSmaller ? "90%" : "80%",
          backgroundColor: scrolled ? "transparent" : "rgba(255, 255, 255, .2)",
          border: scrolled
            ? "0px solid transparent"
            : "1px solid rgb(255, 255, 255)",
          borderBottom: scrolled ? "2px solid rgba(255, 255, 255, 1)" : "none",
          borderRadius: scrolled ? "0px" : "999px",
          top: scrolled ? "0px" : "24px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-1/2 transform -translate-x-1/2 px-10 md:py-6 py-4 flex items-center justify-between 
                shadow-lg backdrop-blur-md transition-all duration-400 ease-in-out z-50 w-full"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            className="w-16 lg:min-w-[230px] md:min-w-[170px] min-w-[150px] h-auto md:pr-8 pointer-events-none"
            priority
          />
        </div>

        {/* Hamburger Menu */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </button>

        {/* Navigation Links */}
        <ul className="hidden lg:flex flex-nowrap gap-6 text-lg font-medium text-gray-800 md:gap-4">
          <NavLink href="/" isActive={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/portfolio" isActive={pathname === "/portfolio"}>
            Portfolio
          </NavLink>
          <NavLink href="/blog" isActive={pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink href="/contact" isActive={pathname === "/contact"}>
            Contact
          </NavLink>
        </ul>
      </motion.nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Responsive Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[60%] h-full bg-white shadow-md p-6 flex flex-col space-y-8 lg:hidden z-50"
          >
            <button onClick={closeMenu} className="self-end mb-4">
              <X size={32} />
            </button>
            <ul className="space-y-8 text-lg">
              <NavLink href="/" onClick={closeMenu} isActive={pathname === "/"}>
                Home
              </NavLink>
              <NavLink
                href="/about"
                onClick={closeMenu}
                isActive={pathname === "/about"}
              >
                About us
              </NavLink>
              <NavLink
                href="/portfolio"
                onClick={closeMenu}
                isActive={pathname === "/portfolio"}
              >
                Portfolio
              </NavLink>
              <NavLink
                href="/blog"
                onClick={closeMenu}
                isActive={pathname === "/blog"}
              >
                Blog
              </NavLink>
              <NavLink
                href="/contact"
                onClick={closeMenu}
                isActive={pathname === "/contact"}
              >
                Contact 
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
