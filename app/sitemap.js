import { SITE_URL } from '../data/site-config';
export default function sitemap() {
  return ['', '/co-op-events', '/experiences', '/destinations', '/about', '/gallery', '/contact', '/privacy-policy', '/terms-and-conditions'].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }));
}
