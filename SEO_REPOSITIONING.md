# 1x Urban Services - SEO Repositioning Complete

## Project Objective
Reposition brand search results to show **"Home Services & Pest Control in Hyderabad"** and completely remove Bangalore and bathroom-service dominance.

---

## ✅ On-Page SEO (Titles, Meta Descriptions, H1-H2 Structure)

### Homepage (`/`)
- **Title**: `1x Urban Services | Home Services & Pest Control in Hyderabad`
- **Meta Description**: `1x Urban Services offers professional home services & pest control in Hyderabad. Trusted experts for deep cleaning, painting, repairs & maintenance. 10+ years experience.`
- **H1**: `1x Urban Services - Professional Home Services & Pest Control in Hyderabad`
- **H2 Structure**:
  - `Premium Home Services in Hyderabad` (Services Section)
  - `Why Choose 1x Urban Services?` (About Section)
  - `Professional Home Care in Hyderabad` (Vision Section - focuses on Pest Control)

### Services Page (`/services`)
- **Title**: `Home Services & Pest Control in Hyderabad | 1x Urban Services`
- **Meta Description**: `Professional home services & pest control in Hyderabad. Deep cleaning, termite control, cockroach treatment, painting, electrical & plumbing services.`
- **H1**: `Home Services & Pest Control in Hyderabad`

### Dynamic Service Pages (`/services/[slug]`)
- **Title Pattern**: `{Service Name} in Hyderabad | 1x Urban Services`
- **Keywords are dynamically generated with location priority**

### Sub-Service Pages (`/services/[slug]/[subservice]`)
- **Title Pattern**: `{Sub-Service Name} in Hyderabad | {Parent Service} | 1x Urban Services`
- **Keywords prioritize specific service + Hyderabad first**

---

## ✅ Keyword Strategy (Primary, Secondary, Brand Intent)

### Primary Keywords (Homepage Focus)
- `home services hyderabad`
- `pest control services hyderabad`
- `professional home services hyderabad`
- `home maintenance services hyderabad`

### Secondary Keywords (Service-Specific)
- `deep cleaning services hyderabad`
- `house cleaning services hyderabad`
- `termite control hyderabad`
- `cockroach pest control hyderabad`
- `painting services hyderabad`
- `electrical plumbing services hyderabad`
- `packers movers hyderabad`

### Brand Intent Keywords
- `1x urban services`
- `1x urban services hyderabad`
- `premium home services hyderabad`

---

## ✅ Technical SEO (Schema, Indexing Signals, Crawl Clarity)

### LocalBusiness Schema (Enhanced)
```json
{
  "@type": "LocalBusiness",
  "name": "1x Urban Services",
  "alternateName": "1x Urban Services Hyderabad",
  "description": "Professional home services & pest control company in Hyderabad",
  "areaServed": {
    "@type": "City",
    "name": "Hyderabad"
  },
  "hasOfferCatalog": {
    "itemListElement": [
      "Home Services",
      "Pest Control Services",
      "Painting Services",
      "Repair & Maintenance"
    ]
  }
}
```

### Indexing Configuration
- `robots`: `index: true, follow: true`
- `googleBot`: `max-video-preview: -1, max-image-preview: large`
- Google Search Console verification tag included

---

## ✅ Entity SEO (Brand Identity)

The schema now clearly defines:
1. **What the brand is**: `Professional home services & pest control company`
2. **Where it operates**: `Hyderabad, Telangana, India`
3. **What services it offers** (in priority order):
   - Home Services (Deep Cleaning, House Cleaning)
   - Pest Control Services (Termite, Cockroach, Bed Bug)
   - Painting Services
   - Repair & Maintenance (Electrical, Plumbing)

---

## ✅ Local SEO (Hyderabad Focus)

### areaServed Configuration
```json
"areaServed": {
  "@type": "City",
  "name": "Hyderabad",
  "containedInPlace": {
    "@type": "State",
    "name": "Telangana"
  }
}
```

### Address Schema
- **Street**: Plot No 36/3, Chintal, Qutubullapur, Flat no 105
- **City**: Hyderabad
- **State**: Telangana
- **Postal Code**: 500054
- **Country**: India

### Geo Coordinates
- **Latitude**: 17.5028
- **Longitude**: 78.4419

---

## ✅ Search Intent Correction (Removing Bathroom Service Dominance)

### What Was Changed
1. **Removed "Bathroom Cleaning" from primary headings** - It was being picked up as the main service
2. **Reordered service priority** - Home Services (general) and Pest Control now appear first
3. **Updated all meta titles** - Focus on "Home Services" and "Pest Control" instead of specific sub-services
4. **Schema service order corrected**:
   - First: Home Services (general)
   - Second: Pest Control Services
   - Third: Painting Services
   - Fourth: Repair & Maintenance

### Internal Linking Rules Applied
- Anchor text uses: "Home Services in Hyderabad"
- Anchor text uses: "Pest Control Services"
- Avoided anchor text focused on bathroom services

---

## ✅ OpenGraph & Social Media

### OpenGraph Tags
- **og:title**: `Home Services & Pest Control in Hyderabad | 1x Urban Services`
- **og:description**: `Premium home services & pest control in Hyderabad by verified professionals. Cleaning, pest control, painting & repairs.`
- **og:image**: `/logo.png`
- **og:locale**: `en_IN`

### Twitter Cards
- **twitter:card**: `summary_large_image`
- **twitter:title**: `Home Services & Pest Control in Hyderabad | 1x Urban Services`

---

## 📋 Post-Deployment Actions

### Google Search Console
1. Request indexing for `/` (homepage)
2. Request indexing for `/services`
3. Request indexing for `/services/pest-control`
4. Request indexing for `/services/home-cleaning`

### Expected Outcome
Brand searches for "1x Urban Services" should display:
- **Primary Result**: Home Services & Pest Control in Hyderabad
- **NOT**: Bathroom services or Bangalore references

---

## Files Modified

| File | Changes |
|------|---------|
| `src/app/layout.tsx` | Updated metadata, keywords, schema with Entity SEO |
| `src/app/page.tsx` | Updated H1, H2 structure, Vision section |
| `src/app/services/page.tsx` | Updated title, description, keywords, H1 |
| `src/app/services/[slug]/page.tsx` | Enhanced dynamic metadata generation |
| `src/app/services/[slug]/[subservice]/page.tsx` | Enhanced sub-service SEO |

---

**Status**: ✅ SEO Repositioning Complete - Ready for Deployment
