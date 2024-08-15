import { Typography } from "@mui/joy";
import { Genre } from "../../hooks/useGenres";
import { Platform } from "../../hooks/useGames";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const Heading = ({ selectedGenre, selectedPlatform }: Props) => {
  return (
    <Typography paddingBottom={2} level="h1">
      {selectedGenre && selectedPlatform
        ? selectedGenre?.name + " " + selectedPlatform.name + " Games"
        : selectedGenre
        ? selectedGenre?.name + " Games"
        : selectedPlatform
        ? selectedPlatform?.name + " Games"
        : "Home Games"}
    </Typography>
  );
};

export default Heading;
