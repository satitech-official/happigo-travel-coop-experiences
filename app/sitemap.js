import { SITE_URL } from '../data/site-config';

export const dynamic = 'force-static';

const paths = ['', '/co-op-events', '/experiences', '/destinations', '/about', '/gallery', '/contact', '/privacy-policy', '/terms-and-conditions'];

export default function sitemap() {
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
