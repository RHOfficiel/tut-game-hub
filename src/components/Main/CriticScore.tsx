import { Chip, ChipProps } from "@mui/joy";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color: ChipProps["color"] =
    score > 80
      ? "success"
      : score > 60
      ? "warning"
      : score > 40
      ? "danger"
      : "neutral"; // Provide a default value to avoid empty string

  return (
    <Chip
      color={color}
      sx={{
        "--Chip-minHeight": "24px",
        "--Chip-radius": "5px",
        "--Chip-paddingInline": "10px",
      }}
    >
      {score}
    </Chip>
  );
};

export default CriticScore;
