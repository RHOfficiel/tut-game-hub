import { Box, Typography } from "@mui/joy";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && (
        <Typography color="danger" level="body-md">
          {error}
        </Typography>
      )}
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          m: 0,
        }}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
    </>
  );
};

export default GameGrid;
