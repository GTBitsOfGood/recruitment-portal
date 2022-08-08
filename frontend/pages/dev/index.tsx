import type { NextPage } from "next";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Developer.module.css";
import { useRouter } from "next/router";

const Dev: NextPage = () => {
  const router = useRouter();
  if (
    typeof window !== "undefined" &&
    localStorage.getItem("submitted") !== null
  ) {
    router.replace("/success");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dev App</title>
        <meta
          name="description"
          content="Application for Bits of Good Engineering"
        />
        <link rel="icon" href="https://bitsofgood.org/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          So you want to be a web sorcerer? &#128302;
          <br />
          Great! We can&apos;t wait to meet you!
        </h1>

        <p className={styles.code}>↓ Please read before getting started ↓</p>

        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              maxWidth: "75ch",
              paddingBottom: "1rem",
            },
          }}
        >
          <Typography>
            We would love to chat before you apply! If you’re interested in
            discussing your ideas or learning more about us, please reach out to
            us at{" "}
            <a href="mailto:gt.engineering@hack4impact.org">
              gt.engineering@hack4impact.org
            </a>
            .
            <br />
            <br />
            This is the application to be a Bits of Good Developer for Fall
            2022!
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bitsofgood.org/about/roles/?role=Developer#engineering"
            >
              Click here
            </a>{" "}
            to learn more about developers at Bits of good &#128187;
            <h3>Important dates</h3>
            Deadline: 11:59PM, August 30, 2022
            <br />
            Latest Decision Date: September 5, 2022
            <br />
            <br />
            Note: If you are accepted, we do have a mandatory Launch Party at
            the beginning of each semester. This is a great opportunity to meet
            other club members, get to know your project team and network with
            nonprofits! The date is <b>September 10, 2022, 6:30-9PM</b>.
            <br />
            <br />
            Please make sure to add{" "}
            <a href="mailto:gt.recruitment@hack4impact.org">
              gt.recruitment@hack4impact.org
            </a>{" "}
            to your contacts in your email so that our emails do not go to the
            spam or junk folders.
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" onClick={() => history.back()}>
            Back
          </Button>
          &nbsp;&nbsp;
          <Button variant="contained" href="/dev/application">
            Start Application
          </Button>
        </Box>
      </main>
    </div>
  );
};

export default Dev;
