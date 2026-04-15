import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iili.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.godrejproperties.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gplwebsitecdnblob.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freeimage.host',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'banner2.cleanpng.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'delf2iyv2crlj.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;