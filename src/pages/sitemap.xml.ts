import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { SITE_URL } from 'constant';
import { KANDAS, KANDA_CHAPTER_LENGTH } from 'constant/kanda';

const DEFAULT_LASTMOD = "2025-12-14T08:42:12.972Z"

const Sitemap = () => {
    return null;
};

const getLastMod = (filePath: string) => {
    try {
        const stats = fs.statSync(filePath);
        return stats.mtime.toISOString();
    } catch (e) {
        return DEFAULT_LASTMOD;
    }
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const kandas = KANDAS.map(item => {
        const filePath = path.join(process.cwd(), '__data', 'kanda', item.kanda, 'chapters.json');
        return {
            url: `${SITE_URL}/kanda${item.url}`,
            lastmod: getLastMod(filePath),
            changefreq: 'weekly',
            priority: 0.8,
        };
    });

    const sargas = KANDAS.flatMap(kanda => {
        // @ts-ignore
        const chapterCount = KANDA_CHAPTER_LENGTH[kanda.kanda];
        return Array.from({ length: chapterCount }, (_, i) => {
            const sargaNum = i + 1;
            const filePath = path.join(
                process.cwd(),
                '__data',
                'kanda',
                kanda.kanda,
                'prose',
                'chapter',
                `${sargaNum}.json`
            );
            return {
                url: `${SITE_URL}/kanda${kanda.url}/${sargaNum}`,
                lastmod: getLastMod(filePath),
                changefreq: 'weekly',
                priority: 0.7,
            };
        });
    });

    const allPages = [
        {
            url: `${SITE_URL}`,
            lastmod: DEFAULT_LASTMOD,
            changefreq: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/kanda`,
            lastmod: DEFAULT_LASTMOD,
            changefreq: 'weekly',
            priority: 0.9,
        },
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
              <lastmod>${url.lastmod}</lastmod>
              <changefreq>${url.changefreq}</changefreq>
              <priority>${url.priority}</priority>
            </url>
          `;
            })
            .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=3600'
    );

    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
