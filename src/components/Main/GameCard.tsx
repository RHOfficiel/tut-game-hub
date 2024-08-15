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
import getCroppedImageURL from "../../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card sx={{ width: 320, height: 370 }}>
        <CardOverflow>
          <AspectRatio ratio={16 / 11}>
            <img
              src={getCroppedImageURL(game.background_image)}
              srcSet={
                getCroppedImageURL(game.background_image) +
                "?auto=format&fit=crop&w=800"
              }
              loading="lazy"
              alt={game.name}
            />
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
          <Emoji rating={game.rating_top} />
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
