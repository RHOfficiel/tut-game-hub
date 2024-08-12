import { useColorScheme } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import ModeToggle from "./components/ModeToggle/ModeToggle";

function App() {
  return (
    <>
      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
        <Grid xs={12} lg={12} bgcolor={"coral"}>
          Nav
        </Grid>
        <Grid xs={0} lg={6} bgcolor={"Gold"}>
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
