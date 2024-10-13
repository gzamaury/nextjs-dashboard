/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // Enabling PPR (Version 14) - https://nextjs.org/docs/canary/app/building-your-application/rendering/partial-prerendering#enabling-ppr-version-14
    // ppr: true,
    
    ppr: 'incremental',
  },
};

export default nextConfig;
