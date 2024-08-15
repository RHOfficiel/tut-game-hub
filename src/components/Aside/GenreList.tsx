import {
  AspectRatio,
  Link,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageURL from "../../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Typography paddingX={2} paddingBottom={2} level="h2">
        Genres
      </Typography>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} sx={{ paddingY: 1 }}>
            <ListItemDecorator sx={{ minWidth: 32, minHeight: 32 }}>
              <AspectRatio
                ratio="1"
                sx={{
                  width: 48, // Ensure AspectRatio container is exactly 32x32
                  height: 48,
                  borderRadius: "20%", // Optional: to make it circular
                  overflow: "hidden", // Make sure the image is contained within
                  marginRight: 2, // Add some space between the image and text
                }}
              >
                <img
                  src={getCroppedImageURL(genre.image_background)}
                  srcSet={
                    getCroppedImageURL(genre.image_background) +
                    "?auto=format&fit=crop"
                  }
                  loading="lazy"
                  alt={genre.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensures the image covers the container
                  }}
                />
              </AspectRatio>
            </ListItemDecorator>

            <Link
              overlay
              underline="none"
              onClick={() => onSelectGenre(genre)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                level={genre.id === selectedGenre?.id ? "h4" : "body-lg"}
              >
                {genre.name}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
