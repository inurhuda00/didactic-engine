import { challenges } from '$lib/getChallenges';

const website = `https://frontendmentor.ruang.work/`;

export const GET = async () => {
	const posts = challenges
		.filter((content) => content.status)
		.sort((a, b) => new Date(b.done_at).getTime() - new Date(a.done_at).getTime());

	const pages = [
		{ page: `about`, updated: `2023-04-08` },
		{ page: `challenges`, updated: `2023-04-08` },
		{ page: `convert`, updated: `2023-04-08` },
	];

	const body = render(pages, posts);

	return new Response(body, {
		headers: {
			'content-type': 'application/xml',
			'cache-control': 'max-age=0, s-maxage=3600',
		},
	});
};

const render = (pages: { page: any; updated: any }[], posts: any[]) => {
	const lastMod = new Date().toISOString().split('T')[0];
	return `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset 
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${website}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>
    ${posts
		.map(({ status, slug, done_at }) =>
			!status
				? null
				: `
    <url>
      <loc>${website}${slug}</loc>
      <lastmod>${new Date(done_at).toISOString().split('T')[0]}</lastmod>
    </url>
    `
		)
		.join('')}
    ${pages
		.map(
			({ page, updated }) => `
    <url>
      <loc>${website}${page}</loc>
      <lastmod>${updated}</lastmod>
    </url>
    `
		)
		.join('')}
  </urlset>
`;
};
