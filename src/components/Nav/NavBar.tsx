import { Stack, Card, CardCover } from "@mui/joy";

import logo from "/src/assets/logo.webp";
import ModeToggle from "./ModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Stack direction="row" alignItems="center" padding={1}>
      <Card
        sx={{
          width: 60, // Set the width of the Card to 60px
          height: 60, // Set the height of the Card to 60px
          borderRadius: "50%", // Optional: Make the Card round (for a circular logo)
          overflow: "hidden", // Ensure the image fits within the Card
          border: "0px",
        }}
      >
        <CardCover>
          <img
            src={logo}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </CardCover>
      </Card>
      <SearchInput onSearch={onSearch} sx={{ flexGrow: 1, paddingX: 5 }} />
      <ModeToggle />
    </Stack>
  );
};

export default NavBar;
