import { Container, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import SuitcaseIcon from "./icons/icn-settings-icnlg4.svg";
import MarketIcon from "./icons/icn-settings-icnlg9.svg";
import ConnectIcon from "./icons/icn-settings-icnlg6.svg";
import BookIcon from "./icons/icn-settings-icnlg2.svg";
import ArrowRightIcon from "./icons/icn-arrowright-icnxs.svg";

export default function Features() {
  return (
    <Grid
      item
      xs={6}
      sm={8}
      spacing={2}
      container
      justifyContent="center"
      alignItems="center"
      //   alignContent="center"
      sx={{ mt: { xs: 20, sm: 15 } }}
    >
      <Grid item xs={12} sm={3}>
        <Stack spacing={2} sx={{ p: 3, backgroundColor: "#fff" }}>
          <img
            src={SuitcaseIcon}
            alt="icon"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography sx={{ fontSize: "16px" }}>Business Growing</Typography>
          <Typography
            color="greyColor"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            the quick fox jumps over the lazy dog
          </Typography>
          <Button variant="outlined" sx={{ p: 0.7 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              More
            </Typography>
            <img src={ArrowRightIcon} alt="icon" />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Stack spacing={2} sx={{ p: 3, backgroundColor: "#fff" }}>
          <img
            src={MarketIcon}
            alt="icon"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography sx={{ fontSize: "16px" }}>Digital Marketing</Typography>
          <Typography
            color="greyColor"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            the quick fox jumps over the lazy dog
          </Typography>
          <Button variant="outlined" sx={{ p: 0.7 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              More
            </Typography>
            <img src={ArrowRightIcon} alt="icon" />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Stack spacing={2} sx={{ p: 3, backgroundColor: "#fff" }}>
          <img
            src={ConnectIcon}
            alt="icon"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography sx={{ fontSize: "16px" }}>
            National top 50 firms
          </Typography>
          <Typography
            color="greyColor"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            the quick fox jumps over the lazy dog
          </Typography>
          <Button variant="outlined" sx={{ p: 0.7 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              More
            </Typography>
            <img src={ArrowRightIcon} alt="icon" />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Stack
          spacing={2}
          sx={{ p: 3, backgroundColor: "#252b42", color: "#fff" }}
        >
          <img
            src={BookIcon}
            alt="icon"
            className="img-white"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography color="seondary" sx={{ fontSize: "16px" }}>
            Digital Marketing
          </Typography>
          <Typography
            color="seondary"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            the quick fox jumps over the lazy dog
          </Typography>
          <Button color="white" variant="contained" sx={{ p: 0.7 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              More
            </Typography>
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
