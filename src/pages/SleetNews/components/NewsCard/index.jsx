import { Email, FavoriteBorder, MoreVert, Visibility } from "@mui/icons-material";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { SLEET_NEWS_CARD } from "constants/newsCardData";
import React from "react";

const NewsCard = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Grid container spacing={2} sx={{ mt: { md: 10, sm: 7, xs: 1 } }}>
          {SLEET_NEWS_CARD.map((i) => (
            <Grid item md={4} sm={4} height={"100%"}>
              <Box bgcolor={"#fafafa"}>
                <img src={i.img} alt="Tourist" width={"100%"} />
                <Box p={1.2}>
                <Box display={"flex"} justifyContent={"space-between"} my={2}>
                  <Typography fontSize={"small"} fontWeight={"light"}>Jan 25 . 2 min</Typography>
                  <Typography  fontSize={"small"}><MoreVert/></Typography>
                </Box>

               
                  <Typography fontSize={ "1.3em" } fontWeight={700}>{i.title1}</Typography>
                  <Typography
                    borderBottom={"1px solid gray"}
                    fontSize={  "1.3em" } fontWeight={700}
                  >
                    {i.subTitle}
                  </Typography>

                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    pt={2}
                  >
                    <Box display={"flex"} pb={2}>
                      <Typography mr={3} display={"flex"} alignItems={"center"}>
                        <Visibility fontSize="small" sx={{ mr: 1 }} /> {i.views}
                      </Typography>
                      <Typography display={"flex"} alignItems={"center"}>
                        <Email fontSize="small" sx={{ mr: 1 }} /> {i.messages}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography display={"flex"} alignItems={"center"}>
                        <FavoriteBorder
                          fontSize="small"
                          sx={{ mr: 1 }}
                          color="error"
                        />{" "}
                        {i.hearts}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsCard;
