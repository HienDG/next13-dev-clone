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
               primary: "#641ae6",
               secondary: "#d926a9",
               accent: "#1fb2a6",
               neutral: "#2a323c",
               "base-100": "#fff",
               info: "#3abff8",
               success: "#36d399",
               warning: "#fbbd23",
               error: "#f87272",

               ".btn-dev:hover": {
                  "background-color": "#ebecfc",
                  color: "#3f49b8",
               },
            },
         },
      ],
   },
   plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
