import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { TRAILS_CARDS_DATA } from "constants/trailsCardsData";
import UseContexUse from "context/trailCreateContext";
import { useContext } from "react";

const TrailCards = (i) => {
  const {trail, setTrail} = useContext(UseContexUse);
//  console.log ("MyTrail>>>>>>>>>>>>>>>",setTrail(trail))

  const handleBook = (i) => {
    if (trail.find((e) => e.id === i.id)) {
      
      const removeBookTrail = trail.filter((e) => e.id !== i.id);
      setTrail(removeBookTrail);
    } else {
      trail.push({...i,quantity:1});
      setTrail(trail);
    }
  };

  return (
    <Box mt={2}>
      <Container maxWidth={"md"}>
        <Grid container spacing={3}>
          {TRAILS_CARDS_DATA.map((i,index) => (
            <Grid item md={6}>
              <Box sx={{ bgcolor: "#fafafa" }}>
                <img src={i.poster} alt="Hikers" width={"100%"} />
                <Box p={3}>
                  <Typography
                    fontSize={"1.2em"}
                    my={1}
                    fontWeight={700}
                    letterSpacing={1}
                  >
                    {i.tittle}
                  </Typography>
                  <Typography my={1}>{i.offer}</Typography>
                  <Typography my={1}>{i.timeDuration} hr</Typography>
                  <Typography my={1}>{i.price} $</Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleBook(i, index)}
                    sx={{
                      bgcolor: "red",
                      color: "black",
                      fontWeight: "light",
                      my: 1,
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrailCards;
