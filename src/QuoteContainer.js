import {
  Grid,
  InputLabel,
  Autocomplete,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import LaptopImg from "./imgs/cover4@2x.png";
import LaptopImgBig from "./imgs/cover13@2x.png";

//refrence for later, best layouting yet
export default function QuoteContainer() {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      container
      justifyContent="center"
      mt={{ xs: 0, sm: -40 }}
      bgcolor={"#fff"}
    >
      <Grid item xs={4} display={{ xs: "none", sm: "block" }}>
        <img src={LaptopImg} className="img-fluid" alt="macbook" />
      </Grid>
      <Grid item xs={12} display={{ xs: "block", sm: "none" }}>
        <img src={LaptopImgBig} className="img-fluid" alt="macbook" />
      </Grid>
      <Grid item xs={10} sm={8} p={5}>
        <Typography
          gutterBottom
          variant="h4"
          color="darkBlue"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Get A Free Quote Here
        </Typography>
        <Typography fontWeight="14px" color="darkBlue" className="semiBold">
          Name*
        </Typography>
        <TextField
          // autoFocus
          // gutterBottom
          margin="dense"
          id="fullname"
          label="Enter full name"
          fullWidth
          //   variant="outlined"
          sx={{ mb: 4 }}
        />
        <Typography fontWeight="14px" color="darkBlue" className="semiBold">
          Email*
        </Typography>
        <TextField
          // gutterBottom
          // autoFocus
          margin="dense"
          id="email"
          label="Enter user email address"
          fullWidth
          //   variant="outlined"
          sx={{ mb: 4 }}
        />
        <Typography
          gutterBottom
          fontWeight="14px"
          color="darkBlue"
          className="semiBold"
        >
          Department *
        </Typography>
        <Autocomplete
          margin="dense"
          disablePortal
          id="group"
          options={["House", "Office"]}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Please Select" />
          )}
          sx={{ mb: 4 }}
        />
        <Typography
          gutterBottom
          fontWeight="14px"
          color="darkBlue"
          className="semiBold"
        >
          Time *
        </Typography>
        <InputLabel />
        <Autocomplete
          disablePortal
          id="status"
          margin="dense"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="4:00 Available" />
          )}
          sx={{ mb: 8 }}
        />
        <Button
          fullWidth
          color="orange"
          variant="contained"
          sx={{ borderRadius: "10px", p: 3 }}
        >
          Book Appointment
        </Button>
      </Grid>
    </Grid>
  );
}
