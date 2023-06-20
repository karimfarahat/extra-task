import React from "react";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, IconButton, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "./icons/icn-menu-icnxs.svg";

export default function Header() {
  return (
    <AppBar
      elevation={0}
      position="absolute"
      sx={{
        backgroundColor: { xs: "#fff", sm: "transparent" },
        color: { xs: "#000", sm: "#fff" },
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          pl={{ xs: 0, sm: 10 }}
          sx={{ fontWeight: "bold", flexGrow: { sm: 1 } }}
        >
          CompanyLogo
        </Typography>
        <Stack
          display={{ xs: "flex", sm: "none" }}
          direction={{ xs: "column", sm: "row" }}
          pl={{ xs: 0, sm: 3 }}
          pr={{ xs: 0, sm: 8 }}
          spacing={1}
        >
          <IconButton
            sx={{
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            <SearchIcon
              sx={{
                color: { xs: "#737373", sm: "#fff" },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton sx={{ color: { xs: "#000", sm: "#fff" } }} edge="end">
            <img
              //  style={{ color: "#fff" }}
              src={MenuIcon}
              alt="menu"
            />
          </IconButton>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
          <Button
            className="appBarBtn"
            sx={{
              fontWeight: { xs: "normal", sm: "bold" },
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            Home
          </Button>
          <Button
            className="appBarBtn"
            sx={{
              fontWeight: { xs: "normal", sm: "bold" },
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            Product
          </Button>
          <Button
            className="appBarBtn"
            sx={{
              fontWeight: { xs: "normal", sm: "bold" },
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            Pricing
          </Button>
          <Button
            className="appBarBtn"
            sx={{
              fontWeight: { xs: "normal", sm: "bold" },
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            Contact
          </Button>
        </Stack>

        <Stack
          display={{ xs: "none", sm: "flex" }}
          direction={{ xs: "column", sm: "row" }}
          pl={{ xs: 0, sm: 3 }}
          pr={{ xs: 0, sm: 8 }}
          spacing={1}
        >
          <IconButton
            sx={{
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            <SearchIcon
              sx={{
                color: { xs: "#737373", sm: "#fff" },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: { xs: "#737373", sm: "#fff" },
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Stack>

        <IconButton
          display={{ xs: "none", sm: "block" }}
          sx={{ color: { xs: "#000", sm: "#fff" } }}
          edge="end"
        >
          <img
            //  style={{ color: "#fff" }}
            src={MenuIcon}
            alt="menu"
          />
        </IconButton>
        {/* </Stack> */}
      </Toolbar>
    </AppBar>
  );
}
