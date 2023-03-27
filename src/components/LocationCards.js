import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// actually it is locations in mockdata but we made it cardlocations to awois confusion
import { locations as cardLocations } from "../data/mockData";
import CarouselCard from "./CarouselCard";
import React from "react";

const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
