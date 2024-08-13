import Grid from "@mui/joy/Grid";
import NavBar from "./components/Nav/NavBar";
import GameGrid from "./components/Main/GameGrid";

function App() {
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
          Aside
        </Grid>
        <Grid xs={12} lg={10}>
          <GameGrid />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
