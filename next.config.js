/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
   async redirects() {
    return [
      {
        source: "/",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
}