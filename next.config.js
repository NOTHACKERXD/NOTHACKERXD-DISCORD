/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/NOTHACKERXD",
        permanent: true,
      },
      {
        source: "/spotify",
        destination:
          "https://open.spotify.com/user/1aajlwkc639uc18a1xc2cip0z?si=93061bd3e03d4060",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
