import type { MetadataRoute } from 'next'

const SITE_URL = process.env.SITEMAP_URL || 'https://acme.com/sitemap.xml';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin'],
            }
        ],
        sitemap: SITE_URL,
    }
}
