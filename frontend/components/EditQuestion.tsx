import { useRouter } from "next/router";
import * as contentful from 'contentful-management';
import { useEffect, useState } from "react";
import { Box, Button, Input, InputLabel, List, ListItem, OutlinedInput, Select, Typography, MenuItem, Card } from "@mui/material";

const EditQuestion = ({ questionNumberIn, questionIn, typeIn, wordLimitIn, radioOptionsIn, requiredIn, questionId }) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [question, setQuestion] = useState("");
    const [type, setType] = useState("");
    const [wordLimit, setWordLimit] = useState(100);
    const [required, setRequired] = useState(false);
    const [radioOptions, setRadioOptions] = useState<String[]>([]);
    const [newRadio, setNewRadio] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setQuestionNumber(questionNumberIn);
        setQuestion(questionIn);
        setType(typeIn);
        if (typeof radioOptionsIn == "undefined") {
            setRadioOptions([])
        } else {
            setRadioOptions(radioOptionsIn);
        }
        setWordLimit(wordLimitIn);
        setRequired(requiredIn);
        setId(questionId);
    }, [])

    const router = useRouter();
    if (
        typeof window !== "undefined" &&
        localStorage.getItem("submitted") !== null
    ) {
        router.replace("/success");
    }

    async function saveData(data: any) {
        const res = await fetch("/api/contentful_connection", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    return (
        <Card component="form" onSubmit={(e: any) => {
            e.preventDefault();
            const data = { question, type, wordLimit, required, radioOptions, questionNumber, id, radioOptionsLength: radioOptions.length }
            saveData(data);
        }}>

            <>
                <InputLabel htmlFor="questionNumber">Question Number</InputLabel>
                <OutlinedInput type="number" id="questionTitle" value={questionNumber} required onChange={e => setQuestionNumber(+e.target.value)} />
            </>

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
                    }
                    }>Add radio option</Button>
                </>
            }
            {
                (type == "radio") &&
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

export default EditQuestion;
