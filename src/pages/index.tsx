import Stack from "@components/Stack";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Read Ramayana</title>
        <meta name="title" content="Read Ramayana" />
        <meta name="description" content="Read ramayana online " />
        <meta
          name="keywords"
          content="ramayana, hinduism, india, ram, sita, lakshman, culture, heritage, ramayan, hanuman, bharat, mahabharata, "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Stack direction="column" spacing={10}>
        <p className="font-sans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, magnam ipsa voluptatum harum delectus
          repellendus, voluptas aliquid, nihil quasi tempore quo laboriosam! Animi expedita blanditiis laudantium,
          maiores corporis beatae ratione.
        </p>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Stack>
    </>
  );
}
