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
              content: data.firstName.details,
            },
          },
        ],
      },
      "Last Name": {
        rich_text: [
          {
            text: {
              content: data.lastName.details,
            },
          },
        ],
      },
      "Preferred Name": {
        rich_text: [
          {
            text: {
              content: data.preferredName.details,
            },
          },
        ],
      },
      "GT Email": {
        rich_text: [
          {
            text: {
              content: data.gtEmail.details,
            },
          },
        ],
      },
      "Personal Email": {
        rich_text: [
          {
            text: {
              content: data.personalEmail.details,
            },
          },
        ],
      },
      Pronouns: {
        rich_text: [
          {
            text: {
              content: data.preferredPronouns.details,
            },
          },
        ],
      },
      Gender: {
        rich_text: [
          {
            text: {
              content: data.gender.details,
            },
          },
        ],
      },
      Ethnicity: {
        rich_text: [
          {
            text: {
              content: data.ethnicity.details,
            },
          },
        ],
      },
      Degree: {
        rich_text: [
          {
            text: {
              content: data.degree.details,
            },
          },
        ],
      },
      Year: {
        number: parseInt(data.year.details, 10),
      },
      Major: {
        rich_text: [
          {
            text: {
              content: data.major.details,
            },
          },
        ],
      },
      VIP: {
        rich_text: [
          {
            text: {
              content: data.vip.details,
            },
          },
        ],
      },
      "Other Commitments": {
        rich_text: [
          {
            text: {
              content: data.otherCommitments.details,
            },
          },
        ],
      },
      Credits: {
        rich_text: [
          {
            text: {
              content: data.credits.details,
            },
          },
        ],
      },
      "hrs/wk": {
        rich_text: [
          {
            text: {
              content: data.hpw.details,
            },
          },
        ],
      },
      "Meeting Availability": {
        rich_text: [
          {
            text: {
              content: data.meetingAvailability.details,
            },
          },
        ],
      },
      "Previously Applied": {
        rich_text: [
          {
            text: {
              content: data.previouslyApplied.details,
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
                content: data.gq1.details,
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
                content: data.gq2.details,
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
                content: data.gq3.details,
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
                content: data.psq1.details,
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
                content: data.psq2.details,
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
                content: data.psq3.details,
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
                content: data.psq4.details,
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
                content: data.oq1.details,
                ...(isValidUrl(data.oq1.details) && {
                  link: {
                    url: data.oq1.details,
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
                content: data.oq2.details,
                ...(isValidUrl(data.oq2.details) && {
                  link: {
                    url: data.oq2.details,
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
                content: data.oq3.details,
                ...(isValidUrl(data.oq3.details) && {
                  link: {
                    url: data.oq3.details,
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
                content: data.oq4.details,
                ...(isValidUrl(data.oq4.details) && {
                  link: {
                    url: data.oq4.details,
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
                content: data.oq5.details,
                ...(isValidUrl(data.oq5.details) && {
                  link: {
                    url: data.oq5.details,
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
                content: data.oq6.details,
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
