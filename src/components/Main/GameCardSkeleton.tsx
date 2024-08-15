import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";

const GameCardSkeleton = () => {
  return (
    <>
      <Card sx={{ width: 320, minHeight: 370 }}>
        <CardOverflow>
          <AspectRatio ratio={16 / 11}>
            <Skeleton variant="overlay" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
            >
              <Typography>
                <Skeleton>111</Skeleton>
              </Typography>
              <Typography>
                <Skeleton>111</Skeleton>
              </Typography>
              <Typography>
                <Skeleton>111</Skeleton>
              </Typography>
            </Stack>

            <Typography>
              <Skeleton>11111</Skeleton>
            </Typography>
          </Stack>

          <Typography level="title-lg">
            <Skeleton>Grand Theft Auto Loader</Skeleton>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
