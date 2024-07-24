/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,  // 외부 모듈을 ESM으로 처리
  },
  reactStrictMode: true,
};

export default nextConfig;