/** @type {import('next').NextConfig} */
const nextConfig = {
  // 필요한 설정 추가
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;