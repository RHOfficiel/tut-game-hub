import Grid from "@mui/joy/Grid";
import NavBar from "./components/Nav/NavBar";
import GameGrid from "./components/Main/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/Main/PlatformSelector";
import { Box, Stack, Typography } from "@mui/joy";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} lg={12}>
          <NavBar />
        </Grid>
        <Grid
          xs={0}
          lg={2}
          sx={{
            display: { xs: "none", lg: "block" }, // hide on screens smaller than lg
          }}
        >
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </Grid>
        <Grid xs={12} lg={10}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Box
              sx={{
                paddingX: 5,
              }}
            >
              <Typography paddingBottom={3} level="h1">
                {selectedGenre ? selectedGenre?.name : "Home"}
              </Typography>
              <Stack direction="row" spacing={2}>
                <PlatformSelector />
                <PlatformSelector />
              </Stack>
            </Box>
            <GameGrid selectedGenre={selectedGenre} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
