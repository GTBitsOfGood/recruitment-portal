import * as React from "react";
import { Box } from "@mui/system";
import BasicCard from "../components/Card";
import RadioCard from "../components/RadioCard";
import BoGCard from "../components/BoGCard";
import Button from "@mui/material/Button";
import styles from "../../styles/Developer.module.css";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { sections, listTypes } from "./constants";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "50%",
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}));

const Application: NextPage = () => {
  const router = useRouter();

  if (
    typeof window !== "undefined" &&
    localStorage.getItem("submitted") !== null
  ) {
    router.replace("/success");
  }

  const [currSection, setCurrSection] = React.useState(0);

  const buildData = () => {
    const data: any = {};
    sections.forEach((section) => {
      section.forEach((item) => {
        data[item.id] =
          localStorage.getItem(item.id) !== undefined &&
          localStorage.getItem(item.id) !== null
            ? localStorage.getItem(item.id)
            : "N/A";
      });
    });
    return data;
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Dev App</title>
        <meta
          name="description"
          content="Application for Bits of Good Engineering"
        />
        <link rel="icon" href="https://bitsofgood.org/favicon.png" />
      </Head>
      <BoGCard />
      <br />
      <Box
        component="form"
        autoComplete="off"
        onSubmit={(evt: any) => {
          var complete = true;
          sections[currSection].forEach((item) => {
            evt.preventDefault();
            if (
              item.required &&
              evt.target[item.id]?.value === "" &&
              item.type === undefined
            ) {
              document.getElementById(item.id)?.focus();
              document.getElementById(item.id)?.blur();
              complete = false;
            } else if (
              item.required &&
              evt.target[item.id]?.value === "" &&
              item.type === listTypes.RADIO
            ) {
              document.getElementById(item.id)?.focus();
              console.log(item.id);
              complete = false;
            }
          });
          if (complete) {
            if (currSection < sections.length - 1) {
              setCurrSection(currSection + 1);
              window.scroll(0, 0);
            } else {
              const data = buildData();
              fetch("/api/submit_dev_info", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }).then((response) => {
                // localStorage.clear();
                // localStorage.setItem("submitted", "true");
                // router.push("/success");
              });
            }
          }
        }}
      >
        {sections[currSection]?.map((item) => {
          if (item.type === undefined) {
            return (
              <>
                <BasicCard
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  required={item.required}
                />
                <br />
              </>
            );
          } else if (item.type === listTypes.RADIO) {
            return (
              <>
                <RadioCard
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  required={item.required}
                  radioOptions={item.radioOptions}
                  hasOther={item.hasOther}
                />
                <br />
              </>
            );
          }
        })}
        <div className={styles.controls}>
          <div className={styles.g1}>
            <Button
              variant="outlined"
              onClick={() => {
                if (currSection > 0) {
                  setCurrSection(currSection - 1);
                  window.scroll(0, 0);
                } else {
                  history.back();
                }
              }}
            >
              Back
            </Button>
            &nbsp;&nbsp;
            <Button type="submit" variant="outlined">
              {currSection !== sections.length - 1 ? "Next" : "Submit"}
            </Button>
          </div>
          <div className={styles.progressContainer}>
            <BorderLinearProgress
              variant="determinate"
              value={((currSection + 1) / sections.length) * 100}
            />
            <span>
              Page {currSection + 1} of {sections.length}
            </span>
          </div>
          <Button
            variant="text"
            onClick={() => {
              localStorage.clear();
              router.reload();
            }}
          >
            Clear Form
          </Button>
        </div>
      </Box>
    </main>
  );
};

export default Application;