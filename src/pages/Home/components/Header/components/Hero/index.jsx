import { Box, Button, Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import React from "react";

const Hero = () => {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} zIndex={"-1"} width={"100%"} height={"300px"}>
        <video
          src="https://player.vimeo.com/external/514984571.sd.mp4?s=056762f6a2a5938d58c8dde8cfb5fbf419c068c2&profile_id=164&oauth2_token_id=57447761"
          muted
          autoPlay
          width={"100%"}
          style={{ height: { md: "100%" },filter:"brightness(55%)" }}
        />
      </Box>

      <Box textAlign={"center"} py={{ md: 18 }} color={"white"}>
        <Typography
          variant="h1"
          fontSize={{ md: "4.5rem", sm: "2.5rem", xs: "1.5rem" }}
          fontWeight={{ md: 700, sm: 500, xs: 400 }}
          pt={2}
        >
          Welcome to Mount Sleet
        </Typography>
        <Typography
          width={{ md: "40%", sm: "58%", xs: "70%" }}
          m={"auto"}
          py={{ md: 4, sm: 2, xs: 1 }}
          letterSpacing={{ md: 1 }}
          lineHeight={{ md: 1.5, sm: 0 }}
          fontWeight={"light"}
          fontSize={{ md: "1em", xs: ".7em" }}
        >
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            mt: { md: 3, xs: 1 },
            fontWeight: light,
            px: 3,
          }}
        >
          Book a Trail
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
