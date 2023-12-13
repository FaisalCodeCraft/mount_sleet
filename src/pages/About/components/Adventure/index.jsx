import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Adventure = () => {
  return (
    <Box  mt={2}>
      <Container maxWidth={"md"}>
        <Grid container>
          <Grid
            item
            md={6}
            bgcolor={"black"}
            color={"white"}
            px={1.4}
            textAlign={"center"}
            py={{ md: 20 ,xs:3}}
           
            
          >
            <Box>
              <Typography
                component={"h1"}
                fontSize={{ md: "1.9em",xs:"1.2em" }}
                fontWeight={{ md: 700,sm:500,xs:400 }}
              >
                When Snow Falls, We’re Here
              </Typography>
              <Typography variant="body1" fontSize={{md:"1em",xs:".75em"}} component={"p"} my={{md:2,xs:1}}>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.​
              </Typography>
              <Typography variant="body1" fontSize={{md:"1em",xs:".75em"}} component={"p"}>
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              backgroundImage:
                "url(https://images.pexels.com/photos/4913502/pexels-photo-4913502.jpeg?auto=compress&cs=tinysrgb&w=600)",
              backgroundAttachment: "fixed",
              
            }}
          >
            <Box backgroundImage={"url ()"}></Box>
          </Grid>
        </Grid>
        {/* Grid Container 2 */}
        <Grid container>
          <Grid item md={6}>
            <img src="https://static.wixstatic.com/media/ea71bb_6d8ea675d24d4256bee26a0a2e7d3466~mv2.jpg/v1/fill/w_735,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_6d8ea675d24d4256bee26a0a2e7d3466~mv2.jpg" width={"100%"} height={"100%"} alt="" />
          </Grid>
          <Grid
            item
            md={6}
            px={1.4}
            bgcolor={''}
            textAlign={"center"}
            py={{ md: 20 }}
            sx={{bgcolor:'#fafafa'}}

          >
            <Box>
              <Typography
                component={"h1"}
                fontSize={{ md: "2em",xs:"1.5em" }}
                fontWeight={{ md: 700 }}
              >
                Adventure & Experience
              </Typography>
              <Typography variant="body1" component={"p"} fontSize={{md:"1em",xs:".75em"}} m={{md:" 20px 0",xs:"0 0 20px 0"}} >
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.​
              </Typography>
            
            </Box>
          </Grid>
        </Grid>
        {/* Grid Container 3*/}
        <Grid container>
        
          <Grid
            item
            md={6}
            px={1.4}
            bgcolor={''}
            textAlign={"center"}
            py={{ md: 20 }}
            
            sx={{bgcolor:'#fafafa'}}
          >
            <Box>
              <Typography
                component={"h1"}
                fontSize={{ md: "2em",sm:"1.7em",xs:"1.5em" }}
                fontWeight={{ md: 700 }}
              >
               
                Safety First
              </Typography>
              <Typography variant="body1" component={"p"} fontSize={{md:"1em",xs:".75em"}} my={{md:2}}>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.​
              </Typography>
          
            </Box>
          </Grid>
          <Grid item md={6}>
            <img src="https://static.wixstatic.com/media/ea71bb_b9186ba2a1814173bf7953c8cc4e56d3~mv2.jpg/v1/fill/w_735,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_b9186ba2a1814173bf7953c8cc4e56d3~mv2.jpg" width={"100%"} height={"100%"} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Adventure;
