// import "./bootstrap.min.css";
import "./App.css";

import { ThemeProvider, CssBaseline, Grid } from "@mui/material";

import { theme } from "./theme";
import Header from "./Header";

import HeaderContainer from "./HeaderContainer";
// import HeaderGrid from "./HeaderGrid";
import Features from "./Features";
import VideoContainer from "./VideoContainer";
import ClientsContainer from "./ClientsContainer";
import OurTeamContainer from "./OurTeamContainer";

import BranchesContainer from "./BranchesContainer";
import QuoteContainer from "./QuoteContainer";
import FooterContainer from "./FooterContainer";
import CopyrightContainer from "./CopyrightContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Container
        disableGutters
        maxWidth="none"
        sx={{ justifyContent: "center", alignItems: "center" }}
      > */}
      <Grid container justifyContent="center" alignItems="center">
        <Header />

        <HeaderContainer />
        {/* <HeaderGrid /> */}
        <Features />
        <VideoContainer />
        <ClientsContainer />
        <OurTeamContainer />
        {/* from here was perfect layouting */}
        <BranchesContainer />
        <QuoteContainer />
        <FooterContainer />
        <CopyrightContainer />
      </Grid>
      {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;
