// app/home/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./sections/loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsLoading(true);
      sessionStorage.setItem("hasVisited", "true");

      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000); // Show loader for 2s

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Loader key="loader" /> : children}
    </AnimatePresence>
  );
}
