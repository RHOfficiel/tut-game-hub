import React from "react";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <Menu sx={{ minWidth: 160, "--ListItemDecorator-size": "48px" }}>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {" "}
            {platform.name}{" "}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
