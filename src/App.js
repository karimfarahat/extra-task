// import "./bootstrap.min.css";
import "./App.css";

import { ThemeProvider, CssBaseline, Grid } from "@mui/material";

import { theme } from "./theme";
import Header from "./Header";

import HeaderContainer from "./HeaderContainer";
import Features from "./Features";
import VideoContainer from "./VideoContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Container disableGutters maxWidth="none"> */}
      <Grid container justifyContent="center">
        <Header />

        <HeaderContainer />

        <Features />

        <VideoContainer />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
