import Head from "next/head";
import { useRouter } from "next/router";

import { createClient } from "contentful";
import { useState } from "react";

let questions;

export async function getStaticProps(context) {
    // connect to the contentful space
    const client = createClient({
        accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
        space: process.env.CONTENTFUL_SPACE_ID!,
    });

    const res = await client.getEntries({
        content_type: "developerRecruitmentQuestions",
    });

    questions = res.items;

    return {
        props: {
            questions: res.items,
        },
    };
}

const Question = ({ questions }) => {
    // const data = questions[0]["fields"];
    // console.log(data);
    console.log(questions);


    const [radio, setRadio] = useState(false);
    const [text, setText] = useState(false);

    const router = useRouter();
    if (
        typeof window !== "undefined" &&
        localStorage.getItem("submitted") !== null
    ) {
        router.replace("/success");
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form>
                <label htmlFor="questionTitle">Question Title</label>
                <br />
                <input type="text" id="questionTitle" required />

                <br />

                <label htmlFor="types">Response type</label>
                <br />
                <select name="types" id="types" required>
                    <option disabled selected> -- select an option -- </option>
                    <option value="radio">Radio</option>
                    <option value="text">Text</option>
                </select>

                {/* Dynamically create content based on what was selected above */}

                <br />
                <label htmlFor="required">Is it required?</label>
                <br />
                <select name="required" id="required" required>
                    <option disabled selected> -- select an option -- </option>
                    <option value="yes">Yes</option>
                    <option value="yes">No</option>
                </select>

                <br />

                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default Question;
