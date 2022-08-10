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
  const pageNumber = await notion.databases.query({
    database_id: process.env.NOTION_BOOTIE_DB,
  });
  const response = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_BOOTIE_DB,
    },
    properties: {
      id: {
        title: [
          {
            text: {
              content: pageNumber?.results?.length
                ? (pageNumber?.results?.length + 1).toString()
                : "1",
            },
          },
        ],
      },
      "First Name": {
        rich_text: [
          {
            text: {
              content: data.firstName,
            },
          },
        ],
      },
      "Last Name": {
        rich_text: [
          {
            text: {
              content: data.lastName,
            },
          },
        ],
      },
      "Preferred Name": {
        rich_text: [
          {
            text: {
              content: data.preferredName,
            },
          },
        ],
      },
      "GT Email": {
        rich_text: [
          {
            text: {
              content: data.gtEmail,
            },
          },
        ],
      },
      "Personal Email": {
        rich_text: [
          {
            text: {
              content: data.personalEmail,
            },
          },
        ],
      },
      Pronouns: {
        rich_text: [
          {
            text: {
              content: data.preferredPronouns,
            },
          },
        ],
      },
      Gender: {
        rich_text: [
          {
            text: {
              content: data.gender,
            },
          },
        ],
      },
      Ethnicity: {
        rich_text: [
          {
            text: {
              content: data.ethnicity,
            },
          },
        ],
      },
      Degree: {
        rich_text: [
          {
            text: {
              content: data.degree,
            },
          },
        ],
      },
      Year: {
        number: parseInt(data.year, 10),
      },
      Major: {
        rich_text: [
          {
            text: {
              content: data.major,
            },
          },
        ],
      },
      VIP: {
        rich_text: [
          {
            text: {
              content: data.vip,
            },
          },
        ],
      },
      "Other Commitments": {
        rich_text: [
          {
            text: {
              content: data.otherCommitments,
            },
          },
        ],
      },
      Credits: {
        rich_text: [
          {
            text: {
              content: data.credits,
            },
          },
        ],
      },
      "hrs/wk": {
        rich_text: [
          {
            text: {
              content: data.hpw,
            },
          },
        ],
      },
      "Meeting Availability": {
        rich_text: [
          {
            text: {
              content: data.meetingAvailability,
            },
          },
        ],
      },
      "Previously Applied": {
        rich_text: [
          {
            text: {
              content: data.previouslyApplied,
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "General questions",
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "1. What motivates you to join Bits of Good? Feel free to share your past " +
                  "experiences related to social good, volunteering, or nonprofits in " +
                  "either high school or college.",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.gq1,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "2. While you’re in Bits of Good you’ll be working on a team. " +
                  "Talk about a time you had a disagreement while working on a team. " +
                  "How did you come up with a resolution?",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.gq2,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "3. If you had all the time and all the resources in the world, what would you do?",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.gq3,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Position specific questions",
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "1. How much experience do you have in programming/web development?",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.psq1,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "2. Describe an experience where you enjoyed working with your team. " +
                  "What was the team dynamic like and what were you able to accomplish " +
                  "as a result? [800 chars]",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.psq2,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      // psq3
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "3. Tell us about an involvement you are passionate about. " +
                  "This can either be something you've done at GT or when you were in " +
                  "high school. [800 chars]",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.psq3,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      // psq4
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "4. Describe one aspect of Bits of Good that you would add or " +
                  "change if you were director. [500 chars]",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.psq4,
              },
            },
          ],
          color: "default",
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      // Others
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Other information",
              },
            },
          ],
        },
      },
      // Resume
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "Resume: ",
              },
              annotations: {
                bold: true,
              },
            },
            {
              text: {
                content: data.oq1,
                ...(isValidUrl(data.oq1) && {
                  link: {
                    url: data.oq1,
                  },
                }),
              },
            },
          ],
        },
      },
      // GH
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "Github: ",
              },
              annotations: {
                bold: true,
              },
            },
            {
              text: {
                content: data.oq2,
                ...(isValidUrl(data.oq2) && {
                  link: {
                    url: data.oq2,
                  },
                }),
              },
            },
          ],
        },
      },
      // LIN
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "LinkedIn: ",
              },
              annotations: {
                bold: true,
              },
            },
            {
              text: {
                content: data.oq3,
                ...(isValidUrl(data.oq3) && {
                  link: {
                    url: data.oq3,
                  },
                }),
              },
            },
          ],
        },
      },
      // Portfolio
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "Portfolio: ",
              },
              annotations: {
                bold: true,
              },
            },
            {
              text: {
                content: data.oq4,
                ...(isValidUrl(data.oq4) && {
                  link: {
                    url: data.oq4,
                  },
                }),
              },
            },
          ],
        },
      },
      // Other links
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "Other: ",
              },
              annotations: {
                bold: true,
              },
            },
            {
              text: {
                content: data.oq5,
                ...(isValidUrl(data.oq5) && {
                  link: {
                    url: data.oq5,
                  },
                }),
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
      // Comments
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "Anything you'd like to add or note that wasn't conveyed in the application?",
              },
              annotations: {
                bold: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.oq6,
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                content: "",
              },
            },
          ],
          color: "default",
        },
      },
    ],
  });

  res.status(200).json(response);
};
