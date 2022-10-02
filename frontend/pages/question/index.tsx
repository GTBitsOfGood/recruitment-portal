import Head from "next/head";
import { useRouter } from "next/router";
import 'axios'
import { createClient } from "contentful";
import * as contentful from 'contentful-management';
import { useState } from "react";

let questions;

// export async function getStaticProps(context) {
//     // connect to the contentful space
//     const client = createClient({
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
//         space: process.env.CONTENTFUL_SPACE_ID!,
//     });

//     const res = await client.getEntries({
//         content_type: "developerRecruitmentQuestions",
//     });


//     questions = res.items;

//     return {
//         props: {
//             questions: res.items,
//         },
//     };
// }
// let localClient: any;

export async function getStaticProps(context) {
    // localClient = contentful.createClient({
    //     accessToken: process.env.PERSONAL_ACCESS_TOKEN!
    // })

    // localClient.getSpace(process.env.CONTENTFUL_SPACE_ID!)
    //     .then((space) => {
    //         space.getEnvironment('master')
    //             .then((environment) => {
    //                 environment.createEntry('developerRecruitmentQuestions', {
    //                     'fields': {
    //                         question: { 'en-US': 'Last Name' },
    //                         key: { 'en-US': 1 },
    //                         required: { 'en-US': true },
    //                     }
    //                 }).then(entry => {
    //                     returnData = entry;
    //                     console.log("Entry created successfully");
    //                 })

    //                 // environment.getEntries({
    //                 //     'content_type': 'developerRecruitmentQuestions'
    //                 // })
    //                 //     .then((entries) => {
    //                 //         // data = entries.items[0].fields                            
    //                 //         console.log(entries.items[0].fields);
    //                 //     })
    //             })
    //     })


    return {
        props: {
            client: []
        },
    };
}


// export async function saveData(data: any) {
//     const localClient = contentful.createClient({
//         accessToken: process.env.PERSONAL_ACCESS_TOKEN!
//     })

//     localClient.getSpace(process.env.CONTENTFUL_SPACE_ID!)
//         .then((space) => {
//             space.getEnvironment('master')
//                 .then((environment) => {
//                     environment.createEntry('developerRecruitmentQuestions', {
//                         'fields': {
//                             question: { 'en-US': 'Last Name' },
//                             key: { 'en-US': 1 },
//                             required: { 'en-US': true },
//                         }
//                     }).then(entry => {
//                         console.log("Entry created successfully");
//                     })

//                     // environment.getEntries({
//                     //     'content_type': 'developerRecruitmentQuestions'
//                     // })
//                     //     .then((entries) => {
//                     //         // data = entries.items[0].fields                            
//                     //         console.log(entries.items[0].fields);
//                     //     })
//                 })
//         })
// }

const Question = () => {
    const [question, setQuestion] = useState("");
    const [type, setType] = useState("");
    const [wordLimit, setWordLimit] = useState(0);
    const [required, setRequired] = useState(false);
    const [radioOptions, setRadioOptions] = useState([]);

    const router = useRouter();
    if (
        typeof window !== "undefined" &&
        localStorage.getItem("submitted") !== null
    ) {
        router.replace("/success");
    }

    const stringToBoolean = (str: String) => {
        if (str === "true") {
            return true;
        } else if (str == "false") {
            return false;
        } else {
            return false;
        }
    }

    async function saveData(data: any) {
        const localClient = contentful.createClient({
            accessToken: "CFPAT--J4DoFKGFT_1M7kFCDiB30wVpzkPYQu8cv6uI6Rtwlo"
        })

        const space = await localClient.getSpace('odv2pefe6lpx');
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
                console.log(data);
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
                        {/* <button onClick={e => setRadioOptions}>Add radio options</button> */}
                    </>
                }
                {type === "text" &&
                    <>
                        <br />
                        <label htmlFor="wordLimit">What is the word limit?</label>
                        <br />
                        <input type="number" id="wordLimit" onChange={e => setWordLimit(parseInt(e.target.value))} />
                    </>
                }

                {/* Dynamically create content based on what was selected above */}

                <br />
                <label htmlFor="required">Is it required?</label>
                <br />
                <select name="required" id="required" required onChange={e => setRequired(stringToBoolean(e.target.value))}>
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

export default Question;
