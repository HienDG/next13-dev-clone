/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",

      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         zIndex: {
            1: 1,
            100: 100,
            200: 200,
            400: 400,
            500: 500,
            1000: 1000,
         },
      },
   },
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#570df8",
               secondary: "#f000b8",
               accent: "#1dcdbc",
               neutral: "#2b3440",
               "base-100": "#ffffff",
               info: "#3abff8",
               success: "#36d399",
               warning: "#fbbd23",
               error: "#ef4444",
            },
         },
      ],
   },
   plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
