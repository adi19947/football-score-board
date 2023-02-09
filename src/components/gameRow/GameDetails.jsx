import { Paper, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import detailsType from "../../models/detailsType";
import ScorersOfGame from "./ScorersOfGame";

export default function GameDetails({ details }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        style={{
          padding: "16px",
          textAlign: "center",
          color: "#333",
          width: "80%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {details.nameTeam1} vs {details.nameTeam2}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {details.goalTeam1} - {details.goalTeam2}
        </Typography>
      </Paper>
      <Grid container spacing={3} sx={{ mt: "16px" }}>
        <Grid item xs={6}>
          <ScorersOfGame
            scorers={details.goalScorers1}
            teamName={details.nameTeam1}
          />
        </Grid>
        <Grid item xs={6}>
          <ScorersOfGame
            scorers={details.goalScorers2}
            teamName={details.nameTeam2}
          />
        </Grid>
      </Grid>
    </div>
  );
}

GameDetails.propTypes = {
  details: detailsType,
};
