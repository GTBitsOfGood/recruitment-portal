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
  const response: any = {};
  const notion_info = await notion.databases.retrieve({
    database_id: process.env.NOTION_DEV_DB,
  });

  for (const property in data) {
    const id = data[property].notion_id;
    if (id !== "N/A") {
      if (!notion_info.properties.hasOwnProperty(id)) {
        const data: any = await updateDatabaseWithNotionID(id);
        response[id] = data.properties[id];
      }
    }
  }

  function updateDatabaseWithNotionID(notion_id: string) {
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `${process.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          [notion_id]: {
            rich_text: {},
          },
        },
      }),
    };

    return new Promise((resolve, reject) => {
      fetch(
        `https://api.notion.com/v1/databases/${process.env.NOTION_DEV_DB}`,
        options
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  res.status(200).json(response);
};
