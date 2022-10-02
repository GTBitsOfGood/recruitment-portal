import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "contentful";
import * as contentful from "contentful-management";

const localClient = contentful.createClient({
  accessToken: process.env.PERSONAL_ACCESS_TOKEN!,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  //   let length: number;

  const space = await localClient.getSpace(process.env.CONTENTFUL_SPACE_ID!);
  const environment = await space.getEnvironment("master");
  const entries = await environment.getEntries({
    content_type: "developerRecruitmentQuestions",
  });
  const length = entries.items.length;

  const response = await environment.createEntry(
    "developerRecruitmentQuestions",
    {
      fields: {
        question: { "en-US": data[0] },
        key: { "en-US": length },
        required: { "en-US": data[2] },
        wordLimit: { "en-US": data[3] },
        radioOptions: { "en-US": data[4] },
      },
    }
  );

  res.json(data);
};
