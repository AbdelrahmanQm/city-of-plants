import Head from "next/head";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(
          "https://aq-store-api.onrender.com/fullStoreData"
        ).then((res) => res.json());

        setData(response);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, [data]);
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
