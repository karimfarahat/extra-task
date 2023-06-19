import Typography from "@mui/material/Typography";

import { Stack, Button, Container, Grid } from "@mui/material";

import React from "react";

import HeaderImg from "./imgs/cover@2x.png";
import HeaderGrid from "./HeaderGrid";

export default function HeaderContainer() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      item
      sx={{
        position: "relative",
        pt: { xs: 50, sm: 15 },
      }}
    >
      <img
        src={HeaderImg}
        // className="img-fluid"
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "brightness(50%)",
        }}
      />

      <Grid item sm={6}>
        <Stack
          // mt={5}
          sx={{ justifyContent: "center" }}
          direction="column"
          //   spacing={"40px"}
        >
          <Typography
            align="center"
            color="secondary"
            sx={{
              fontSize: "58px",
              fontWeight: "bolder",
            }}
          >
            Experts are here solve your business problem.
          </Typography>
          <Typography
            align="center"
            color="secondary"
            px={15}
            sx={{
              fontSize: "20px",
            }}
          >
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </Typography>

          <Stack
            my={15}
            sx={{ justifyContent: "center" }}
            direction="row"
            spacing={"10px"}
          >
            <Button variant="contained" color="orange">
              Get Quote Now
            </Button>
            <Button variant="outlined" color="secondary">
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <HeaderGrid />
    </Grid>
  );
}
