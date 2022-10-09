import { useRouter } from "next/router";
import * as contentful from 'contentful-management';
import { useState } from "react";

const CreateQuestions = () => {
    const [question, setQuestion] = useState("");
    const [type, setType] = useState("");
    const [wordLimit, setWordLimit] = useState(0);
    const [required, setRequired] = useState(false);
    const [radioOptions, setRadioOptions] = useState([""]);
    const [newRadio, setNewRadio] = useState("");

    const router = useRouter();
    if (
        typeof window !== "undefined" &&
        localStorage.getItem("submitted") !== null
    ) {
        router.replace("/success");
    }

    async function saveData(data: any) {
        const localClient = contentful.createClient({
            accessToken: process.env.PERSONAL_ACCESS_TOKEN!
        })

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
                    question: { "en-US": data.question },
                    key: { "en-US": length },
                    required: { "en-US": data.required },
                    wordLimit: { "en-US": data.wordLimit },
                    radioOptions: { "en-US": data.radioOptions },
                },
            }
        );
    }

    return (
        <div>
            <form onSubmit={(e: any) => {
                e.preventDefault();
                const data = { question, type, wordLimit, required, radioOptions }
                saveData(data);
            }
            }>
                <label htmlFor="questionTitle">Question Title</label>
                <br />
                <input type="text" id="questionTitle" required onChange={e => setQuestion(e.target.value)} />

                <br />

                <label htmlFor="types">Response type</label>
                <br />
                <select name="types" id="types" required onChange={e => setType(e.target.value)}>
                    <option disabled selected> -- select an option -- </option>
                    <option value="radio">Radio</option>
                    <option value="text">Text</option>
                </select>

                {type === "radio" &&
                    <>
                        <br />
                        <label htmlFor="addRadio">Add radio options</label>
                        <br />
                        <input type="text" id="addRadio" onChange={e => setNewRadio(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault();
                            setRadioOptions([...radioOptions, newRadio]);
                        }
                        }>Add radio option</button>

                    </>
                }
                {
                    radioOptions.length > 0 &&
                    <ul>
                        {
                            radioOptions.map((option) => <li key="{option}">{option}</li>)
                        }
                    </ul>
                }


                {type === "text" &&
                    <>
                        <br />
                        <label htmlFor="wordLimit">What is the word limit?</label>
                        <br />
                        <input type="number" id="wordLimit" onChange={e => setWordLimit(parseInt(e.target.value))} />
                    </>
                }

                <br />
                <label htmlFor="required">Is it required?</label>
                <br />
                <select name="required" id="required" required onChange={e => {
                    const isTrueSet = e.target.value === 'true' ? true : false;
                    setRequired(isTrueSet);
                }
                }>
                    <option disabled selected> -- select an option -- </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreateQuestions;
