import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug } from '@/data/services';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.name} | 1x Urban Services`,
        description: service.fullDescription.substring(0, 160),
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-emerald-600 font-bold hover:underline">
                        ← Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar activePage="services" />
            <div className="pt-20"></div>

            {/* Breadcrumb */}
            <div className="bg-slate-50 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 text-sm font-bold">
                        <Link href="/" className="text-slate-400 hover:text-emerald-600 transition-colors">
                            Home
                        </Link>
                        <span className="text-slate-300">/</span>
                        <Link href="/services" className="text-slate-400 hover:text-emerald-600 transition-colors">
                            Services
                        </Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-emerald-600">{service.name}</span>
                    </div>
                </div>
            </div>

            {/* Service Header */}
            <section className="relative bg-emerald-950 text-white py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent)]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <Reveal direction="down" delay={0.1}>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-8 hover:gap-3 transition-all mx-auto md:mx-0"
                        >
                            <ArrowLeft size={20} /> Back to All Services
                        </Link>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                            {service.name}
                        </h1>
                    </Reveal>
                    <Reveal direction="up" delay={0.3}>
                        <p className="text-lg sm:text-xl text-emerald-100/70 leading-relaxed max-w-3xl mx-auto md:mx-0">
                            {service.fullDescription}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Sub-Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Our Specialized Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Choose from our range of professional {service.name.toLowerCase()} solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.subServices.map((subService, i) => {
                            // Check if this sub-service has a specific image (we have generated a few key ones)
                            // Custom map for specific versioned images to bypass cache
                            const customImages: { [key: string]: string } = {
                                'kitchen-cleaning': '/images/services/sub/kitchen-cleaning-v2.jpg',
                                'cockroach-ant-control': '/images/services/sub/cockroach-ant-control-v2.png',
                                'termite-control': '/images/services/sub/termite-control-v2.jpg',
                                'office-relocation': '/images/services/sub/office-relocation.jpg',
                                'home-shifting': '/images/services/sub/home-shifting-v2.png',
                                'electrical-services': '/images/services/sub/electrical-services-v2.jpg',
                                'balcony-cleaning': '/images/services/sub/balcony-cleaning-v2.jpg',
                                'window-cleaning': '/images/services/sub/window-cleaning-v2.jpg',
                                'sofa-cleaning': '/images/services/sub/sofa-cleaning-v2.jpg',
                                'water-tank-cleaning': '/images/services/sub/water-tank-cleaning-v2.jpg'
                            };

                            const specificImageIds = [
                                'bathroom-cleaning', 'sofa-cleaning',
                                'balcony-cleaning', 'window-cleaning',
                                'fridge-cleaning', 'floor-cleaning', 'carpet-cleaning',
                                'mattress-cleaning', 'water-tank-cleaning',
                                'bed-bug-control', 'packing-transportation', 'plumbing-services',
                                'exterior-painting', 'texture-painting', 'civil-works',
                                'general-pest-control'
                            ];
                            const hasSpecificImage = specificImageIds.includes(subService.id);

                            // Priority: Custom Image -> Specific ID based Image -> Default Slug Image
                            const imagePath = customImages[subService.id] || (hasSpecificImage
                                ? `/images/services/sub/${subService.id}.png`
                                : `/images/services/${service.slug}.png`);

                            return (
                                <Reveal key={subService.id} direction="up" delay={i * 0.1} width="100%" className="h-full">
                                    <Link
                                        href={`/services/${service.slug}/${subService.id}`}
                                        className="group flex flex-col h-full cursor-pointer"
                                    >
                                        {/* Sub-Service Image */}
                                        <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] bg-slate-100 w-full">
                                            <Image
                                                src={imagePath}
                                                alt={subService.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                                            {/* Dynamic Icon Overlay */}
                                            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                                <CheckCircle2 className="text-emerald-400" size={20} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-1">
                                            {/* Sub-service Name */}
                                            <h3 className="text-xl font-black mb-3 group-hover:text-emerald-600 transition-colors">
                                                {subService.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-600 font-bold text-sm mb-4 leading-relaxed line-clamp-3">
                                                {subService.shortDesc}
                                            </p>

                                            {/* View Details Link */}
                                            <div className="mt-auto flex items-center gap-2 text-emerald-600 font-black text-xs group-hover:gap-4 transition-all uppercase tracking-widest">
                                                View Details <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
