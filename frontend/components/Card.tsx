import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface AppProps {
  id: string;
  label: string;
  required?: boolean;
}

export default function CustomCard({ id, label, required = false }: AppProps) {
  let defaultVal = null;
  if (!(typeof window === "undefined")) {
    defaultVal = localStorage.getItem(id) ? localStorage.getItem(id) : "";
  }
  const [val, setVal] = React.useState(defaultVal ? defaultVal : "");
  const [error, setError] = React.useState(false);

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
          <br />
        </Typography>
        <TextField
          id={id}
          error={error}
          helperText={
            error && (
              <Typography
                sx={{
                  fontSize: 12,
                  paddingTop: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ErrorOutlineIcon />
                &nbsp;&nbsp;<div>This is a required question</div>
              </Typography>
            )
          }
          variant="standard"
          sx={{ width: "50%" }}
          value={val}
          onBlur={() => setError(val.length === 0 && required)}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
}
