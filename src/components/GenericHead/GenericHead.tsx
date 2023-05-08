import Head from 'next/head';

const GenericHead = ({ title, description }: { title: string; description: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content="Read Valimiki Ramayana online" />
      <meta name="description" content={description} />
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
