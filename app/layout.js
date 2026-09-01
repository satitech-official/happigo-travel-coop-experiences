import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.happigo.in'),
  title: { default: 'Happigo | Travel • Explore • Be Happy', template: '%s | Happigo' },
  description: 'Curated group journeys, cooperative events and memorable shared experiences from Indore.',
  openGraph: { title: 'Happigo', description: 'Curated group experiences and cooperative events.', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title: 'Happigo | Travel • Explore • Be Happy' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
