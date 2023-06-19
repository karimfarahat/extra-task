import React from "react";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, IconButton } from "@mui/material";

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
        // disableGutters
        sx={{
          flexDirection: { xs: "column", sm: "row" },

          //   justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", flexGrow: { sm: 1 } }}
        >
          CompanyLogo
        </Typography>

        <Button
          sx={{
            fontWeight: { xs: "normal", sm: "bold" },
            color: { xs: "#737373", sm: "#fff" },
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            fontWeight: { xs: "normal", sm: "bold" },
            color: { xs: "#737373", sm: "#fff" },
          }}
        >
          Product
        </Button>
        <Button
          sx={{
            fontWeight: { xs: "normal", sm: "bold" },
            color: { xs: "#737373", sm: "#fff" },
          }}
        >
          Pricing
        </Button>
        <Button
          sx={{
            fontWeight: { xs: "normal", sm: "bold" },
            color: { xs: "#737373", sm: "#fff" },
          }}
        >
          Contact
        </Button>
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

        <IconButton color="secondary" edge="end">
          <img style={{ color: "#fff" }} src={MenuIcon} alt="menu" />
        </IconButton>
        {/* </Stack> */}
      </Toolbar>
    </AppBar>
  );
}
