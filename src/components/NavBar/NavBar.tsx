import {
  styled,
  Sheet,
  Stack,
  Card,
  CardCover,
  CardContent,
  Typography,
} from "@mui/joy";

import logo from "/src/assets/logo.webp";

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" padding={1}>
      <Card
        sx={{
          width: 60, // Set the width of the Card to 60px
          height: 60, // Set the height of the Card to 60px
          borderRadius: "50%", // Optional: Make the Card round (for a circular logo)
          overflow: "hidden", // Ensure the image fits within the Card
        }}
      >
        <CardCover sx={{ width: "auto" }}>
          <img
            src={logo}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Maintain aspect ratio of the image
            }}
          />
        </CardCover>
      </Card>
      <Typography level="h4" sx={{ marginLeft: 2 }}>
        My Application
      </Typography>
    </Stack>
  );
};

export default NavBar;
