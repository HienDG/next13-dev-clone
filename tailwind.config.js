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
      themes: ["light"],
   },
   plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
