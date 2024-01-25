/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'github.com'
        ]
    },
    eslint: {
        ignoreDuringBuidls: true
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
