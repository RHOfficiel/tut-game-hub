import { Box, Typography } from "@mui/joy";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error)
    return (
      <Typography color="danger" level="body-md">
        {error}
      </Typography>
    );

  return (
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
  );
};

export default GameGrid;
