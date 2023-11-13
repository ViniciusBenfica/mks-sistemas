/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
  compiler: {
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
    },
  },
};

module.exports = nextConfig;
