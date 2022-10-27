import { Box, Button, Input, InputLabel, List, ListItem, OutlinedInput, Select, Typography, MenuItem, Card, Modal } from "@mui/material";
import * as contentful from 'contentful-management';
import { useEffect, useState } from "react";
import CreateQuestion from "./CreateQuestion";
import EditQuestion from "./EditQuestion";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const QuestionCard = () => {
    const [key, setKey] = useState(0);
    const [entries, setEntries] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [reloadCard, setReloadCard] = useState(false);

    async function deleteQuestion(id: string) {
        const localClient = contentful.createClient({
            accessToken: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN!
        })

        const space = await localClient.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID!);
        const environment = await space.getEnvironment("master");

        const entry = await environment.getEntry(id)
        const res = await entry.delete();
    }

    useEffect(() => {
        async function connectDB() {
            const localClient = contentful.createClient({
                accessToken: "CFPAT--J4DoFKGFT_1M7kFCDiB30wVpzkPYQu8cv6uI6Rtwlo"
            })

            // process.env.REACT_APP_PERSONAL_ACCESS_TOKEN!
            // process.env.REACT_APP_CONTENTFUL_SPACE_ID!

            const space = await localClient.getSpace("odv2pefe6lpx");
            const environment = await space.getEnvironment("master");
            const entries = await environment.getEntries({
                content_type: "developerRecruitmentQuestions",
            });

            entries.items.sort((a, b) => a.fields.key["en-US"] - b.fields.key["en-US"])
            setEntries(entries.items);
            setLoaded(true);
        }

        connectDB().catch(console.error)
        setReloadCard(false);
    }, [])

    return (
        <>
            <CreateQuestion />
            <Typography>Preview and edit the questions:</Typography>
            {
                loaded && entries.map((entry) => {
                    if (typeof entry.fields.radioOptions == "undefined") {
                        entry.fields.radioOptions = { ["en-US"]: [] }
                    }
                    return (
                        <Card>
                            <Box>
                                <Typography>Question {entry.fields.key["en-US"]}: {entry.fields.question["en-US"]}</Typography>
                                <Typography>Required: {entry.fields.required["en-US"] ? 'Yes' : 'No'}</Typography>

                                {entry.fields.type["en-US"] == "text" && <Typography>Word Limit: {entry.fields.wordLimit["en-US"] > 0 ? entry.fields.wordLimit["en-US"] : 'N/A'}</Typography>}
                            </Box>

                            {entry.fields.type == 'radio' && entry.fields.radioOptions["en-US"].map((option) => {
                                return <ListItem key="{option}" style={{ display: "list-item" }}>{option}</ListItem>
                            })}

                            <Button onClick={e => setOpen(true)}>Edit Question {entry.fields.key["en-US"]}</Button>
                            <Modal
                                open={open}
                                onClose={e => setOpen(false)}
                                id={entry.sys.id}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                sx={{ overflow: 'scroll' }}
                            >
                                <Box sx={style}>
                                    <EditQuestion
                                        questionNumberIn={entry.fields.key["en-US"]}
                                        questionIn={entry.fields.question["en-US"]}
                                        typeIn={entry.fields.type["en-US"]}
                                        wordLimitIn={entry.fields.wordLimit["en-US"]}
                                        radioOptionsIn={entry.fields.radioOptions["en-US"]}
                                        requiredIn={entry.fields.required["en-US"]}
                                        questionId={entry.sys.id}
                                    />
                                </Box>
                            </Modal>

                            <Button onClick={e => deleteQuestion(entry.sys.id)}>Delete Question {entry.fields.key["en-US"]}</Button>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default QuestionCard