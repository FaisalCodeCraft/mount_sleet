import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Box textAlign={"center"} py={{ md: 12 }}>
          <Typography
            variant="h1"
            fontSize={{ md: "4.5rem", sm: "2.5rem", xs: "1.5rem" }}
            fontWeight={{ md: 700, sm: 500, xs: 400 }}
            pt={2}
          >
            Our Trails
          </Typography>
          <Typography
            width={{ md: "50%", sm: "58%", xs: "70%" }}
            m={"auto"}
            pt={{ md: 3, sm: 2, xs: 1 }}
            letterSpacing={{ md: 1 }}
            lineHeight={{ md: 1.5, sm: 0 }}
            fontWeight={"light"}
            fontSize={{ md: "1em", xs: ".7em" }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
