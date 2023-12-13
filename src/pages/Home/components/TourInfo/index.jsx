import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { TOUR_INFO } from "constants/tourInformation";
import React from "react";

const TourInfo = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Box textAlign={"center"} py={{ md: 13 }}>
          <Typography
            variant="h1"
            fontSize={{ md: "4rem", sm: "2.5rem", xs: "1.2rem" }}
            fontWeight={{ md: 700, sm: 500, xs: 300 }}
            pt={2}
          >
            Make Winter Last Forever
          </Typography>
          <Typography
            width={{ md: "60%", sm: "58%", xs: "85%" }}
            m={"auto"}
            py={{ md: 4, sm: 2, xs: 1 }}
            letterSpacing={{ md: 1 }}
            fontWeight={"light"}
            fontSize={{ md: "1em", xs: ".7em" }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Box>

        {/* grid box */}
        <Box textAlign={"center"}>
          <Grid container>
            {TOUR_INFO.map((i) => (
              <Grid item md={3} width={"100%"}>
                <Box width={"100%"}>
                  <img src={i.svg} alt="adventure" width={"100px"} />
                  <Typography mt={2} fontSize={"1.2em"}>
                    {i.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="outlined"
            sx={{
              bgcolor: "white",
              color: "black",
              my: { md: 10, sm: 7, xs: 5 },
              px: "2em",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TourInfo;
