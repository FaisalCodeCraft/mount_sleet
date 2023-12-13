import { Chat, TerrainOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"black"} color={"white"} mt={8}>
      <Container maxWidth={"md"}>
        <Grid container py={{ md: 10, sm: 6, xs: 3 }}>
          {/* Grid item 1 */}
          <Grid item md={6}>
            <Box width={"120px"} textAlign={"center"} mt={1}>
              <TerrainOutlined fontSize="large" fontWeight="light" />
              <Typography variant="h6" fontWeight={"bold"}>
                Mount Sleet
              </Typography>
              <Typography variant="body2">Winter Tours</Typography>
            </Box>
          </Grid>

          {/* Grid item 2 */}
          <Grid item md={2}>
            <List>
              <ListItem>
                <Link
                  href="/About"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Trials"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Trials
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/News"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  New
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Contact"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid>
          {/* Grid item 3 */}
          <Grid item md={1}>
            <List>
              <ListItem>
                <Link
                  href="/About"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Facebook
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Trials"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Instagram
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Grid item 4 */}
          <Grid md={3} textAlign={"right"} mt={2}>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "red",
                color: "black",
                px: "1.5em",
                fontWeight: "light",
              }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
        <Box pb={{ md: 10 }}>
          <Typography variant="body2" fontWeight={200}>
            © 2035 by Mount Sleet.
          </Typography>
          <Typography variant="body2" fontWeight={200}>
            Powered and secured by Wix
          </Typography>
        </Box>
      </Container>
      <Box position={"relative"}>
        <Button
          sx={{
            position: "fixed",
            bottom: "5%",
            right: { md: "1%", xs: "0" },
            p: { md: ".7em 2em" },
            bgcolor: "red",
            color: "black",
          }}
        >
          <Chat sx={{mr:2}}/>
          Let's Chat
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
