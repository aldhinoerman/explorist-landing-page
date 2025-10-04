# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev` - Starts Next.js development server on http://localhost:3000
- **Build**: `npm run build` or `pnpm build` - Creates production build
- **Production server**: `npm run start` - Runs production server after build
- **Lint**: `npm run lint` - Runs ESLint with Next.js configuration

Package manager: Uses `pnpm` (evidenced by pnpm-lock.yaml)

## Architecture Overview

This is a **multilingual tourism landing page** for Explorist Tour Bali built with Next.js 15, featuring:

### Tech Stack
- **Next.js 15** with App Router and Server Components
- **TypeScript** with strict configuration
- **next-intl** for internationalization (10 supported locales)
- **Tailwind CSS** + **DaisyUI** for styling
- **SCSS** for additional styling
- **Strapi CMS** integration via Axios
- **React Hook Form** for form handling

### Internationalization
- **Dynamic locale support**: Fetches available locales from Strapi v5 i18n API
- **Strapi endpoint**: `/api/i18n/locales` - Returns available locales with metadata
- **Fallback locales**: en, zh, fr, de, ru, ja, hi, tl, nl, ko (used if Strapi API fails)
- **Default locale**: Dynamically determined from Strapi (fallback: en)
- **Route structure**: `/[locale]/page-name`
- **Middleware**: Basic locale validation using fallback locales
- **Translation files**: Located in `/locales/[locale]/dictionaries.json`
- **Client-side locale fetching**: Language switcher dynamically loads available locales

### Project Structure
- **`src/app/[locale]/`**: Next.js App Router pages with locale parameter
- **`src/components/`**: Feature-specific React components (activity, hero, destinations, etc.)
- **`src/modules/`**: Reusable UI modules (button, card, carousel, modal, etc.)
- **`src/utils/`**: Utility functions including API client and data fetching
- **`src/i18n/`**: Internationalization configuration
- **`src/assets/`**: Static assets including fonts (Poppins, Abril Fatface) and images
- **`locales/`**: Translation dictionaries for all supported languages

### Key Features
- **Dynamic routing**: `/details/[slug]`, `/book-now/[slug]`, `/package/[slug]`, `/story/[slug]`
- **CMS Integration**: Fetches content from Strapi API at `api.exploristtourbali.com`
- **SEO optimized**: Metadata generation, sitemap, robots.txt
- **Analytics**: Google Analytics and GTM integration (production only)
- **Components**: Hero sections, testimonials, activity cards, booking forms

### API Integration
- **Base URL**: Configured via `NEXT_PUBLIC_STRAPI_API_URL` environment variable
- **Authentication**: Bearer token via `NEXT_PUBLIC_API_TOKEN`
- **Axios instance**: Pre-configured with interceptors in `src/utils/request.ts`
- **Image optimization**: Remote patterns configured for localhost and production API

### Styling Architecture
- **Tailwind**: Custom color palette defined in tailwind.config.ts
- **DaisyUI**: Component library with custom theme "mytheme"
- **SCSS**: Organized in `src/assets/styles/` with variables, mixins, typography
- **Custom colors**: Primary (#177BA5), secondary (#292D32), and social media colors

### Environment Variables Required
- `NEXT_PUBLIC_STRAPI_API_URL`: Strapi CMS API endpoint
- `NEXT_PUBLIC_API_TOKEN`: API authentication token
- `NEXT_PUBLIC_GAID`: Google Analytics ID (production)
- `NEXT_PUBLIC_GTMID`: Google Tag Manager ID (production)

### Data Types
Key interfaces defined in `src/data/types.ts`:
- `IDetails`: Tour package details with trips array
- `IBookDetails`: Booking information with pricing and itinerary
- `ITrips`: Individual trip/activity data

### Locale Management
- **Server-side utilities**: `src/utils/strapiLocales.ts` - Edge Runtime compatible fetch functions
- **Client-side utilities**: `src/utils/strapiLocalesClient.ts` - Axios-based functions for browser usage
- **Key functions**:
  - `fetchStrapiLocales()` / `fetchStrapiLocalesClient()` - Get raw locale data from Strapi
  - `getStrapiLocalesWithDisplay()` / `getStrapiLocalesWithDisplayClient()` - Get locales with UI display info
  - `getStrapiLocaleCodes()` - Get array of available locale codes
  - `getStrapiDefaultLocale()` - Get the default locale from Strapi

When working with this codebase:
1. Use the existing component patterns and module structure
2. Follow the established naming conventions for routes and components
3. Locale support is now dynamic - new locales added in Strapi will automatically appear
4. Use `strapiLocalesClient.ts` functions in client components, `strapiLocales.ts` in server components
5. Use the pre-configured Axios instance for API calls
6. Follow the existing TypeScript interfaces for data structures