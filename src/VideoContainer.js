import { Grid, Typography, Stack, Box } from "@mui/material";
import React from "react";

import OfficeImg from "./imgs/cover3@2x.png";
import PlayImg from "./imgs/playbtn.png";
import PeopleIcon from "./icons/icn-settings-icnlg.svg";
import MeterIcon from "./icons/icn-settings-icnmd1.svg";

export default function VideoContainer() {
  return (
    // <Container maxWidth="md" sx={{ mt: 15 }} disableGutters>
    <Grid
      item
      xs={12}
      container
      bgcolor={"#fff"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={8}
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        {/* <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        spacing={2}
      > */}
        <Grid item xs={8} container>
          <Typography
            gutterBottom
            align="center"
            variant="h4"
            color="darkBlue"
            sx={{ px: 3, fontWeight: "bold" }}
          >
            We are providing best business service.
          </Typography>
          <Typography align="center" variant="body1" color="greyColor">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Typography>
          {/* </Grid> */}
        </Grid>
        <Grid item container spacing={5} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ position: "relative" }}>
              <img className="img-fluid" src={OfficeImg} alt="office" />
              <img
                src={PlayImg}
                alt="playIcon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h4"
                  color="darkBlue"
                  sx={{ fontWeight: "bold" }}
                >
                  Most trusted in our field
                </Typography>
                <Typography variant="body1" color="greyColor">
                  Most calendars are designed for teams. Slate is designed for
                  freelancers who want a simple way to plan their schedule.
                </Typography>
              </Box>
              <Stack spacing={5}>
                <Box sx={{ display: "flex", gap: 3, alignItems: "start" }}>
                  <img className="img-icon" src={PeopleIcon} alt="icon" />
                  <Stack>
                    <Typography
                      variant="body1"
                      color="darkBlue"
                      sx={{ fontWeight: "bold" }}
                    >
                      the quick fox jumps over the lazy dog
                    </Typography>
                    <Typography
                      variant="body2"
                      color="greyColor"
                      sx={{ fontWeight: 600 }}
                    >
                      Things on a very small scale
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "start" }}>
                  <img className="img-icon" src={MeterIcon} alt="icon" />
                  <Stack>
                    <Typography
                      variant="body1"
                      color="darkBlue"
                      sx={{ fontWeight: "bold" }}
                    >
                      the quick fox jumps over the lazy dog
                    </Typography>
                    <Typography
                      variant="body2"
                      color="greyColor"
                      sx={{ fontWeight: 600 }}
                    >
                      Things on a very small scale
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
