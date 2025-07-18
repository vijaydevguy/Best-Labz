// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static site export
  images: {
    unoptimized: true, // Avoids issues with next/image
  },
};

module.exports = nextConfig;