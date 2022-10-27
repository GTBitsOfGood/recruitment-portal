import { useRouter } from "next/router";
import * as contentful from 'contentful-management';
import { useState } from "react";
import { Box, Button, Input, InputLabel, List, ListItem, OutlinedInput, Select, Typography, MenuItem, Card } from "@mui/material";

const CreateQuestion = () => {
    const [question, setQuestion] = useState("");
    const [type, setType] = useState("");
    const [wordLimit, setWordLimit] = useState(100);
    const [required, setRequired] = useState(false);
    const [radioOptions, setRadioOptions] = useState<String[]>([]);
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
            accessToken: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN!
        })

        const space = await localClient.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID!);
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
                    key: { "en-US": length + 1 },
                    type: { "en-US": data.type },
                    required: { "en-US": data.required },
                    wordLimit: { "en-US": data.wordLimit },
                    radioOptions: { "en-US": data.radioOptions },
                },
            }
        );

        if (response) {
            setQuestion("");
            setRequired(false);
            setWordLimit(0);
            setNewRadio("");
            setRadioOptions([""]);
            setType("");
        }
    }

    return (
        <Card component="form" onSubmit={(e: any) => {
            e.preventDefault();
            const data = { question, type, wordLimit, required, radioOptions }
            saveData(data);
        }}>
            <InputLabel htmlFor="questionTitle">Question Title</InputLabel>
            <OutlinedInput type="text" id="questionTitle" value={question} required onChange={e => setQuestion(e.target.value)} />

            <InputLabel htmlFor="types">Response type</InputLabel>
            <Select name="types" id="types" value={type} onChange={e => setType(e.target.value)}>
                <MenuItem value="radio">Radio</MenuItem>
                <MenuItem value="text">Text</MenuItem>
            </Select>

            {type === "radio" &&
                <>
                    <InputLabel htmlFor="addRadio">Add radio options</InputLabel>
                    <OutlinedInput type="text" value={newRadio} id="addRadio" onChange={e => setNewRadio(e.target.value)} />
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if (radioOptions[0] == "") {
                            setRadioOptions([newRadio]);
                        } else {
                            setRadioOptions([...radioOptions, newRadio]);
                        }
                        setNewRadio("");
                    }
                    }>Add radio option</Button>
                </>
            }
            {
                (radioOptions.length > 0 && radioOptions[0] != "") &&
                <List>
                    {
                        radioOptions.map((option) => <ListItem key="{option}" style={{ display: "list-item" }}>• {option}</ListItem>)
                    }
                </List>
            }


            {type === "text" &&
                <>
                    <InputLabel htmlFor="wordLimit">What is the word limit?</InputLabel>
                    <Input type="number" id="wordLimit" value={wordLimit} onChange={e => setWordLimit(parseInt(e.target.value))} />
                </>
            }

            <InputLabel htmlFor="required">Is it required?</InputLabel>
            <Select label="required" value={required} labelId="required-label" required onChange={e => {
                const isTrueSet: boolean = e.target.value === 'true' ? true : false;
                setRequired(isTrueSet);
            }
            }>
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
            </Select>
            <br />

            <Button type="submit">Submit</Button>
        </Card >
    );
};

export default CreateQuestion;
