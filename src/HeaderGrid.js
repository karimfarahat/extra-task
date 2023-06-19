import { Stack, Grid, Box, Typography } from "@mui/material";
import React from "react";

import PeopleIcon from "./icons/icn-settings-icnlg.svg";

export default function HeaderGrid() {
  return (
    <Grid
      item
      xs={6}
      sm={8}
      container
      columnSpacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        // backgroundColor: { xs: "transparent", sm: "#fff" },
        // bottom: { sm: -60 },
        mb: -6,
        // left: { sm: 0 },

        // padding: { xs: 15, sm: 3 },
      }}
    >
      <Grid
        item
        container
        // direction={"column"}
        xs={12}
        sm={3}
        spacing={1}
        sx={{ backgroundColor: "#fff" }}
      >
        <Grid item xs={3}>
          <img src={PeopleIcon} className="img-fluid" alt="icon" />
        </Grid>
        <Grid item xs={9}>
          <Typography color="darkBlue" variant="h6" sx={{ fontWeight: "bold" }}>
            1.5K
          </Typography>
          <Typography variant="body1" className="semiBold" color="greyColor">
            HAPPY CUSTOMERS
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        // direction={"column"}
        xs={12}
        sm={3}
        spacing={1}
        sx={{ backgroundColor: "#fff" }}
      >
        <Grid item xs={3}>
          <img src={PeopleIcon} className="img-fluid" alt="icon" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" color="darkBlue" sx={{ fontWeight: "bold" }}>
            3K
          </Typography>
          <Typography variant="body1" className="semiBold" color="greyColor">
            CASES DONE
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={1}
        // direction={"column"}
        xs={12}
        sm={3}
        sx={{ backgroundColor: "#fff" }}
      >
        <Grid item xs={3}>
          <img src={PeopleIcon} className="img-fluid" alt="icon" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" color="darkBlue" sx={{ fontWeight: "bold" }}>
            45
          </Typography>
          <Typography variant="body1" className="semiBold" color="greyColor">
            AWARD WINNING
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        // direction={"column"}
        xs={12}
        sm={3}
        spacing={1}
        sx={{ backgroundColor: "#fff" }}
        // justifyContent={"center"}
        // alignItems={"center"}
      >
        <Grid item xs={3}>
          <img src={PeopleIcon} className="img-fluid" alt="icon" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" color="darkBlue" sx={{ fontWeight: "bold" }}>
            12+
          </Typography>
          <Typography variant="body1" className="semiBold" color="greyColor">
            COUNTRIES WORLDWIDE
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
