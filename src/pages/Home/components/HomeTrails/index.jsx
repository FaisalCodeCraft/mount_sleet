import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { OUR_TRAILS } from "constants/trails";
import React from "react";

const HomeTrails = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Grid container>
          <Grid item md={5} mt={{ md: 0, xs: 3 }}>
            <img
              src="https://static.wixstatic.com/media/ea71bb_3c05ae0fba3543c99781d4c7613ea98e~mv2.jpg/v1/fill/w_512,h_1265,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_3c05ae0fba3543c99781d4c7613ea98e~mv2.jpg"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid
            item
            md={7}
            bgcolor={"black"}
            color={"white"}
            p={{ md: 3, sm: 2, xs: 1 }}
            width={"100%"}
          >
            <Box>
              <Typography
                variant="h5"
                fontSize={{ md: "2.5em" }}
                mt={{ md: 10, sm: 5, xs: 4 }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Our Hopme
              </Typography>
            </Box>
            {OUR_TRAILS.map((i) => (
              <Box
                display={{ md: "flex" }}
                textAlign={{ xs: "center", md: "left" }}
                justifyContent={"space-between"}
                mt={{ md: 10, sm: 4, xs: 3 }}
              >
                <Box>
                  <Typography>{i.title}</Typography>
                  <Typography fontSize={"small"} my={{ md: 1, xs: 0 }}>
                    {i.offer}
                  </Typography>
                  <Typography>{i.price} $</Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "red",
                      color: "black",
                      fontWeight: "lighter",
                      px: 3,
                    }}
                  >
                    {i.btnTitle}
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeTrails;
