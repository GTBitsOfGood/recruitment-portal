import type { NextApiRequest, NextApiResponse } from "next";
import * as contentful from "contentful-management";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const localClient = contentful.createClient({
        accessToken: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN!
    });

    const space = await localClient.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment("master");
    const entries = await environment.getEntries({
        content_type: "developerRecruitmentQuestions",
    });
    const length = entries.items.length;

    if (req.method == "POST") {
        const data = req.body;

        const response = await environment.createEntry(
            "developerRecruitmentQuestions",
            {
                fields: {
                    question: { "en-US": data.question },
                    key: { "en-US": length + 1 },
                    type: { "en-US": data.type },
                    required: { "en-US": data.required },
                    wordLimit: { "en-US": data.wordLimit },
                    radioOptions: { "en-US": data.radioOptions },
                },
            }
        );
        res.status(200).json(response);
    } else if (req.method == "GET") {
        const entries = await environment.getEntries({
            content_type: "developerRecruitmentQuestions",
        });
        const response = entries.items;

        res.send({ response });
    } else if (req.method == "DELETE") {
        const entry = await environment.getEntry(req.body.id);
        const response = await entry.delete();
        res.status(200).json(response);
    } else if (req.method == "PUT") {
        const data = req.body;
        const entry = await environment.getEntry(data.id);
        entry.fields.question["en-US"] = data.question;
        entry.fields.type["en-US"] = data.type;
        entry.fields.key["en-US"] = data.questionNumber;
        entry.fields.required["en-US"] = data.required;
        entry.fields.wordLimit["en-US"] = data.wordLimit;
        if (!(data.radioOptionsLength == 0)) {
            entry.fields.radioOptions = { ["en-US"]: data.radioOptions };
        }
        const response = await entry.update();
        res.status(200).json(response);
    }

    // environment.createContentType()

    // return environment;
};
