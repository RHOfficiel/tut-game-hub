import { useColorScheme } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import ModeToggle from "./components/ModeToggle/ModeToggle";
import NavBar from "./components/NavBar/NavBar";

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
          bgcolor={"Gold"}
          sx={{
            display: { xs: "none", lg: "block" }, // hide on screens smaller than lg
          }}
        >
          Aside
        </Grid>
        <Grid xs={12} lg={6} bgcolor={"dodgerblue"}>
          Main
        </Grid>
      </Grid>
    </>
  );
}

export default App;
