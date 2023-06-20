import { Box, Grid, Typography, Stack, Rating } from "@mui/material";
import React from "react";
import ManIcon from "./icons/circlebox7.svg";
import ManIcon2 from "./icons/circlebox1.svg";
import ManIcon3 from "./icons/circlebox2.svg";
export default function ClientsContainer() {
  return (
    <Grid
      item
      xs={12}
      container
      spacing={4}
      //   direction={"column"}
      bgcolor={"cyanColor"}
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
          color="#fff"
          sx={{ px: 3, fontWeight: "bold" }}
        >
          What Clients Say
        </Typography>
        <Typography align="center" variant="body1" color="#fff">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        columnSpacing={10}
        rowSpacing={{ xs: 4, sm: 0 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10} sm={4}>
          <Box position={"relative"} bgcolor={"#fff"}>
            <img
              src={ManIcon}
              className="card-thumb"
              alt="man"
              style={{ position: "absolute", top: 20, left: -40 }}
            />
            <Stack spacing={3} sx={{ py: 4, px: 8, backgroundColor: "#fff" }}>
              <Stack spacing={1}>
                <Typography
                  color={"darkBlue"}
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Regina Miles
                </Typography>
                <Typography
                  className="semiBold"
                  color="greyColor"
                  sx={{ fontSize: "14px" }}
                >
                  Designer
                </Typography>
              </Stack>
              <Rating name="read-only" value={4} readOnly />
              <Typography
                color="greyColor"
                sx={{ fontSize: "14px", fontWeight: "medium" }}
              >
                This proved to be impossible using the traditional concepts of
                space and time. Einstein developed a new view of time first and
                then space. This proved to be impossible using the traditional
                concepts of space and time. Einstein developed a new view of
                time first and then space.
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Box position={"relative"} bgcolor={"#fff"}>
            <img
              src={ManIcon2}
              className="card-thumb"
              alt="man"
              style={{ position: "absolute", top: 20, left: -40 }}
            />
            <Stack spacing={3} sx={{ py: 4, px: 8, backgroundColor: "#fff" }}>
              <Stack spacing={1}>
                <Typography
                  color={"darkBlue"}
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Regina Miles
                </Typography>
                <Typography
                  className="semiBold"
                  color="greyColor"
                  sx={{ fontSize: "14px" }}
                >
                  Designer
                </Typography>
              </Stack>
              <Rating name="read-only" value={4} readOnly />
              <Typography
                color="greyColor"
                sx={{ fontSize: "14px", fontWeight: "medium" }}
              >
                This proved to be impossible using the traditional concepts of
                space and time. Einstein developed a new view of time first and
                then space. This proved to be impossible using the traditional
                concepts of space and time. Einstein developed a new view of
                time first and then space.
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Box position={"relative"} bgcolor={"#fff"}>
            <img
              src={ManIcon3}
              className="card-thumb"
              alt="man"
              style={{ position: "absolute", top: 20, left: -40 }}
            />
            <Stack spacing={3} sx={{ py: 4, px: 8, backgroundColor: "#fff" }}>
              <Stack spacing={1}>
                <Typography
                  color={"darkBlue"}
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Regina Miles
                </Typography>
                <Typography
                  className="semiBold"
                  color="greyColor"
                  sx={{ fontSize: "14px" }}
                >
                  Designer
                </Typography>
              </Stack>
              <Rating name="read-only" value={4} readOnly />
              <Typography
                color="greyColor"
                sx={{ fontSize: "14px", fontWeight: "medium" }}
              >
                This proved to be impossible using the traditional concepts of
                space and time. Einstein developed a new view of time first and
                then space. This proved to be impossible using the traditional
                concepts of space and time. Einstein developed a new view of
                time first and then space.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
