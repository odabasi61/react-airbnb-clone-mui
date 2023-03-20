import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { flexCenter } from "../themes/commonStyles";
import { pink } from "@mui/material/colors";
import { FaAirbnb } from "react-icons/fa";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        airBnb
      </Typography>
    </Box>
  );
};

export default Logo;
