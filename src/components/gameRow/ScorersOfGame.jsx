import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { arrayOf, string } from "prop-types";
import scorerType from "../../models/scorerType";
export default function ScorersOfGame({ teamName, scorers }) {
  return (
    <Paper
      sx={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f2f2f2",
        color: "#333",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {teamName}
      </Typography>

      {scorers?.map((scorer, index) => (
        <Typography variant="subtitle2" key={index}>
          {scorer.name} ({scorer.minute}')
        </Typography>
      ))}
    </Paper>
  );
}

ScorersOfGame.propTypes = {
  teamName: string,
  scorers: arrayOf(scorerType),
};
