import React from "react";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>Platforms</MenuButton>
      <Menu sx={{ minWidth: 160, "--ListItemDecorator-size": "48px" }}>
        {data.map((platform) => (
          <MenuItem key={platform.id}> {platform.name} </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
