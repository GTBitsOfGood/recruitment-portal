import type { NextApiRequest, NextApiResponse } from "next";

const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const data = req.body;

  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_BOOTIE_DB,
  });

  function updateDatabaseWithNotionID(property: any) {
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `${process.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          [property.notion_id]: {
            rich_text: {},
          },
        },
      }),
    };

    fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_BOOTIE_DB}`,
      options
    )
      .then((response) => {
        console.log("Update API Successful!");
      })
      .catch((error) => {
        console.log("Update API Failed!");
      });
  }

  function updateDatabaseWithID(property: any) {
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `${process.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          [property.id]: {
            rich_text: {},
          },
        },
      }),
    };

    fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_BOOTIE_DB}`,
      options
    )
      .then((response) => {
        console.log("Update API Successful!");
      })
      .catch((error) => {
        console.log("Update API Failed!");
      });
  }

  for (const property in data) {
    if (data.prop.notion_id === "N/A") {
      updateDatabaseWithID(property);
    } else {
      if (!response.properties.hasOwnProperty(.notion_id)) {
        // account for when the notion_id is N/A
        updateDatabaseWithNotionID(property);

        const newResponse = await notion.databases.retrieve({
          database_id: process.env.NOTION_BOOTIE_DB,
        });

        res.status(200).json(newResponse);
      }
    }
  }

  console.log(response.properties);

  // const options = {
  //   method: "PATCH",
  //   headers: {
  //     Authorization: process.env.NOTION_SECRET,
  //     "Notion-Version": "2022-06-28",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     properties: {
  //       "Date Solved": {
  //         name: "Date Created",
  //         id: "date_solved",
  //         rich_text: {},
  //       },
  //     },
  //   }),
  // };

  // fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DB}`, options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response.properties))
  //   .catch((error) => console.log(error));

  res.status(200).json(response);
};
