import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unxua7apqj.ufs.sh",
        pathname: "/**", // tüm yolları kapsar
      },
      {
        protocol: "https",
        hostname: "utfs.io", // Burası önemli
        pathname: "/**",
      },
    ],
  },

  // Diğer config ayarlarını buraya ekleyebilirsin
};

export default nextConfig;
