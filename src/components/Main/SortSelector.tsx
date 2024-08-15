import { ArrowDropDown } from "@mui/icons-material";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import React from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Dropdown>
      <MenuButton variant="soft" endDecorator={<ArrowDropDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <Menu
        variant="soft"
        sx={{ minWidth: 200, "--ListItemDecorator-size": "48px" }}
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default SortSelector;
