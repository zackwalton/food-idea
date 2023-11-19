/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**'
            },
            {
                protocol: 'https',
                hostname: 'places.googleapis.com',
                port: '',
                pathname: '/v1/places/**'
            }
        ]
    }
}

module.exports = nextConfig
