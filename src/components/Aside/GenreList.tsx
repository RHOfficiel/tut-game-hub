import {
  AspectRatio,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import useGenres from "../../hooks/useGenres";
import getCroppedImageURL from "../../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
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
                marginRight: 1, // Add some space between the image and text
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
          <Typography level="h4">{genre.name}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
