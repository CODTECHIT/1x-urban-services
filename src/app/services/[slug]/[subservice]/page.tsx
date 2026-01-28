import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getSubService } from '@/data/services';
import { ArrowLeft, CheckCircle2, Target, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string; subservice: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, subservice } = await params;
    const subServiceData = getSubService(slug, subservice);
    const service = getServiceBySlug(slug);

    if (!subServiceData || !service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${subServiceData.name} - ${service.name} | 1x Urban Services`,
        description: subServiceData.fullDescription.substring(0, 160),
    };
}

export default async function SubServiceDetailPage({ params }: Props) {
    const { slug: serviceSlug, subservice: subServiceId } = await params;

    const service = getServiceBySlug(serviceSlug);
    const subService = getSubService(serviceSlug, subServiceId);

    if (!service || !subService) {
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
        <div className="min-h-screen bg-white text-slate-700">
            <Navbar activePage="services" />
            <div className="pt-20"></div>

            {/* Breadcrumb */}
            <div className="bg-slate-50 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 text-sm font-bold flex-wrap">
                        <Link href="/" className="text-slate-400 hover:text-emerald-600 transition-colors">
                            Home
                        </Link>
                        <span className="text-slate-300">/</span>
                        <Link href="/services" className="text-slate-400 hover:text-emerald-600 transition-colors">
                            Services
                        </Link>
                        <span className="text-slate-300">/</span>
                        <Link href={`/services/${serviceSlug}`} className="text-slate-400 hover:text-emerald-600 transition-colors">
                            {service.name}
                        </Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-emerald-600">{subService.name}</span>
                    </div>
                </div>
            </div>

            {/* Service Header */}
            <section className="relative bg-emerald-950 text-white py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent)]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <Link
                        href={`/services/${serviceSlug}`}
                        className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-8 hover:gap-3 transition-all mx-auto md:mx-0"
                    >
                        <ArrowLeft size={20} /> Back to {service.name}
                    </Link>

                    <div className="max-w-4xl mx-auto md:mx-0">
                        <div className="inline-block px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
                            {service.name}
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                            {subService.name}
                        </h1>
                        <p className="text-xl sm:text-2xl text-emerald-100/70 leading-relaxed mb-8">
                            {subService.fullDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits & Process Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    {/* Hero Action Image for the Sub-service */}
                    <div className="mb-20">
                        {(() => {
                            const specificImageIds = [
                                'bathroom-cleaning', 'kitchen-cleaning', 'sofa-cleaning',
                                'termite-control', 'cockroach-ant-control', 'home-shifting',
                                'balcony-cleaning', 'window-cleaning',
                                'fridge-cleaning', 'floor-cleaning', 'carpet-cleaning',
                                'mattress-cleaning', 'water-tank-cleaning',
                                'bed-bug-control', 'packing-transportation', 'plumbing-services',
                                'exterior-painting', 'texture-painting', 'civil-works'
                            ];
                            const hasSpecificImage = specificImageIds.includes(subService.id);
                            const imagePath = hasSpecificImage
                                ? `/images/services/sub/${subService.id}.png`
                                : `/images/services/${service.slug}.png`;

                            return (
                                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/20">
                                    <Image
                                        src={imagePath}
                                        alt={subService.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white right-6">
                                        <div className="flex items-center gap-3 bg-emerald-600/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-white/20 mb-4 inline-flex">
                                            <CheckCircle2 size={14} className="md:w-4 md:h-4" /> Verified Quality
                                        </div>
                                        <h2 className="text-2xl md:text-5xl font-black">{subService.name}</h2>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Benefits */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Target className="text-emerald-600" size={24} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-700">Key Benefits</h2>
                            </div>
                            <div className="space-y-4">
                                {subService.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-100">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-emerald-500" size={20} />
                                        </div>
                                        <p className="text-slate-700 font-bold leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Zap className="text-emerald-600" size={24} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-700">Our Process</h2>
                            </div>
                            <div className="space-y-4">
                                {subService.process.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-100">
                                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-black text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-700 font-bold leading-relaxed">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose 1X Urban Services?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We are committed to delivering the highest quality service with professionalism and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Trained Professionals",
                                desc: "All our technicians are thoroughly trained and experienced in their field."
                            },
                            {
                                title: "Quality Guaranteed",
                                desc: "We use only premium materials and follow strict quality standards."
                            },
                            {
                                title: "Transparent Pricing",
                                desc: "No hidden charges. What you see is what you pay."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-all">
                                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Related Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">Other {service.name}</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {service.subServices
                            .filter(s => s.id !== subServiceId)
                            .slice(0, 4)
                            .map((relatedService) => (
                                <Link
                                    key={relatedService.id}
                                    href={`/services/${serviceSlug}/${relatedService.id}`}
                                    className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-lg"
                                >
                                    <h3 className="font-black mb-2 group-hover:text-emerald-600 transition-colors">
                                        {relatedService.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-bold mb-3">{relatedService.shortDesc}</p>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
