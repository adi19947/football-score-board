import { Grid, Button } from "@mui/material";
import { func } from "prop-types";
import React from "react";
import gameType from "../../models/gameType";
import GameDetails from "./GameDetails";
import GameImage from "./GameImage";

export default function GameRowComponent({ game, showTeams }) {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#F5F5F5",
          mt: 5,
          mb: 5,
        }}
      >
        <Grid item xs={3} sx={{ p: "10px" }}>
          <GameImage imagePath={game.img} />
        </Grid>

        <Grid item xs={9} sx={{ p: "10px" }}>
          <GameDetails details={game.details} />
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              showTeams(game.details.nameTeam1, game.details.nameTeam2);
            }}
          >
            click here
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

GameRowComponent.propTypes = {
  game: gameType,
  showTeams: func,
};
