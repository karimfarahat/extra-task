import { Grid, Typography } from "@mui/material";
import React from "react";
import WolrdImg from "./imgs/pngwing-1@2x.png";

//refrence for later, best layouting yet
export default function BranchesContainer() {
  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      alignItems="center"
      bgcolor="darkBlue"
      p={{ xs: 5, sm: 15 }}
      pb={{ xs: 5, sm: 50 }}
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sm={7}
        p={5}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          gutterBottom
          //   align="center"
          variant="h4"
          color="#fff"
          pb={3}
          sx={{ fontWeight: "bold" }}
        >
          Meet Our Team
        </Typography>
        <Typography
          //   align="center"
          fontSize={"14px"}
          fontWeight={"medium"}
          color="#fff"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5} justifyContent="center" alignItems="center">
        <img src={WolrdImg} className="img-fluid" alt="world" />
      </Grid>
    </Grid>
  );
}
