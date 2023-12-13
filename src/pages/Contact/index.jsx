import { AccountCircle, CloseTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
            const navigate= useNavigate()
              

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4555454/pexels-photo-4555454.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{  bgcolor: "black", position: "relative" }}
      >
        <CloseTwoTone fontSize="large" onClick={()=>navigate("/Home")} sx={{color:"red",ml:"auto",fontWeight:"bold"}} />
        <Box textAlign={"center"} py={{ md: 12 }}>
          <Typography
            variant="h1"
            fontSize={{ md: "3.5rem", sm: "2rem", xs: "1.5rem" }}
            fontWeight={{ md: 700, sm: 500, xs: 400 }}
            pt={2}
            color={"red"}
          >
            Contact Us
          </Typography>
          <Typography
            width={{ md: "60%", sm: "58%", xs: "70%" }}
            m={"auto"}
            pt={{ md: 3, sm: 2, xs: 1 }}
            letterSpacing={{ md: 1 }}
            lineHeight={{ md: 1.5, sm: 0 }}
            fontWeight={"light"}
            fontSize={{ md: "1.2em", xs: ".7em" }}
            color={"white"}
          >
            For tour enquiries or any questions, please use the form below and
            we will get back to you.
          </Typography>
        </Box >
        <Container sx={{ width: {md:"54%"},textAlign:"center",mt:2 }}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
                First Name
              </InputLabel>
              <Input
              sx={{mb:3}}
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
                Last Name
              </InputLabel>
              <Input
              sx={{mb:3}}
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" >
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
                Email*
              </InputLabel>
              <Input
              sx={{mb:3}}
              required
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl  variant="standard" >
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
                Subject
              </InputLabel>
              <Input
              sx={{mb:3}}
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            {/* <FormControl fullWidth variant="standard" >
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
                Subject
              </InputLabel>
              <Input
              sx={{mb:3}}
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl> */}
          
          <FormControl fullWidth variant="standard" sx={{width:{md:"96%",xs:"70%"},ml:1,mt:1}}>
              <InputLabel sx={{ color: "white", fontSize: "1.4em" }}>
              Leave Us Message...
              </InputLabel>
              <Input
              sx={{pt:6}}
                error
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            </Box>
            <Button  variant="contained" sx={{bgcolor:"red",my:{md:10,sm:6,xs:3},}} >Sumbit</Button>
        </Container>
      </Container>
    </Box>
  );
};

export default Contact;
