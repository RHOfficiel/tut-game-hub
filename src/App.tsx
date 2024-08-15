import Grid from "@mui/joy/Grid";
import NavBar from "./components/Nav/NavBar";
import GameGrid from "./components/Main/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/Main/PlatformSelector";
import { Box, Stack, Typography } from "@mui/joy";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/Main/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
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
                paddingBottom: 5,
              }}
            >
              <Typography paddingBottom={2} level="h1">
                {gameQuery.genre && gameQuery.platform
                  ? gameQuery.genre?.name +
                    " " +
                    gameQuery.platform?.name +
                    " Games"
                  : gameQuery.genre
                  ? gameQuery.genre?.name + " Games"
                  : gameQuery.platform
                  ? gameQuery.platform?.name + " Games"
                  : "Home Games"}
              </Typography>
              <Stack direction="row" spacing={2}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Stack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
