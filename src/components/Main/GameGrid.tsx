import { Box, Typography } from "@mui/joy";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

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
          p: 2,
          m: 0,
          justifyContent: "center",
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
    </>
  );
};

export default GameGrid;
