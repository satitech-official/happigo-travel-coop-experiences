import './globals.css';

const siteUrl = 'https://satitech-official.github.io/happigo-travel-coop-experiences';
const previewImage = `${siteUrl}/preview.svg`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Happigo | Travel • Explore • Be Happy', template: '%s | Happigo' },
  description: 'Curated group journeys, cooperative events and memorable shared experiences from Indore.',
  openGraph: { title: 'Happigo', description: 'Curated group experiences and cooperative events.', type: 'website', locale: 'en_IN', url: siteUrl, images: [previewImage] },
  twitter: { card: 'summary_large_image', title: 'Happigo | Travel • Explore • Be Happy', images: [previewImage] },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
