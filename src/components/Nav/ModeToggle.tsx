import { useEffect, useState } from "react";
import { useColorScheme as useJoyColorScheme } from "@mui/joy/styles";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";

import { IconButton } from "@mui/joy";
import { DarkMode, LightMode } from "@mui/icons-material";

const ModeToggle = () => {
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // prevent server-side rendering mismatch
  }
  return (
    <IconButton
      aria-label="Toggle DarkMode"
      sx={{
        width: 50, // Explicitly set the width of the IconButton
        height: 50, // Explicitly set the height of the IconButton
        fontSize: 28, // Explicitly set the font size for the icon inside
      }}
      onClick={() => {
        setMaterialMode(mode === "dark" ? "light" : "dark");
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {mode === "dark" ? (
        <DarkMode /> // Explicitly set the icon size
      ) : (
        <LightMode /> // Explicitly set the icon size
      )}
    </IconButton>
  );
};

export default ModeToggle;
