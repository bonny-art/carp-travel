import { PluginAPI } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-10": "rgba(255, 255, 255, 0.1)",
        orange: {
          50: "#FF5757",
        },
      },
      backgroundImage: {
        "bg-hero-sm": "url('/bg-hero-sm.jpg')",
        "bg-hero-md": "url('/bg-hero-md.jpg')",
        "bg-hero-lg": "url('/bg-hero-lg.jpg')",
      },
      backgroundPosition: {
        "top-center-left-20": "50% 0",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1440px",
        "sm+": "481px",
        "md+": "769px",
        "lg+": "1441px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  safelist: [
    "bg-bg-img-1",
    "bg-bg-img-2",
    "bg-orange-50",
    "btn_white",
    "btn_dark_green_outline",
  ],
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".bg-hero-xs": {
          backgroundImage: 'url("/bg-hero-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-hero-sm": {
          backgroundImage: 'url("/bg-hero-sm@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-hero-md": {
          backgroundImage: 'url("/bg-hero-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-hero-lg": {
          backgroundImage: 'url("/bg-hero-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-about-xs": {
          backgroundImage: 'url("/bg-about-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-about-sm": {
          backgroundImage: 'url("/bg-about-sm@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-about-md": {
          backgroundImage: 'url("/bg-about-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-about-lg": {
          backgroundImage: 'url("/bg-about-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)":
          {
            ".bg-hero-xs": {
              backgroundImage: 'url("/bg-hero-xs@2x.jpg")',
            },
            ".bg-hero-sm": {
              backgroundImage: 'url("/bg-hero-sm@2x.jpg")',
            },
            ".bg-hero-md": {
              backgroundImage: 'url("/bg-hero-md@2x.jpg")',
            },
            ".bg-hero-lg": {
              backgroundImage: 'url("/bg-hero-lg@2x.jpg")',
            },
            ".bg-about-xs": {
              backgroundImage: 'url("/bg-about-xs@2x.jpg")',
            },
            ".bg-about-sm": {
              backgroundImage: 'url("/bg-about-sm@2x.jpg")',
            },
            ".bg-about-md": {
              backgroundImage: 'url("/bg-about-md@2x.jpg")',
            },
            ".bg-about-lg": {
              backgroundImage: 'url("/bg-about-lg@2x.jpg")',
            },
          },
      });
    },
  ],
};
