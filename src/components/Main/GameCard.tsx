import React from "react";
import { Game } from "../../hooks/useGames";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Stack,
  Typography,
} from "@mui/joy";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";

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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <PlatFormIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Stack>

          <Typography level="title-lg">{game.name}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
