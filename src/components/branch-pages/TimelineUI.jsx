import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function TimelineUI() {
  const [dashes, setDashes] = useState("");

  useEffect(() => {
    const updateDashes = () => {
      const screenWidth = window.innerWidth;
      const dashCount = Math.floor(screenWidth / 200); // Adjust the divisor to change dash density
      setDashes("━".repeat(dashCount));
    };

    updateDashes();
    window.addEventListener("resize", updateDashes);

    return () => window.removeEventListener("resize", updateDashes);
  }, []);
  return (
    <Box display='flex' justifyContent={`center`}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>{dashes}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ writingMode: "vertical-lr" }}>━━</Typography>
          <Button
            variant='outlined'
            sx={{ margin: "10px", border: "2px solid", fontWeight: "bold" }}
            color='error'
          >
            1
          </Button>
          <Typography sx={{ writingMode: "vertical-lr" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
        </Box>
        <Typography>{dashes}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>━━━━━━━</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ writingMode: "vertical-lr" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Button
            variant='outlined'
            sx={{ margin: "10px", border: "2px solid", fontWeight: "bold" }}
            color='warning'
          >
            2
          </Button>
          <Typography sx={{ writingMode: "vertical-lr" }}>━━</Typography>
        </Box>
        <Typography>{dashes}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>━━━━━━━</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ writingMode: "vertical-lr" }}>━━</Typography>
          <Button
            variant='outlined'
            sx={{ margin: "10px", border: "2px solid", fontWeight: "bold" }}
            color='success'
          >
            3
          </Button>
          <Typography sx={{ writingMode: "vertical-lr" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
        </Box>
        <Typography>{dashes}</Typography>
      </Box>
    </Box>
  );
}
