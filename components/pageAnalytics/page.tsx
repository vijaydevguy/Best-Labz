"use client";

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/utils/firebase"; // update path as needed

interface Props {
  eventName: string;
}

export default function PageAnalytics({ eventName }: Props) {
  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpentSeconds = Math.floor((endTime - startTime) / 1000);

      if (analytics) {
        logEvent(analytics, eventName, {
          page_path: window.location.pathname,
          time_spent_seconds: timeSpentSeconds,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      handleBeforeUnload();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [eventName]);

  return null; // No visual output
}
