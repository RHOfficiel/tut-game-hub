import Grid from "@mui/joy/Grid";
import NavBar from "./components/Nav/NavBar";
import GameGrid from "./components/Main/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

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
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </Grid>
        <Grid xs={12} lg={10}>
          <GameGrid selectedGenre={selectedGenre} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
