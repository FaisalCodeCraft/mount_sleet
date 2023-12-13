import { Email, FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { NEWS_CARD } from "constants/newsCardData";
import React from "react";

const News = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Box textAlign={"center"} pt={{md:15,sm:9,xs:3}}>
          <Typography
            variant="h1"
            fontSize={{ md: "4rem", sm: "2.5rem", xs: "1.5rem" }}
            fontWeight={{ md: 700, sm: 500, xs: 400 }}
          >
            Sleet News
          </Typography>
          <Typography
            width={{ md: "60%", sm: "70%", xs: "85%" }}
            m={"auto"}
            mt={1}
            letterSpacing={{ md: 1 }}
            fontSize={{ md: "1em",sm:"1em", xs: ".7em" }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{mt:{md:10,sm:7,xs:1}}}>
          {NEWS_CARD.map((i) => (
            <Grid item md={4} sm={4}>
              <Card
                elevation={0}
                square
                sx={{ bgcolor: "black", color: "white" }}
              >
                <img src={i.img} alt="Tourist" width={"100%"} />

                <Box p={1} >
                  <Typography fontSize={{ md: "1.3em" }}>{i.title1}</Typography>
                  <Typography borderBottom={"1px solid gray"} fontSize={{ md: "1.3em" }}>
                    {i.subTitle}
                  </Typography>
              
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}  pt={2}>

                  <Box display={"flex"}>
                    <Typography mr={3} display={"flex"} alignItems={"center"}><Visibility fontSize="small" sx={{mr:1}}/> {i.views}</Typography>
                    <Typography display={"flex"} alignItems={"center"}><Email fontSize="small" sx={{mr:1}}/> {i.messages}</Typography>
                  </Box>

                  <Box>
                  <Typography display={"flex"} alignItems={"center"}><FavoriteBorder fontSize="small" sx={{mr:1}} color="error"/> {i.hearts}</Typography>
                  </Box>
                  
                </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"}>
          <Button variant="outlined"  sx={{background:'white',color:'black',mt:{md:10,sm:7,xs:4},px:"2em"}}>Read more</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
