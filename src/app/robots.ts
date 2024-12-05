import type { MetadataRoute } from 'next'

const DEFAULT_SITEMAP_URL = 'https://acme.com/sitemap.xml';

export default function robots(): MetadataRoute.Robots {
    const DEFAULT_SITEMAP_URL = process.env.NEXT_PUBLIC_SITEMAP_URL || 'https://acme.com/sitemap.xml';
    const sitemapUrl = process.env.NEXT_PUBLIC_SITEMAP_URL || DEFAULT_SITEMAP_URL;

    const disallowedPaths = ['/private/', '/admin/']; 
    const allowedPaths = ['/']; 

    const rules = {
        userAgent: '*', 
        allow: allowedPaths.join(','), 
        disallow: disallowedPaths.join(','), 
    };

    return {
        rules: rules,
        sitemap: sitemapUrl,
    }
}
