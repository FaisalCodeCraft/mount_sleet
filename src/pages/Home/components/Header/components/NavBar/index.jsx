import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, Container, Link, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    // toggle for small screen
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} px={3}>
      <List>
        <ListItem>
          <Link href="#Home" sx={{ color: "black", textDecoration: "none" }}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#About" sx={{ color: "black", textDecoration: "none" }}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#Trials" sx={{ color: "black", textDecoration: "none" }}>
            Trials
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#News" sx={{ color: "black", textDecoration: "none" }}>
            News
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#Contact" sx={{ color: "black", textDecoration: "none" }}>
            Home
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                color: "white",
              }}
              width={"100%"}
              flexGrow={1}
              href="#Home"
            >
              <Typography
                bgcolor={"red"}
                color={"black"}
                position={"absolute"}
                width={160}
                top={0}
                textAlign={"center"}
                fontSize={20}
                fontWeight={700}
                py={4}
              >
                Mount Sleet{""} <br />
                <small style={{ fontWeight: 400 }}>Winter Tours</small>
              </Typography>
            </Link>
            <List
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                p: "1.8em",
              }}
            >
              <ListItem>
                <Link
                  href="#About"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#Trials"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Trials
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#News"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  New
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#Contact"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </ListItem>
            </List>
            <Button color="error" sx={{ display: "flex" }}>
              <AccountCircle sx={{ mr: 0.6, fontSize: "2.3em" }} /> LogIn
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default NavBar;
