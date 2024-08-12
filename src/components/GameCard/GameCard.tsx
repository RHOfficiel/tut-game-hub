import React from "react";
import { Game } from "../../hooks/useGames";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={game.background_image}
              /* src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x" */
              loading="lazy"
              alt={game.name}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{game.name}</Typography>
          <Typography level="body-sm">California</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
