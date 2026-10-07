const modules = import.meta.glob('./**/*.astro', { eager: false });

export async function GET(): Promise<Response> {
  const site = 'https://www.shopifysmsmarketingapps.com';
  const paths = Object.keys(modules)
    .filter((p) => !p.includes('/sitemap'))
    .map((p) => {
      let route = p.replace(/^\.\//, '/').replace(/\.astro$/, '');
      if (route.endsWith('/index')) route = route.slice(0, -'/index'.length);
      return route;
    })
    .sort();
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((r) => `  <url><loc>${site}${r}</loc></url>`).join('\n') +
    `\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
