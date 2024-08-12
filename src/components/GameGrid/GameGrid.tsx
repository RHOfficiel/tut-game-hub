import { Typography } from "@mui/joy";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && (
        <Typography color="danger" level="body-md">
          {error}
        </Typography>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
