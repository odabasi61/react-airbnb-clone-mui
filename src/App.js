import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
//MUI provides its own version of normalize. css , CssBaseline , a component that provides an elegant, consistent, and simple baseline to build upon. CSSBaseline does the following: The margin in all browsers is removed. The default Material Design background color is applied.
import Header from "./components/Header";
// import OptionsTab from "components/OptionsTab";
// import Container from "@mui/material/Container";
// import LocationCards from "components/LocationCards";
// import Footer from "components/Footer";
// import FooterMenu from "components/FooterMenu";
// import { displayOnDesktop } from "themes/commonStyles";
// import MobileFooter from "components/MobileFooter";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
