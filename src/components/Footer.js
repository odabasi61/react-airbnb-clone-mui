import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";
import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "../themes/commonStyles";

// bu kısımları footerda hardcoding yerine map yapacağız
const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
  { id: 4, text: "Destinations", url: "#" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        py: "1rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            gap: { sm: "1rem" },
            flexDirection: { xs: "column", lg: "row" },
            width: "100%",
          }}
        >
          <Stack
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Paper>
              <Link href="#">
                {new Date().getFullYear()} Airbnb Copyright &copy;
              </Link>
            </Paper>
            {footerLinks.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                English
              </Button>
              <Button> $USD </Button>
              <Button>
                Support & Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
