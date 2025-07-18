// hooks/useSectionTimer.ts
"use client";

import { useEffect, useRef } from "react";

import { logEvent } from "firebase/analytics";
import { analytics } from "@/utils/firebase";

export const useSectionTimer = (sectionName: string) => {
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    return () => {
      const duration = Date.now() - startTimeRef.current;
      if (analytics) {
        logEvent(analytics, "section_view", {
          section: sectionName,
          duration: duration / 1000, // in seconds
        });
      }
    };
  }, []);
};
