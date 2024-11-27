import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const PageTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  margin: "10px",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));
export const PrimaryHeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
}));
export const SecondaryHeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
}));

export const BoldSpan = styled("span")({
  fontWeight: "bold",
});
