import type { MetadataRoute } from 'next'
const BASE_URL = process.env.URL_WEB || 'https://acme.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL + '/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        }
    ]
}