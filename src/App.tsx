import Grid from "@mui/joy/Grid";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} lg={12}>
          <NavBar />
        </Grid>
        <Grid
          xs={0}
          lg={6}
          sx={{
            display: { xs: "none", lg: "block" }, // hide on screens smaller than lg
          }}
        >
          Aside
        </Grid>
        <Grid xs={12} lg={6}>
          <GameGrid />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
