import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import trailContext from "context/trailCreateContext";
import { useContext } from "react";
import { BookOnline, ExpandLess, ExpandMore } from "@mui/icons-material";

const BookTrailModal = () => {
  // ////
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [incDec, setincDec] = React.useState(0);
  // ////

  const { trail, setTrail } = useContext(trailContext);

  const removeOneByOne = (index) => {
    const remove = trail.filter((_, i) => i !== index);
    setTrail(remove);
  };

  const handleIncrease = (index) => {
  //for Re-rendering
    setincDec(incDec + 1);
    //
    trail[index].quantity = trail[index].quantity + 1;
    setTrail(trail);
  };
  const handleDecrease = (index) => {
  //for Re-rendering
    setincDec(incDec - 1);
    //
    if (trail[index].quantity > 1) {
      trail[index].quantity = trail[index].quantity - 1;
      setTrail(trail);
    }
  };

  const totalPrice = trail.reduce(
    (e, curr) => e + curr.price * curr.quantity,
    0
  );

  return (
    <div>
      <Button onClick={handleOpen} sx={{ ml: 3 }}>
        <BookOnline color="error" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ transform: "translate(-50%, -50%)", overflowX: "hidden" }}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          width={{ md: "78%", sm: "66%", xs: "75%" }}
          minHeight={"42vh"}
          maxHeight={"70vh"}
          bgcolor="white"
          overflow={"scroll"}
          pt={2}
          px={{ md: 6, xs: 1 }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"bold"}>Booked Trail</Typography>
            <Button
              sx={{ borderBottom: "2px solid red", color: "red" }}
              onClick={() => setTrail([])}
            >
              Remove All
            </Button>
          </Box>
          <Grid container spacing={4} py={4} pl={{ md: 0, sm: 0, xs: 5 }}>
            {trail.map((i, index) => (
              <Grid item md={12} xs={12}>
                <Box
                  display={{ md: "flex", sm: "flex" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <img src={i.poster} alt="Hikers" width={"140px"} />

                  <Box
                    display={{ md: "flex" }}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    ml={{ md: 0, sm: 2 }}
                    my={1}
                  >
                    <Typography
                      fontSize={".9em"}
                      ml={{ md: 2 }}
                      fontWeight={500}
                    >
                      {i.tittle}
                    </Typography>
                    <Typography ml={{ md: 2 }}>{i.offer}</Typography>
                    <Typography ml={{ md: 2 }}>{i.timeDuration} hr</Typography>
                    <Typography ml={{ md: 2 }}>
                      {i.price * i.quantity} $
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    ml={{ md: 0, sm: 0, xs: -3 }}
                  >
                    <Button onClick={() => handleIncrease(index)}>
                      <ExpandLess />
                    </Button>
                    <Typography>{i.quantity}</Typography>
                    <Button onClick={() => handleDecrease(index)}>
                      <ExpandMore />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => removeOneByOne(index)}
                      sx={{
                        bgcolor: "red",
                        color: "black",
                        my: 1,
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            position={"sticky"}
            bottom={"0"}
            bgcolor={"white"}
            p={2}
          >
            <Typography>
              <span style={{ fontWeight: 500 }}>Booked Trail : </span>
              {trail.length}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 500 }}>Total Price : </span>
              {totalPrice} $
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default BookTrailModal;
