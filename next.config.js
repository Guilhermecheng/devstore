/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'github.com'
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    experimental: {
        esmExternals: false,
    }
}

module.exports = nextConfig
