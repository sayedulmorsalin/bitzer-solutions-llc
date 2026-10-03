import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bitzers.top'),
  title: 'Bitzer Solutions LLC | Official Mobile App & Web Engineering Studio',
  description: 'Bitzer Solutions LLC is a verified mobile application publisher and software engineering studio. We build high-performance Android, iOS, and edge-native web solutions with rigorous privacy, Google Play compliance, and data safety standards.',
  keywords: [
    'Bitzer Solutions',
    'Bitzer Solutions LLC',
    'Google Play Developer',
    'Mobile App Development',
    'Android Apps',
    'iOS App Development',
    'Web Application Engineering',
    'Privacy Policy',
    'App Support'
  ],
  authors: [{ name: 'Bitzer Solutions LLC' }],
  creator: 'Bitzer Solutions LLC',
  publisher: 'Bitzer Solutions LLC',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitzers.top',
    title: 'Bitzer Solutions LLC | Official Mobile App & Web Engineering Studio',
    description: 'Official developer website for Bitzer Solutions LLC. Verified mobile apps, privacy policies, and customer support.',
    siteName: 'Bitzer Solutions LLC',
    images: [
      {
        url: '/images/hero-app.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitzer Solutions LLC Mobile Applications Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitzer Solutions LLC | Mobile App Development Studio',
    description: 'Verified mobile app developer on Google Play. Discover high-performance Android & iOS applications.',
    images: ['/images/hero-app.jpg'],
  },
  other: {
    'google-site-verification': 'GOOGLE_PLAY_VERIFICATION_TOKEN_PLACEHOLDER',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bitzer Solutions LLC',
    legalName: 'Bitzer Solutions LLC',
    url: 'https://bitzers.top',
    logo: 'https://bitzers.top/images/logo.jpg',
    description: 'Bitzer Solutions LLC is a dedicated mobile application development and digital software publishing company.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'support@bitzers.top',
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: 'support@bitzers.top',
        contactType: 'privacy officer',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://play.google.com',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div className="bg-mesh"></div>
        <div className="bg-grid"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
