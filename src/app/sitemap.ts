import { MetadataRoute } from 'next'
import { servicesData } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://1xurbanservices.com'

    // Base routes
    const routes = ['', '/services', '/privacy', '/terms'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Service categories
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Specific sub-services
    const subServiceRoutes = servicesData.flatMap((service) =>
        service.subServices.map((sub) => ({
            url: `${baseUrl}/services/${service.slug}/${sub.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    )

    return [...routes, ...serviceRoutes, ...subServiceRoutes]
}
