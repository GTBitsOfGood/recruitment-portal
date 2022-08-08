import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const handleNavigate = (link: string) => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("submitted") !== null
    ) {
      router.replace("/success");
    } else {
      router.push(link);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BoG EngApp</title>
        <meta
          name="description"
          content="Application for Bits of Good Engineering"
        />
        <link rel="icon" href="https://bitsofgood.org/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to the <a href="https://bitsofgood.org">bits of good</a>
          &nbsp;Fall &apos;22 EngApps
        </h2>

        <p className={styles.code}>I want to be a...</p>

        <div className={styles.grid}>
          <a onClick={() => handleNavigate("dev")} className={styles.card}>
            <h2>Developer &rarr;</h2>
            <p>
              Experienced web developers that know their way around a web app.
            </p>
          </a>

          <a onClick={() => handleNavigate("bootie")} className={styles.card}>
            <h2>Bootcamper &rarr;</h2>
            <p>
              Those with entry-level experience, but little exposure to web dev.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
