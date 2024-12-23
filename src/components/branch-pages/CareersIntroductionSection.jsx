import React from "react";
import { Box, Typography } from "@mui/material";

export default function CareersIntroductionSection() {
  return (
    <Box
      padding={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography textAlign='center' fontSize={{ xs: "2rem", md: "4rem" }}>
        Explore Opportunities
      </Typography>
      <Typography textAlign='justify' sx={{ maxWidth: 1200 }}>
        What’s destination next? Is it better technology? A better you? Or a
        better community of makers? Wherever you desire to go, we give you the
        tools, the techniques, and the teams to navigate the journey. So you’re
        inspired to build what’s next, ensure your career never stands still,
        and navigate further together. Move forward. Take the world with you.
      </Typography>
    </Box>
  );
}
