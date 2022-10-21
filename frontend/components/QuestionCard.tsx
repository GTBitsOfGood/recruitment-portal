import { Box, Button, Input, InputLabel, List, ListItem, OutlinedInput, Select, Typography, MenuItem, Card, Modal } from "@mui/material";
import * as contentful from 'contentful-management';
import { useEffect, useState } from "react";
import CreateQuestion from "./CreateQuestion";

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


    useEffect(() => {
        async function connectDB() {
            const localClient = contentful.createClient({
                accessToken: 
            })

            // process.env.REACT_APP_PERSONAL_ACCESS_TOKEN!
            // process.env.REACT_APP_CONTENTFUL_SPACE_ID!

            const space = await localClient.getSpace();
            const environment = await space.getEnvironment("master");
            const entries = await environment.getEntries({
                content_type: "developerRecruitmentQuestions",
            });
            const length = entries.items.length;
            // entries.items.map((entry) => {
            //     console.log(entry);
            // })

            entries.items.sort((a, b) => a.fields.key["en-US"] - b.fields.key["en-US"])
            setEntries(entries.items);
            setLoaded(true);
            setKey(length);
        }

        connectDB().catch(console.error)
    }, [])

    return (
        <>
            {
                loaded && entries.map((entry) => {
                    return (
                        <Card>
                            <Box>
                                <Typography>Question {entry.fields.key["en-US"] + 1}: {entry.fields.question["en-US"]}</Typography>
                                <Typography>Required: {entry.fields.required["en-US"] ? 'Yes' : 'No'}</Typography>

                                <Typography>Word Limit: {entry.fields.wordLimit["en-US"] > 0 ? entry.fields.wordLimit["en-US"] : 'N/A'}</Typography>
                            </Box>

                            {entry.fields.radioOptions && entry.fields.radioOptions["en-US"].map((option) => {
                                return <ListItem key="{option}" style={{ display: "list-item" }}>{option}</ListItem>
                            })}


                            <Button onClick={e => setOpen(true)}>Edit Question {entry.fields.key["en-US"] + 1}</Button>
                            <Modal
                                open={open}
                                onClose={e => setOpen(false)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <CreateQuestion toSetQuestionNumber={true} />
                                </Box>
                            </Modal>


                            <Button>Delete Question {entry.fields.key["en-US"] + 1}</Button>

                        </Card>)
                })
                // entries[9].fields.question["en-US"]
            }

        </>
    )
}

export default QuestionCard