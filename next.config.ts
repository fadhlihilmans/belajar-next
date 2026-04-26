import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    // remotePatterns:[
    //   {
    //     protocol:"https",
    //     hostname:"freepng.com",
    //     pathname:"/**"
    //   },
    //   {
    //     protocol:"https",
    //     hostname:"brandlogos.net",
    //     pathname:"/**"
    //   }
    // ]
    
    unoptimized: true,
  }
};

export default nextConfig;
