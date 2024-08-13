import React from "react";
import { Game } from "../../hooks/useGames";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import PlatFormIconList from "../PlatFormIconList/PlatFormIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={game.background_image} loading="lazy" alt={game.name} />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Typography level="title-lg">{game.name}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
