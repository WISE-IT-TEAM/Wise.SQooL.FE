// /** @type {import('next').NextConfig} */
// const NextConfig = {
//   reactStrictMode: true,
// };

// export default NextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV !== 'development', // 개발 환경에서만 StrictMode 비활성화
};

export default nextConfig;