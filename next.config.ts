// src/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '',
                search: '',
            },
        ],
    },
    output: "standalone",
    poweredByHeader: false,
    webpack: (config, { isServer }) => {
        // These Node.js modules are needed only server-side
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
                crypto: false,
                child_process: false,
                async_hooks: false,
                util: false,
                os: false,
                http: false,
                https: false,
                zlib: false,
                stream: false,
                path: false,
            };
        }
        return config;
    },
    headers: async () => {
        return [
            {
                // Apply these headers to all routes
                source: "/:path*",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;