import Head from 'next/head';

const GenericHead = ({ title = 'Read Ramayana', description }: { title: string; description: string }) => {
  return (
    <Head>
      <title>{title}</title>

      {/* normal meta */}
      <meta name="description" content={description} />

      {/* OG meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta
        name="keywords"
        content="ramayana, valmiki, hinduism, india, ram, sita, lakshman, culture, heritage, ramayan, hanuman, bharat, mahabharata, epic, itihasa"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Head>
  );
};

export default GenericHead;


