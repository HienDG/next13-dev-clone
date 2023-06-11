/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com", "res.cloudinary.com"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/my-dlvyac0j9/**",
         },
      ],
   },
};

module.exports = nextConfig;
