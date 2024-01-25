/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.vercel.store',
                port: '',
                pathname: '/_next/**',
            },
        ]
    }
};

module.exports = nextConfig;
