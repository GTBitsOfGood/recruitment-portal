import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText } from "@mui/material";

import styles from "../styles/Developer.module.css";

interface AppProps {
  id: string;
  label: string;
  radioOptions: Array<string>;
  hasOther?: boolean;
  required?: boolean;
}

export default function RadioCard({
  id,
  label,
  radioOptions,
  required = false,
  hasOther = false,
}: AppProps) {
  const [val, setVal] = React.useState<string | null>(null);
  const [error, setError] = React.useState(false);
  const [otherVal, setOtherVal] = React.useState<string>("");

  React.useEffect(() => setVal(localStorage.getItem(id)), [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
    localStorage.setItem(id, event.target.value);
    setError(false);
  };

  return (
    <Card
      variant={error ? "outlined" : undefined}
      sx={{
        width: { xs: "80vw", md: "50vw" },
        borderColor: "red",
        maxWidth: "40rem",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {label}
          &nbsp;
          {required && <span style={{ color: "red" }}>*</span>}
          <br />
        </Typography>

        <FormControl required>
          <RadioGroup
            id={id}
            name={id}
            onChange={handleChange}
            value={val}
            onFocus={() => {
              setError(val === "");
            }}
            onClick={() => {
              setError(!val);
            }}
          >
            {radioOptions.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
            {/* {hasOther && 
                        <div style={{ display: 'flex'}}>
                        <FormControlLabel value={otherVal} control={<Radio />} label="Other:" />
                            <TextField
                                id={id} 
                                variant="standard"
                                sx={{width: '100%'}}
                                value={otherVal}
                                onBlur={() => setError(otherVal.length === 0 && required)}
                                onChange={handleChange}
                            />
                        </div>} */}
          </RadioGroup>
          {error && <div className={styles.radioButtonError}>
            <ErrorOutlineIcon color="error"/>
            &nbsp;&nbsp;
            <FormHelperText
              error={true}
              className={styles.radioButtonErrorText}
            >
              This is a required question
            </FormHelperText>
          </div>}
        </FormControl>
      </CardContent>
    </Card>
  );
}
