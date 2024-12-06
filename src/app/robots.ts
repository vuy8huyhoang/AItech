import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/','/admin'],
        },
        sitemap: process.env.SITEMAP_URL || 'https://acme.com/sitemap.xml',
    }
}