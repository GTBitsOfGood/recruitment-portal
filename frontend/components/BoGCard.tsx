import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard() {
  return (
    <Card sx={{ width: { xs: "80vw", md: "50vw" }, maxWidth: "40rem" }}>
      <CardMedia
        component="img"
        height="200vh"
        image="/brand.png"
        alt="green iguana"
      />
    </Card>
  );
}
