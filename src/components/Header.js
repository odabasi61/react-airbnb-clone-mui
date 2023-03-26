import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../themes/commonStyles";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";
// import ProfileSettings from "./ProfileSettings";
// import MobileSearch from "./MobileSearch";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: { xs: 4, md: 1, lg: 4 },
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
