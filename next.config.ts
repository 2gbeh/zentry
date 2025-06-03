// next.config.ts
import withPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/waitlist',
        permanent: false,
      },
    ]
  },
}

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDev,
})

// Don't annotate this with `NextConfig` — let TypeScript infer it
export default withPWAConfig(nextConfig)
