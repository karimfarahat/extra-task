import { Grid, Typography, Stack } from "@mui/material";
import React from "react";

import WomanIcon2 from "./icons/circlebox6.svg";
import WomanIcon from "./icons/circlebox4.svg";
import ManIcon2 from "./icons/circlebox5.svg";
import ManIcon from "./icons/circlebox3.svg";

export default function OurTeamContainer() {
  return (
    <Grid
      item
      xs={12}
      container
      spacing={4}
      // direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={8}
      marginY={5}
    >
      <Grid item xs={8} justifyContent={"center"} alignItems={"center"}>
        <Typography
          gutterBottom
          align="center"
          variant="h4"
          color="darkBlue"
          sx={{ px: 3, fontWeight: "bold" }}
        >
          Meet Our Team
        </Typography>
        <Typography
          align="center"
          fontSize={"14px"}
          fontWeight={"medium"}
          color="greyColor"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        container
        // spacing={{ xs: 4, sm: 2 }}
        columnSpacing={3}
        rowSpacing={{ xs: 3, sm: 0 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10} sm={3}>
          {/* <Box  bgcolor={"#fff"}> */}

          <Stack
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ py: 3, px: 4, backgroundColor: "#fff" }}
          >
            <img src={ManIcon} className="teams-thumb" alt="man" />
            <Typography
              className="semiBold"
              color="orange.main"
              sx={{ fontSize: "14px" }}
            >
              CO Founder
            </Typography>
            <Typography
              color="greyColor"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Avie Beaton
            </Typography>
            <Typography
              align="center"
              color="greyColor"
              sx={{ fontSize: "14px", fontWeight: "medium" }}
            >
              the quick fox jumps over the lazy dog
            </Typography>
          </Stack>
          {/* </Box> */}
        </Grid>
        <Grid item xs={10} sm={3}>
          {/* <Box  bgcolor={"#fff"}> */}

          <Stack
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ py: 3, px: 4, backgroundColor: "#fff" }}
          >
            <img src={WomanIcon} className="teams-thumb" alt="man" />
            <Typography
              className="semiBold"
              color="orange.main"
              sx={{ fontSize: "14px" }}
            >
              Consultant
            </Typography>
            <Typography
              color="greyColor"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Ben Jonson
            </Typography>
            <Typography
              align="center"
              color="greyColor"
              sx={{ fontSize: "14px", fontWeight: "medium" }}
            >
              the quick fox jumps over the lazy dog
            </Typography>
          </Stack>
          {/* </Box> */}
        </Grid>
        <Grid item xs={10} sm={3}>
          {/* <Box  bgcolor={"#fff"}> */}

          <Stack
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ py: 3, px: 4, backgroundColor: "#fff" }}
          >
            <img src={ManIcon2} className="teams-thumb" alt="man" />
            <Typography
              className="semiBold"
              color="orange.main"
              sx={{ fontSize: "14px" }}
            >
              Consultant
            </Typography>
            <Typography
              color="greyColor"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Rodney Stratton
            </Typography>
            <Typography
              align="center"
              color="greyColor"
              sx={{ fontSize: "14px", fontWeight: "medium" }}
            >
              the quick fox jumps over the lazy dog
            </Typography>
          </Stack>
          {/* </Box> */}
        </Grid>
        <Grid item xs={10} sm={3}>
          {/* <Box  bgcolor={"#fff"}> */}

          <Stack
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ py: 3, px: 4, backgroundColor: "#fff" }}
          >
            <img src={WomanIcon2} className="teams-thumb" alt="man" />
            <Typography
              className="semiBold"
              color="orange.main"
              sx={{ fontSize: "14px" }}
            >
              Consultant
            </Typography>
            <Typography
              color="greyColor"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Ben Jonson
            </Typography>
            <Typography
              align="center"
              color="greyColor"
              sx={{ fontSize: "14px", fontWeight: "medium" }}
            >
              the quick fox jumps over the lazy dog
            </Typography>
          </Stack>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
