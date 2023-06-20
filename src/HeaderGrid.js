import { Stack, Grid, Typography } from "@mui/material";
import React from "react";

import PeopleIcon from "./icons/icn-settings-icnlg.svg";
import BookIcon from "./icons/icn-settings-icnlg2.svg";
import MedalIcon from "./icons/icn-settings-icnlg3.svg";
import MarketIcon from "./icons/icn-settings-icnlg9.svg";

export default function HeaderGrid() {
  return (
    // <Box>
    <Grid
      item
      xs={8}
      // sm={8}
      container
      // spacing={{ xs: 5, sm: 0 }}
      spacing={2}
      rowSpacing={{ xs: 3, sm: 0 }}
      // columnSpacing={{ xs: 0, sm: 3 }}
      // minWidth={{ sm: 800 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: { xs: "transparent", sm: "#fff" },
        // bottom: { sm: -60 },
        pr: 2,
        mb: -28,
        pb: 2,
        pt: 2,
        // pl: 0,
        // left: { sm: 0 },

        // padding: { xs: 15, sm: 3 },
      }}
    >
      <Grid
        item
        // direction={"column"}
        xs={8}
        sm={3}
        // container
        alignItems="center"
        justifyContent="center"

        // columnSpacing={6}
      >
        <Stack
          // useFlexGap
          spacing={3}
          direction={"row"}
          bgcolor={"#fff"}
          // maxWidth={200}
        >
          {/* <Grid item xs={3}> */}
          <img src={PeopleIcon} className="img-thumb" alt="icon" />
          {/* </Grid> */}
          <Stack>
            {/* <Grid item xs={9}> */}
            <Typography
              color="darkBlue"
              variant="h6"
              sx={{ fontWeight: "bold" }}
            >
              1.5K
            </Typography>
            <Typography variant="body1" className="semiBold" color="greyColor">
              HAPPY CUSTOMERS
            </Typography>
          </Stack>
          {/* </Grid> */}
        </Stack>
      </Grid>
      <Grid
        item
        // direction={"column"}
        xs={8}
        sm={3}
        // container
        columnSpacing={6}
      >
        <Stack
          spacing={3}
          direction={"row"}
          bgcolor={"#fff"}
          // maxWidth={200}
        >
          {/* <Grid item xs={3}> */}
          <img src={MarketIcon} className="img-thumb" alt="icon" />
          {/* </Grid> */}
          <Stack>
            {/* <Grid item xs={9}> */}
            <Typography
              variant="h6"
              color="darkBlue"
              sx={{ fontWeight: "bold" }}
            >
              3K
            </Typography>
            <Typography variant="body1" className="semiBold" color="greyColor">
              CASES DONE
            </Typography>
          </Stack>
          {/* </Grid> */}
        </Stack>
      </Grid>
      <Grid
        item
        // direction={"column"}
        xs={8}
        sm={3}
        // container
        columnSpacing={6}
      >
        <Stack
          spacing={3}
          direction={"row"}
          bgcolor={"#fff"}
          // maxWidth={200}
        >
          {/* <Grid item xs={3}> */}
          <img src={BookIcon} className="img-thumb" alt="icon" />
          {/* </Grid> */}
          <Stack>
            {/* <Grid item xs={9}> */}
            <Typography
              variant="h6"
              color="darkBlue"
              sx={{ fontWeight: "bold" }}
            >
              45
            </Typography>
            <Typography variant="body1" className="semiBold" color="greyColor">
              AWARD WINNING
            </Typography>
          </Stack>
          {/* </Grid> */}
        </Stack>
      </Grid>
      <Grid
        item
        // direction={"column"}
        xs={8}
        sm={3}
        // container
        columnSpacing={6}
      >
        <Stack
          spacing={3}
          direction={"row"}
          bgcolor={"#fff"}
          // maxWidth={200}
        >
          {/* <Grid item xs={3}> */}
          <img src={MedalIcon} className="img-thumb" alt="icon" />
          {/* </Grid> */}
          <Stack>
            {/* <Grid item xs={9}> */}
            <Typography
              variant="h6"
              color="darkBlue"
              sx={{ fontWeight: "bold" }}
            >
              12+
            </Typography>
            <Typography variant="body1" className="semiBold" color="greyColor">
              COUNTRIES WORLDWIDE
            </Typography>
          </Stack>
          {/* </Grid> */}
        </Stack>
      </Grid>
      {/* <Grid
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
      </Grid> */}
      {/* </Box> */}
    </Grid>
  );
}
