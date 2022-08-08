import type { NextPage } from "next";
import Head from "next/head";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";
import styles from "../styles/Success.module.css";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

const Dev: NextPage = () => {
  const router = useRouter();
  if (
    typeof window !== "undefined" &&
    localStorage.getItem("submitted") === null
  ) {
    router.replace("/");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Success!</title>
        <meta
          name="success"
          content="Application for Bits of Good Engineering"
        />
        <link rel="icon" href="https://bitsofgood.org/favicon.png" />
      </Head>

      <main className={styles.main}>
        <VerifiedIcon color="success" style={{ fontSize: 100 }} />
        <h1 className={styles.title}>Success!</h1>
        <p>
          <Typography align="center">
            Thank you for submitting your application! You should hear back from
            us real soon. In the mean time, check out{" "}
            <Link href="https://bitsofgood.org/">bitsofgood.org</Link> for more
            information about our org and the non-profits we support.
          </Typography>
        </p>
      </main>
    </div>
  );
};

export default Dev;
