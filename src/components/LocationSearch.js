import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { IoSearchCircleSharp } from "react-icons/io5";
import { pink } from "@mui/material/colors";

// we created choices array for the button group in header. we will map it below. paper wraps them.

const choices = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Any Week" },
  { id: 3, text: "Any Guest", withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        mx: 2,
        ml: { lg: 15 },
      }}
      elevation={5}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[500]} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
