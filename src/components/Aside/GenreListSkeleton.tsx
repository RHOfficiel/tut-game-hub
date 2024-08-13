import {
  AspectRatio,
  List,
  ListItem,
  ListItemDecorator,
  Skeleton,
  Typography,
} from "@mui/joy";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <List>
      {skeletons.map((genre) => (
        <ListItem key={genre} sx={{ paddingY: 1 }}>
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
              <Skeleton variant="overlay" />
            </AspectRatio>
          </ListItemDecorator>
          <Typography level="h4">
            <Skeleton>Adventure Element</Skeleton>
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
