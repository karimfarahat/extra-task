import React from "react";
import { Grid, Typography } from "@mui/material";

export default function CopyrightContainer() {
  return (
    <Grid item xs={6}>
      <Typography
        align="center"
        color="greyColor"
        fontSize="14px"
        className="semiBold"
        p={3}
      >
        Made With Love By Figmaland All Right Reserved
      </Typography>
    </Grid>
  );
}
