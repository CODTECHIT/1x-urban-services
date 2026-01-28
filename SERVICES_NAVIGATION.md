# 1X Urban Services - Service Navigation Structure

## Overview
This website has a **3-level service navigation system**:

1. **Main Services Page** (`/services`)
2. **Service Detail Pages** (`/services/[slug]`)
3. **Sub-Service Detail Pages** (`/services/[slug]/[subservice]`)

## Navigation Flow

### Level 1: Main Services Page
**URL:** `/services`

Displays all 6 main service categories:
- Home Cleaning Services
- Pest Control Services
- Packers & Movers
- Electrical & Plumbing
- Home Painting Services
- Civil & Interior Design

Each service card is clickable and navigates to the service detail page.

### Level 2: Service Detail Page
**URL Pattern:** `/services/[slug]`

Examples:
- `/services/home-cleaning`
- `/services/pest-control`
- `/services/packers-movers`

Shows:
- Service description
- All sub-services for that main service
- Pricing information
- Call-to-action buttons

Each sub-service card is clickable and navigates to the sub-service detail page.

### Level 3: Sub-Service Detail Page
**URL Pattern:** `/services/[slug]/[subservice]`

Examples:
- `/services/home-cleaning/bathroom-cleaning`
- `/services/pest-control/termite-control`
- `/services/home-painting/interior-painting`

Shows:
- Detailed service description
- Key benefits (bulleted list)
- Our process (step-by-step)
- Pricing
- Why choose us section
- Related services
- Multiple CTAs (WhatsApp, Call)

## Service Slugs Mapping

| Service Name | Slug |
|-------------|------|
| Home Cleaning Services | `home-cleaning` |
| Pest Control Services | `pest-control` |
| Packers & Movers | `packers-movers` |
| Electrical & Plumbing | `electrical-plumbing` |
| Home Painting Services | `home-painting` |
| Civil & Interior Design | `civil-interior` |

## Sub-Service Examples

### Home Cleaning (`/services/home-cleaning/...`)
- `bathroom-cleaning`
- `balcony-cleaning`
- `window-cleaning`
- `fridge-cleaning`
- `kitchen-cleaning`
- `floor-cleaning`
- `sofa-cleaning`
- `carpet-cleaning`
- `mattress-cleaning`
- `water-tank-cleaning`

### Pest Control (`/services/pest-control/...`)
- `cockroach-ant-control`
- `general-pest-control`
- `bed-bug-control`
- `termite-control`

## Data Structure

All service data is centralized in `/src/data/services.ts` which includes:
- Service metadata (name, slug, description, icon)
- Sub-service details
- Benefits
- Process steps
- Pricing information

## Features

✅ **Breadcrumb Navigation** - Easy navigation back to parent pages
✅ **SEO-Friendly URLs** - Clean, descriptive URLs for each service
✅ **Detailed Information** - Comprehensive details for each sub-service
✅ **Multiple CTAs** - WhatsApp and phone call buttons throughout
✅ **Related Services** - Cross-linking between related sub-services
✅ **Responsive Design** - Works perfectly on all devices

## How to Add New Services

1. Open `/src/data/services.ts`
2. Add new service object to the `servicesData` array
3. Include all sub-services with their details
4. The pages will automatically generate based on the data

## Contact Information

Update phone numbers and WhatsApp links in:
- `/src/app/services/page.tsx`
- `/src/app/services/[slug]/page.tsx`
- `/src/app/services/[slug]/[subservice]/page.tsx`

Current placeholder: `+91 98765 43210`
