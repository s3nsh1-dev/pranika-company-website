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
  fontSize: "1.2rem",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
}));

export const OneRemBoldSpan = styled("span")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.9em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

export const BoldSpan = styled("span")({
  fontWeight: "bold",
});

export const SecondaryHeadingSpanText = styled("span")(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.1em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
}));

export const ClampText = styled(Typography)(({ theme }) => ({
  // text changes are based on view port
  fontSize: "clamp(12px, 2vw, 16px)",
  textAlign: "justify",
}));
