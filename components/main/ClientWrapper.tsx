"use client";

import { useEffect } from "react";

export const ClientWrapper = () => {
  useEffect(() => {
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        // console.log(`Prevented key: ${e.key}`);
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
};
