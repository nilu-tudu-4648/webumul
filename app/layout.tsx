import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from './components/layout';
import FloatingChatbot from './components/chatbot/FloatingChatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Webumul | Best Website Development Company in Ranchi, Jharkhand',
    template: '%s | Webumul',
  },
  description: 'Best website development company in Ranchi, Jharkhand. We design and develop scalable web, mobile, and AI solutions. Professional website services in Lalpur, Ranchi. Call +91 91551 86701.',
  keywords: [
    'website development company ranchi',
    'best website company ranchi',
    'web development services ranchi',
    'website services ranchi jharkhand',
    'website companies with best services in ranchi',
    'web design company ranchi',
    'website development lalpur ranchi',
    'startup development',
    'AI solutions',
    'SaaS development',
    'web application',
    'mobile app development',
    'MVP development',
    'custom software',
    'React',
    'Next.js',
    'AI chatbot',
  ],
  authors: [{ name: 'Webumul' }],
  creator: 'Webumul',
  publisher: 'Webumul',
  metadataBase: new URL('https://webumul.in'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webumul.in',
    siteName: 'Webumul',
    title: 'Webumul | Best Website Development Company in Ranchi, Jharkhand',
    description: 'Best website development company in Ranchi, Jharkhand. Professional web, mobile, and AI solutions. Located in Lalpur, Ranchi.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Webumul - Best Website Development Company in Ranchi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webumul | Best Website Development Company in Ranchi',
    description: 'Best website development company in Ranchi, Jharkhand. Professional web, mobile, and AI solutions.',
    images: ['/og-image.png'],
    creator: '@webumul',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Webumul',
    description: 'Best website development company in Ranchi, Jharkhand providing web, mobile, and AI solutions',
    url: 'https://webumul.in',
    telephone: ['+919155186701', '+917004212602'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lalpur',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.3441',
      longitude: '85.3096',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ranchi',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '23.3441',
        longitude: '85.3096',
      },
      geoRadius: {
        '@type': 'Distance',
        name: 'Jharkhand',
      },
    },
    priceRange: '$$',
    image: 'https://webumul.in/og-image.png',
    sameAs: [],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
