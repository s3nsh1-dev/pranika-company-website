import React from "react";
import { useTheme } from "@mui/material/styles";

export default function PrimaryColorHex() {
  const theme = useTheme();
  const primaryColorHex = theme.palette.primary.main;

  return (
    <div>
      <p>Primary Color Hex: {primaryColorHex}</p>
    </div>
  );
}
