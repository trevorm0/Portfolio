import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/content/site.ts';

/**
 * Keeps SEO tags, robots.txt and sitemap.xml in sync with src/content/site.ts,
 * so personal details live in exactly one place.
 */
function seoFromContent(): Plugin {
  const url = site.siteUrl.replace(/\/$/, '');
  const name = site.name.startsWith('[') ? 'Developer Portfolio' : site.name;
  const title = `${name} — ${site.title}`;
  const description = site.tagline;
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  return {
    name: 'seo-from-content',
    transformIndexHtml(html) {
      return html
        .replaceAll('%SITE_TITLE%', esc(title))
        .replaceAll('%SITE_DESCRIPTION%', esc(description))
        .replaceAll('%SITE_URL%', esc(url))
        .replaceAll('%SITE_NAME%', esc(name));
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url><loc>${url}/</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>\n` +
          `</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), seoFromContent()],
});
