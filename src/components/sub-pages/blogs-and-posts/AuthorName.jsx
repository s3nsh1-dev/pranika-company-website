import React from "react";
import { Typography } from "@mui/material";

const AuthorName = ({ author }) => {
  return (
    <Typography textAlign='end' fontSize='x-small' sx={{ color: "gray" }}>
      author: <i>{author}</i>
    </Typography>
  );
};

export default AuthorName;
