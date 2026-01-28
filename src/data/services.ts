// Service data structure
export interface SubService {
    id: string;
    name: string;
    shortDesc: string;
    fullDescription: string;
    benefits: string[];
    process: string[];
    pricing?: string;
}

export interface MainService {
    id: string;
    name: string;
    slug: string;
    shortDesc: string;
    fullDescription: string;
    icon: string;
    image: string;
    subServices: SubService[];
}

export const servicesData: MainService[] = [
    {
        id: "home-cleaning",
        name: "Home Cleaning Services",
        slug: "home-cleaning",
        shortDesc: "Professional home cleaning solutions designed to keep your living spaces hygienic, fresh, and comfortable.",
        fullDescription: "At 1X Urban Services, we provide professional home cleaning solutions designed to keep your living spaces hygienic, fresh, and comfortable. Our trained cleaners use safe methods and quality equipment to deliver deep and effective cleaning for every corner of your home.",
        icon: "sparkles",
        image: "/images/services/home-cleaning.jpg",
        subServices: [
            {
                id: "bathroom-cleaning",
                name: "Bathroom Cleaning",
                shortDesc: "Deep cleaning of toilets, tiles, and fittings",
                fullDescription: "Deep cleaning of toilets, tiles, wash basins, fittings, and corners to remove stains, germs, and foul odors, ensuring complete hygiene.",
                benefits: [
                    "Removes stubborn stains and limescale",
                    "Eliminates germs and bacteria",
                    "Removes foul odors",
                    "Sanitizes all surfaces",
                    "Cleans hard-to-reach corners"
                ],
                process: [
                    "Initial inspection and assessment",
                    "Application of cleaning agents",
                    "Scrubbing tiles, grout, and fixtures",
                    "Deep cleaning of toilet and wash basin",
                    "Final sanitization and inspection"
                ],
                pricing: "Starting from ₹499"
            },
            {
                id: "balcony-cleaning",
                name: "Balcony Cleaning",
                shortDesc: "Complete balcony cleaning and maintenance",
                fullDescription: "Cleaning of balcony floors, railings, grills, and corners by removing dust, stains, bird droppings, and algae buildup.",
                benefits: [
                    "Removes dust and dirt accumulation",
                    "Cleans bird droppings safely",
                    "Removes algae and moss",
                    "Cleans railings and grills",
                    "Restores balcony appearance"
                ],
                process: [
                    "Dry sweeping and debris removal",
                    "Application of cleaning solution",
                    "Scrubbing floors and railings",
                    "Grill and corner cleaning",
                    "Final wash and drying"
                ],
                pricing: "Starting from ₹399"
            },
            {
                id: "window-cleaning",
                name: "Window Cleaning",
                shortDesc: "Streak-free window and glass cleaning",
                fullDescription: "Thorough cleaning of window glass, frames, and grills from inside and outside to provide a clear, streak-free finish.",
                benefits: [
                    "Crystal clear, streak-free glass",
                    "Cleans both inside and outside",
                    "Removes dust and grime",
                    "Cleans window frames and tracks",
                    "Improves natural light entry"
                ],
                process: [
                    "Dusting of frames and tracks",
                    "Application of glass cleaner",
                    "Wiping with microfiber cloth",
                    "Cleaning grills and frames",
                    "Final polish for streak-free finish"
                ],
                pricing: "Starting from ₹299 per window"
            },
            {
                id: "fridge-cleaning",
                name: "Fridge Cleaning",
                shortDesc: "Complete internal refrigerator cleaning",
                fullDescription: "Complete internal cleaning of refrigerator shelves, trays, and compartments to remove food residue, bacteria, and unpleasant smells.",
                benefits: [
                    "Removes food residue and stains",
                    "Eliminates bad odors",
                    "Kills bacteria and germs",
                    "Cleans all compartments",
                    "Improves food hygiene"
                ],
                process: [
                    "Emptying and inspection",
                    "Removal of shelves and trays",
                    "Deep cleaning with safe agents",
                    "Sanitization of all parts",
                    "Reassembly and final check"
                ],
                pricing: "Starting from ₹599"
            },
            {
                id: "kitchen-cleaning",
                name: "Kitchen Cleaning",
                shortDesc: "Deep kitchen cleaning and degreasing",
                fullDescription: "Deep cleaning of kitchen slabs, stove area, sink, tiles, and cabinets (external) to remove grease, oil stains, and germs.",
                benefits: [
                    "Removes stubborn grease and oil",
                    "Cleans stove and chimney area",
                    "Sanitizes countertops",
                    "Cleans tiles and backsplash",
                    "Hygienic cooking environment"
                ],
                process: [
                    "Assessment of cleaning areas",
                    "Application of degreasing agents",
                    "Scrubbing stove and counters",
                    "Tile and sink cleaning",
                    "Final sanitization"
                ],
                pricing: "Starting from ₹899"
            },
            {
                id: "floor-cleaning",
                name: "Floor Cleaning",
                shortDesc: "Professional floor cleaning and polishing",
                fullDescription: "Professional cleaning of tile, marble, granite, and other flooring types to remove dirt and restore shine without damage.",
                benefits: [
                    "Removes dirt and stains",
                    "Restores natural shine",
                    "Safe for all floor types",
                    "No damage to surface",
                    "Long-lasting results"
                ],
                process: [
                    "Floor type identification",
                    "Dry sweeping and mopping",
                    "Application of suitable cleaner",
                    "Machine scrubbing (if needed)",
                    "Final polish and protection"
                ],
                pricing: "Starting from ₹699"
            },
            {
                id: "sofa-cleaning",
                name: "Sofa Cleaning",
                shortDesc: "Deep sofa and upholstery cleaning",
                fullDescription: "Deep cleaning of fabric or leather sofas to remove dust, stains, allergens, and odors, improving comfort and durability.",
                benefits: [
                    "Removes deep-seated dust",
                    "Eliminates stains and odors",
                    "Kills dust mites and allergens",
                    "Extends sofa life",
                    "Restores fabric freshness"
                ],
                process: [
                    "Fabric type assessment",
                    "Vacuum cleaning",
                    "Stain treatment",
                    "Deep shampooing/steam cleaning",
                    "Drying and final inspection"
                ],
                pricing: "Starting from ₹999"
            },
            {
                id: "carpet-cleaning",
                name: "Carpet Cleaning",
                shortDesc: "Specialized carpet deep cleaning",
                fullDescription: "Specialized carpet cleaning to eliminate deep-seated dust, stains, and allergens, keeping carpets fresh and hygienic.",
                benefits: [
                    "Removes embedded dirt",
                    "Eliminates allergens",
                    "Removes tough stains",
                    "Restores carpet texture",
                    "Extends carpet life"
                ],
                process: [
                    "Pre-inspection and vacuuming",
                    "Stain pre-treatment",
                    "Hot water extraction/steam cleaning",
                    "Deodorization",
                    "Drying and grooming"
                ],
                pricing: "Starting from ₹799"
            },
            {
                id: "mattress-cleaning",
                name: "Mattress Cleaning",
                shortDesc: "Deep mattress sanitization",
                fullDescription: "Removal of dust mites, sweat stains, bacteria, and odors from mattresses for improved sleep hygiene.",
                benefits: [
                    "Kills dust mites",
                    "Removes sweat stains",
                    "Eliminates bacteria",
                    "Removes bad odors",
                    "Improves sleep quality"
                ],
                process: [
                    "UV sanitization",
                    "Vacuum cleaning",
                    "Stain treatment",
                    "Steam cleaning",
                    "Deodorization and drying"
                ],
                pricing: "Starting from ₹899"
            },
            {
                id: "water-tank-cleaning",
                name: "Jumbo Water Tank & Softener Cleaning",
                shortDesc: "Professional water tank cleaning",
                fullDescription: "Professional cleaning of overhead and underground water tanks and water softeners to remove sludge, algae, and contaminants.",
                benefits: [
                    "Removes sludge and sediment",
                    "Eliminates algae growth",
                    "Removes contaminants",
                    "Ensures clean water supply",
                    "Prevents health issues"
                ],
                process: [
                    "Tank draining",
                    "Manual scrubbing of walls",
                    "High-pressure jet cleaning",
                    "Sanitization with chlorine",
                    "Refilling and testing"
                ],
                pricing: "Starting from ₹1,999"
            }
        ]
    },
    {
        id: "pest-control",
        name: "Pest Control Services",
        slug: "pest-control",
        shortDesc: "Reliable and safe pest control services to protect your home from harmful insects and pests.",
        fullDescription: "We offer reliable and safe pest control services to protect your home from harmful insects and pests. Our treatments are effective, long-lasting, and carried out using approved methods to ensure family safety.",
        icon: "bug",
        image: "/images/services/pest-control.jpg",
        subServices: [
            {
                id: "cockroach-ant-control",
                name: "Cockroach & Ant Control",
                shortDesc: "Targeted pest treatment for cockroaches and ants",
                fullDescription: "Targeted pest treatment to eliminate cockroaches and ants from kitchens, bathrooms, and storage areas.",
                benefits: [
                    "Complete elimination of pests",
                    "Safe for family and pets",
                    "Long-lasting protection",
                    "Prevents re-infestation",
                    "Odorless treatment"
                ],
                process: [
                    "Inspection and identification",
                    "Gel baiting in affected areas",
                    "Spray treatment in corners",
                    "Crack and crevice treatment",
                    "Follow-up service"
                ],
                pricing: "Starting from ₹899"
            },
            {
                id: "general-pest-control",
                name: "General Pest Control",
                shortDesc: "Comprehensive pest control solution",
                fullDescription: "Control of common household pests such as mosquitoes, flies, spiders, and insects to maintain a healthy living environment.",
                benefits: [
                    "Controls multiple pests",
                    "Safe chemical usage",
                    "Preventive protection",
                    "Reduces disease risk",
                    "Quarterly maintenance available"
                ],
                process: [
                    "Complete home inspection",
                    "Identification of pest types",
                    "Targeted spray treatment",
                    "Fogging (if required)",
                    "Post-treatment guidance"
                ],
                pricing: "Starting from ₹1,299"
            },
            {
                id: "bed-bug-control",
                name: "Bed Bug Control",
                shortDesc: "Advanced bed bug elimination",
                fullDescription: "Advanced bed bug treatment to completely eliminate infestation from beds, furniture, and hidden corners.",
                benefits: [
                    "Complete bed bug elimination",
                    "Treats all life stages",
                    "Safe for mattresses",
                    "Prevents re-infestation",
                    "Guaranteed results"
                ],
                process: [
                    "Detailed inspection",
                    "Heat/chemical treatment",
                    "Mattress and furniture treatment",
                    "Crack and crevice application",
                    "Follow-up inspection"
                ],
                pricing: "Starting from ₹2,499"
            },
            {
                id: "termite-control",
                name: "Termite Control",
                shortDesc: "Pre and post-construction termite treatment",
                fullDescription: "Pre-construction and post-construction termite treatment to protect wooden furniture and building structures.",
                benefits: [
                    "Protects wooden structures",
                    "Long-term protection",
                    "Prevents structural damage",
                    "Safe for residents",
                    "Warranty available"
                ],
                process: [
                    "Termite inspection",
                    "Drilling and chemical injection",
                    "Wood treatment",
                    "Soil treatment (if needed)",
                    "Annual maintenance"
                ],
                pricing: "Starting from ₹3,999"
            }
        ]
    },
    {
        id: "packers-movers",
        name: "Packers & Movers",
        slug: "packers-movers",
        shortDesc: "Professional packing and moving solutions for safe and hassle-free relocation across India.",
        fullDescription: "1X Urban Services provides professional packing and moving solutions for safe and hassle-free relocation. We ensure careful handling, secure transportation, and timely delivery of your belongings.",
        icon: "truck",
        image: "/images/services/packers-movers.jpg",
        subServices: [
            {
                id: "home-shifting",
                name: "Home Shifting",
                shortDesc: "Complete household relocation service",
                fullDescription: "Complete household relocation service including packing, loading, transportation, unloading, and unpacking anywhere across India.",
                benefits: [
                    "Professional packing materials",
                    "Careful handling of items",
                    "Insured transportation",
                    "Timely delivery",
                    "Unpacking assistance"
                ],
                process: [
                    "Pre-move survey",
                    "Packing with quality materials",
                    "Loading onto vehicle",
                    "Safe transportation",
                    "Unloading and unpacking"
                ],
                pricing: "Customized quote based on distance and items"
            },
            {
                id: "office-relocation",
                name: "Office Relocation",
                shortDesc: "Professional office moving services",
                fullDescription: "Professional office relocation services for businesses, ensuring minimal downtime and safe transport of office equipment.",
                benefits: [
                    "Minimal business disruption",
                    "IT equipment handling",
                    "Furniture disassembly/assembly",
                    "Secure document handling",
                    "Weekend/after-hours service"
                ],
                process: [
                    "Office assessment",
                    "Planning and scheduling",
                    "Systematic packing",
                    "Secure transportation",
                    "Setup at new location"
                ],
                pricing: "Customized quote based on office size"
            },
            {
                id: "packing-transportation",
                name: "Safe Packing & Transportation",
                shortDesc: "Premium packing and transport services",
                fullDescription: "Premium packing services using high-quality materials and secure transportation with GPS tracking.",
                benefits: [
                    "Quality packing materials",
                    "Fragile item protection",
                    "GPS-tracked vehicles",
                    "Insurance coverage",
                    "Real-time updates"
                ],
                process: [
                    "Item categorization",
                    "Custom packing solutions",
                    "Labeling and inventory",
                    "Secure loading",
                    "Tracked transportation"
                ],
                pricing: "Based on items and distance"
            }
        ]
    },
    {
        id: "electrical-plumbing",
        name: "Electrical & Plumbing",
        slug: "electrical-plumbing",
        shortDesc: "Skilled technicians handle everyday electrical and plumbing needs with precision and reliability.",
        fullDescription: "Our skilled technicians handle everyday electrical and plumbing needs with precision and reliability, ensuring safety and long-lasting solutions.",
        icon: "wrench",
        image: "/images/services/electrical-plumbing.jpg",
        subServices: [
            {
                id: "electrical-services",
                name: "Electrical Services",
                shortDesc: "Complete electrical repair and installation",
                fullDescription: "Installation, repair, and maintenance of switches, lights, fans, wiring, and other electrical fittings.",
                benefits: [
                    "Licensed electricians",
                    "Safety compliance",
                    "Quality materials",
                    "Warranty on work",
                    "Emergency service available"
                ],
                process: [
                    "Problem diagnosis",
                    "Safety checks",
                    "Repair/installation work",
                    "Testing and verification",
                    "Cleanup and documentation"
                ],
                pricing: "Starting from ₹299"
            },
            {
                id: "plumbing-services",
                name: "Plumbing Services",
                shortDesc: "Expert plumbing repair and installation",
                fullDescription: "Repair and installation of taps, pipelines, fittings, leakage issues, and bathroom or kitchen plumbing work.",
                benefits: [
                    "Experienced plumbers",
                    "Leak detection",
                    "Quality fittings",
                    "Warranty on repairs",
                    "24/7 emergency service"
                ],
                process: [
                    "Issue inspection",
                    "Problem identification",
                    "Repair/replacement work",
                    "Pressure testing",
                    "Final cleanup"
                ],
                pricing: "Starting from ₹349"
            }
        ]
    },
    {
        id: "home-painting",
        name: "Home Painting Services",
        slug: "home-painting",
        shortDesc: "Professional home painting services that enhance the appearance and protection of your home.",
        fullDescription: "We provide professional home painting services that enhance the appearance and protection of your home using quality materials and skilled painters.",
        icon: "paintbrush",
        image: "/images/services/home-painting.jpg",
        subServices: [
            {
                id: "interior-painting",
                name: "Interior Painting",
                shortDesc: "Premium interior wall painting",
                fullDescription: "Smooth and long-lasting interior painting solutions for walls and ceilings with a clean and professional finish.",
                benefits: [
                    "Premium quality paints",
                    "Smooth finish",
                    "Color consultation",
                    "Furniture protection",
                    "Quick completion"
                ],
                process: [
                    "Surface preparation",
                    "Primer application",
                    "Multiple paint coats",
                    "Touch-ups and finishing",
                    "Cleanup and handover"
                ],
                pricing: "Starting from ₹12 per sq.ft"
            },
            {
                id: "exterior-painting",
                name: "Exterior Painting",
                shortDesc: "Weather-resistant exterior painting",
                fullDescription: "Weather-resistant exterior painting solutions that protect and beautify your home's outer walls.",
                benefits: [
                    "Weather-proof paints",
                    "UV protection",
                    "Long-lasting finish",
                    "Wall protection",
                    "Enhanced curb appeal"
                ],
                process: [
                    "Wall cleaning and repair",
                    "Waterproofing (if needed)",
                    "Primer application",
                    "Weather-resistant paint coats",
                    "Final inspection"
                ],
                pricing: "Starting from ₹15 per sq.ft"
            },
            {
                id: "texture-painting",
                name: "Texture Painting",
                shortDesc: "Decorative texture painting",
                fullDescription: "Decorative texture painting to add depth and character to your walls with various design options.",
                benefits: [
                    "Unique wall designs",
                    "Hides wall imperfections",
                    "Durable finish",
                    "Multiple texture options",
                    "Premium appearance"
                ],
                process: [
                    "Design consultation",
                    "Surface preparation",
                    "Base coat application",
                    "Texture creation",
                    "Sealing and finishing"
                ],
                pricing: "Starting from ₹25 per sq.ft"
            }
        ]
    },
    {
        id: "civil-interior",
        name: "Civil & Interior Design",
        slug: "civil-interior",
        shortDesc: "Complete civil and interior solutions, from planning to execution, tailored to your needs.",
        fullDescription: "We offer complete civil and interior solutions, from planning to execution, tailored to your requirements and budget.",
        icon: "layout",
        image: "/images/services/civil-interior.jpg",
        subServices: [
            {
                id: "civil-works",
                name: "Civil Works",
                shortDesc: "Construction and renovation services",
                fullDescription: "Construction, renovation, plastering, flooring, and structural repair services with professional execution.",
                benefits: [
                    "Experienced contractors",
                    "Quality materials",
                    "Timely completion",
                    "Budget-friendly options",
                    "Structural warranty"
                ],
                process: [
                    "Site assessment",
                    "Planning and estimation",
                    "Material procurement",
                    "Construction/renovation work",
                    "Quality inspection"
                ],
                pricing: "Customized quote based on project"
            },
            {
                id: "interior-design",
                name: "Interior Design & Execution",
                shortDesc: "Complete interior design solutions",
                fullDescription: "Customized interior design solutions for homes and offices, including layout planning, design, and execution.",
                benefits: [
                    "Professional designers",
                    "3D visualization",
                    "Custom furniture",
                    "Complete execution",
                    "Turnkey solutions"
                ],
                process: [
                    "Requirement discussion",
                    "Design concepts and 3D",
                    "Material selection",
                    "Execution and installation",
                    "Final styling and handover"
                ],
                pricing: "Starting from ₹1,200 per sq.ft"
            }
        ]
    }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): MainService | undefined {
    return servicesData.find(service => service.slug === slug);
}

// Helper function to get sub-service
export function getSubService(serviceSlug: string, subServiceId: string): SubService | undefined {
    const service = getServiceBySlug(serviceSlug);
    return service?.subServices.find(sub => sub.id === subServiceId);
}
