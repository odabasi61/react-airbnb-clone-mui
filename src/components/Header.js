import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../themes/commonStyles";
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
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
