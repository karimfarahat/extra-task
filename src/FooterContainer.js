import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "./icons/antdesignfacebookfilled.svg";
import InstagramIcon from "./icons/antdesigninstagramoutlined.svg";
import TwitterIcon from "./icons/antdesigntwitteroutlined.svg";
import YoutubeIcon from "./icons/carbonlogoyoutube.svg";

export default function FooterContainer() {
  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      bgcolor="#fff"
      p={{ xs: 5, sm: 15 }}
      spacing={3}
    >
      <Grid item xs={10} sm={3}>
        <Typography
          gutterBottom
          color={"darkBlue"}
          sx={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Get In Touch
        </Typography>
        <Typography
          pb={3}
          color="greyColor"
          fontSize="14px"
          fontWeight="medium"
        >
          the quick fox jumps over the lazy dog
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <img src={FacebookIcon} className="footer-thumb" alt="social" />
          <img src={InstagramIcon} className="footer-thumb" alt="social" />
          <img src={TwitterIcon} className="footer-thumb" alt="social" />
          <img src={YoutubeIcon} className="footer-thumb" alt="social" />
        </Stack>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Typography
          gutterBottom
          color={"darkBlue"}
          sx={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Company info
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            About Us
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Carrier
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            We are hiring
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Blog
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Typography
          gutterBottom
          color={"darkBlue"}
          sx={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Features
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Business Marketing
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            User Analytic
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Live Chat
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Unlimited Support
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Typography
          gutterBottom
          color={"darkBlue"}
          sx={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Resources
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            iOS & Android
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Watch a Demo
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            Customers
          </Typography>
          <Typography color="greyColor" fontSize="14px" className="semiBold">
            API
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
