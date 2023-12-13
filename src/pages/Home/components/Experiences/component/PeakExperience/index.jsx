import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import SwipeableViews from 'react-swipeable-views';
import { ChevronLeft, ChevronRight, Swipe } from "@mui/icons-material";
import { autoPlay } from "react-swipeable-views-utils";
import { Card, Container, Grid } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(Swipe);

const PEAK_EXPERIENCE = [
  {
    title:
      "a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    name: "Jason",
  },
  {
    title:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
    name: "Chloe",
  },
  {
    title:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you.",
    name: "Tom",
  },
];

const PeakExperience = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = PEAK_EXPERIENCE.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Container maxWidth={"md"}>
        <Grid container>
          <Grid item md={8} sm={8} sx={{ width: "100%" }}>
            <Card
              square
              elevation={0}
              sx={{ backgroundColor: "black", color: "white", height: "100%" }}
            >
              <Paper
                square
                elevation={0}
                sx={{
                  p: { md: "0 4em", sm: "0 3em", xs: "0 1em" },
                  bgcolor: "black",
                  color: "white",
                  textAlign: "center",
                  height: { md: "300px", sm: "270px", xs: "150px" },
                  position: "relative",
                }}
              >
                <Typography
                  fontSize={{ md: "3em", sm: "2em", xs: "1.3em" }}
                  pt={{ md: 8, sm: 5, xs: 2 }}
                >
                  Peak Experiences
                </Typography>
                <Typography
                  mt={{ md: 3, sm: 3, xs: 1 }}
                  fontSize={{ md: "1em", sm: ".9em", xs: ".7em" }}
                >
                  {PEAK_EXPERIENCE[activeStep]?.title}
                </Typography>
                <Typography mt={{ md: 3, sm: 3, xs: 1 }} fontSize={"small"}>
                  {PEAK_EXPERIENCE[activeStep].name}
                </Typography>
                <Button
                  onClick={
                    activeStep === maxSteps - 1
                      ? () => setActiveStep(0)
                      : handleNext
                  }
                  sx={{
                    position: "absolute",
                    top: { md: "50%", sm: "60%", xs: "100%" },
                    right: 0,
                  }}
                >
                  <ChevronRight color="error" fontSize="large" />
                </Button>

                <Button
                  onClick={
                    activeStep === 0 ? () => setActiveStep(2) : handleBack
                  }
                  sx={{
                    position: "absolute",
                    top: { md: "50%", sm: "60%", xs: "100%" },
                    left: 0,
                  }}
                >
                  <ChevronLeft color="error" fontSize="large" />
                </Button>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                enableMouseEvents
                onChangeIndex={handleStepChange}
                sx={{ color: "transparent" }}
              >
                {PEAK_EXPERIENCE.map((step, index) => (
                  <div key={step.name}>
                    {Math.abs(activeStep - index) <= 2 ? <Box /> : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  background: "black",
                }}
              />
            </Card>
          </Grid>

          <Grid item md={4} sm={4}>
            <img
              src="https://static.wixstatic.com/media/ea71bb_089a358144c24d8492b9abb190cb43b6~mv2.jpg/v1/fill/w_512,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_089a358144c24d8492b9abb190cb43b6~mv2.jpg"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PeakExperience;
