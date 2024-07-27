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
        orange: {
          50: "#FF5757",
        },
        green: {
          10: "#010a05",
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
      resize: {
        none: "none",
      },
      boxShadow: {
        "slide-shadow": "0 0 100px 0 rgba(9, 20, 16, 0.5)",
      },
    },
  },
  safelist: [
    "bg-bg-img-1",
    "bg-bg-img-2",
    "bg-orange-50",
    "btn_white",
    "btn_dark_green_outline",
    "bg-services-01-xs",
    "bg-services-01-md",
    "bg-services-01-lg",
    "bg-services-02-xs",
    "bg-services-02-md",
    "bg-services-02-lg",
    "bg-services-03-xs",
    "bg-services-03-md",
    "bg-services-03-lg",
    "bg-services-04-xs",
    "bg-services-04-md",
    "bg-services-04-lg",
    "bg-services-05-xs",
    "bg-services-05-md",
    "bg-services-05-lg",
    "lg:mb-[15px]",
    "lg:mb-[63px]",
    "lg:mb-[111px]",
    "lg:mb-[183px]",
    "lg:mb-[231px]",
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

        ".bg-services-01-xs": {
          backgroundImage: 'url("/bg-services-01-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-01-md": {
          backgroundImage: 'url("/bg-services-01-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-01-lg": {
          backgroundImage: 'url("/bg-services-01-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        ".bg-services-02-xs": {
          backgroundImage: 'url("/bg-services-02-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-02-md": {
          backgroundImage: 'url("/bg-services-02-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-02-lg": {
          backgroundImage: 'url("/bg-services-02-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        ".bg-services-03-xs": {
          backgroundImage: 'url("/bg-services-03-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-03-md": {
          backgroundImage: 'url("/bg-services-03-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-03-lg": {
          backgroundImage: 'url("/bg-services-03-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        ".bg-services-04-xs": {
          backgroundImage: 'url("/bg-services-04-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-04-md": {
          backgroundImage: 'url("/bg-services-04-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-04-lg": {
          backgroundImage: 'url("/bg-services-04-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        ".bg-services-05-xs": {
          backgroundImage: 'url("/bg-services-05-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-05-md": {
          backgroundImage: 'url("/bg-services-05-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-services-05-lg": {
          backgroundImage: 'url("/bg-services-05-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        ".bg-career-xs": {
          backgroundImage: 'url("/bg-career-xs@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-career-md": {
          backgroundImage: 'url("/bg-career-md@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ".bg-career-lg": {
          backgroundImage: 'url("/bg-career-lg@1x.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },

        "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)":
          {
            ".bg-hero-xs": {
              backgroundImage: 'url("/bg-hero-xs@2x.jpg")',
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
            ".bg-about-md": {
              backgroundImage: 'url("/bg-about-md@2x.jpg")',
            },
            ".bg-about-lg": {
              backgroundImage: 'url("/bg-about-lg@2x.jpg")',
            },

            ".bg-services-01-xs": {
              backgroundImage: 'url("/bg-services-01-xs@2x.jpg")',
            },
            ".bg-services-01-md": {
              backgroundImage: 'url("/bg-services-01-md@2x.jpg")',
            },
            ".bg-services-01-lg": {
              backgroundImage: 'url("/bg-services-01-lg@2x.jpg")',
            },

            ".bg-services-02-xs": {
              backgroundImage: 'url("/bg-services-02-xs@2x.jpg")',
            },
            ".bg-services-02-md": {
              backgroundImage: 'url("/bg-services-02-md@2x.jpg")',
            },
            ".bg-services-02-lg": {
              backgroundImage: 'url("/bg-services-02-lg@2x.jpg")',
            },

            ".bg-services-03-xs": {
              backgroundImage: 'url("/bg-services-03-xs@2x.jpg")',
            },
            ".bg-services-03-md": {
              backgroundImage: 'url("/bg-services-03-md@2x.jpg")',
            },
            ".bg-services-03-lg": {
              backgroundImage: 'url("/bg-services-03-lg@2x.jpg")',
            },

            ".bg-services-04-xs": {
              backgroundImage: 'url("/bg-services-04-xs@2x.jpg")',
            },
            ".bg-services-04-md": {
              backgroundImage: 'url("/bg-services-04-md@2x.jpg")',
            },
            ".bg-services-04-lg": {
              backgroundImage: 'url("/bg-services-04-lg@2x.jpg")',
            },

            ".bg-services-05-xs": {
              backgroundImage: 'url("/bg-services-05-xs@2x.jpg")',
            },
            ".bg-services-05-md": {
              backgroundImage: 'url("/bg-services-05-md@2x.jpg")',
            },
            ".bg-services-05-lg": {
              backgroundImage: 'url("/bg-services-05-lg@2x.jpg")',
            },

            ".bg-career-xs": {
              backgroundImage: 'url("/bg-career-xs@2x.jpg")',
            },
            ".bg-career-md": {
              backgroundImage: 'url("/bg-career-md@2x.jpg")',
            },
            ".bg-career-lg": {
              backgroundImage: 'url("/bg-career-lg@2x.jpg")',
            },
          },
      });
    },
  ],
};
