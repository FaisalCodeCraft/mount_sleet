import { Box, Container, Grid, Typography } from "@mui/material";
import { GALLERY_IMAGES } from "constants/galleryImages";
import React from "react";

const SleetGallery = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Typography
          variant="h1"
          fontSize={{ md: "3.5rem", sm: "2rem", xs: "1.5rem" }}
          fontWeight={{ md: 700, sm: 500, xs: 400 }}
          pt={{ md: 7 }}
          textAlign={"center"}
          my={{ md: 10, sm: 7, xs: 4 }}
        >
          Sleet Gallery
        </Typography>
        <Grid container spacing={3}>
          {GALLERY_IMAGES.map((i) => (
            <Grid item md={3}>
              <img
                src={i.galleryImage}
                alt="Tourist Gallery Images"
                width={"100%"}
                height={"200px"}
              />
            </Grid>
           
          ))}
       
        </Grid>
      </Container>
    </Box>
  );
};

export default SleetGallery;
