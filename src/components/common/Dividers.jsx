import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const CustomDividerOne = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderWidth: "2px", // Make it bold
  maxWidth: "550px",
}));
