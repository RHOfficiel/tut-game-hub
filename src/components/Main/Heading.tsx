import { Typography } from "@mui/joy";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } ${
    !gameQuery.platform?.name && !gameQuery.genre?.name ? "Home Games" : "Games"
  } `;

  return (
    <Typography paddingBottom={2} level="h1">
      {heading}
    </Typography>
  );
};

export default Heading;
