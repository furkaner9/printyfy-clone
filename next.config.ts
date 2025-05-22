import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unxua7apqj.ufs.sh",
        pathname: "/**", // tüm yolları kapsar
      },
    ],
  },

  // Diğer config ayarlarını buraya ekleyebilirsin
};

export default nextConfig;
