import Head from "next/head";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://aq-store-api.onrender.com/fullStoreData"
  );
  const data = await response.json();
  return {
    props: { data },
  };
};
export default function HomePage({ data }: any) {
  return (
    <>
      <Head>
        <title>City Of Plants</title>
      </Head>
      <main>
        <ul>
          {data &&
            data.map((item, i) => (
              <li key={i}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
