import { GetServerSideProps } from 'next';
import { SITE_URL } from 'constant';
import { KANDAS, KANDA_CHAPTER_LENGTH } from 'constant/kanda';

const Sitemap = () => {
    return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const kandas = KANDAS.map(item => ({
        url: `${SITE_URL}/kanda${item.url}`,
        changefreq: 'weekly',
        priority: 0.8,
    }));

    const sargas = KANDAS.flatMap(kanda => {
        const chapterCount = KANDA_CHAPTER_LENGTH[kanda.kanda];
        return Array.from({ length: chapterCount }, (_, i) => ({
            url: `${SITE_URL}/kanda${kanda.url}/${i + 1}`,
            changefreq: 'weekly',
            priority: 0.7,
        }));
    });

    const allPages = [
        { url: `${SITE_URL}`, changefreq: 'daily', priority: 1.0 },
        { url: `${SITE_URL}/kanda`, changefreq: 'weekly', priority: 0.9 },
        ...kandas,
        ...sargas,
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
            .map(url => {
                return `
            <url>
              <loc>${url.url}</loc>
              <changefreq>${url.changefreq}</changefreq>
              <priority>${url.priority}</priority>
            </url>
          `;
            })
            .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
