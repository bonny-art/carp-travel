// hooks/useResponsive.ts
import { useState, useEffect } from "react";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useResponsive(): ResponsiveState {
  const [responsive, setResponsive] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        setResponsive({
          isMobile: width < 768,
          isTablet: width >= 768 && width < 1440,
          isDesktop: width >= 1440,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return responsive;
}

export default useResponsive;
