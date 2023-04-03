import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>City Of Plants</title>
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
}
