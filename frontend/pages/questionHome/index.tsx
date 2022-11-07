import CreateQuestion from "../../components/CreateQuestion"
import { Box, Button, Input, InputLabel, List, ListItem, OutlinedInput, Select, Typography, MenuItem, Card, Modal } from "@mui/material";
import QuestionCard from "../../components/QuestionCard";

const Question = () => {
    return (
        <Box>
            <Typography variant="h3">Create a new form</Typography>
            <InputLabel>What is the name of the form?</InputLabel>
            <OutlinedInput />
            <Button>
                Create
            </Button>

            <Typography variant="h3">Your forms:</Typography>
            <QuestionCard />
        </Box>
    )
}

export default Question