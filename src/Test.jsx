import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Test() {
  const handlePageChange = (event, value) => {
    console.log(`User pressed page ${value}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={2} onChange={handlePageChange} />
    </Stack>
  );
}
