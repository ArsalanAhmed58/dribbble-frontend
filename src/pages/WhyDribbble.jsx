import React from 'react';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import Lottie from "lottie-react"
import Designer from "../Anima/Designer.json"
import Inspiration from "../Anima/Inspiration.json"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Radio, { radioClasses } from '@mui/material/Radio';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Hire from "../Anima/Hire.json"
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Navigation } from '@mui/icons-material';
import { useFormik } from 'formik';
const WhyDribbble = ({ }) => {
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
  };
  const currRef = React.useRef()
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: 'size-radio-button-demo',
    inputprops: { 'aria-label': item },
  });
  const { values, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      description: ""
    },
    onSubmit: (values) => {
      const formdata = new FormData();
      formdata.append("description", selectedValue)
      handleOpen2()
      // console.log(JSON.parse(localStorage.getItem("user")))
      axios.put("https://dribble-task-1.onrender.com/api/update/description", formdata, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user"))
        }
      }).then((value) => {
        handleClose2()
        // console.log(value.data)

        if (value.data.type == "error") {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: value.data.message,
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: value.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
        navigate("/home")


      }).catch((error) => {
        handleClose2()

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      })

    }
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open2}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Grid item xs={12} flexDirection={"column"} display="flex" justifyContent="center" alignItems="center">
            <Typography variant='h3' className='why-head' component={"h3"}>
              What brings you to Dribbble?
            </Typography>
            <Typography variant='p' color={"#7c7a83"} my={2} component={"p"}>Select the options that best describe you. Don't worry, you can explore other options later.</Typography>
          </Grid>
          <Container maxWidth="lg" sx={{ display: "flex", background: "", justifyContent: "center", marginY: { xs: 5, md: 10 } }} >
            <Grid container sx={{ background: "" }} >
              <Grid item xs={12} sm={4} bgcolor={""} px={2}>
                <label htmlFor="a">
                  <Box textAlign="center" onClick={(e) => { setSelectedValue("a"); }} sx={{ border: "1.5px solid #ececec" }} bgcolor={""} className="custom-border rounded-3">
                    <Lottie sx={{ margin: "-100px" }} className={"img-fluid"} animationData={Designer} />
                    <Typography variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} px={{ sm: 0, md: 2 }} component="p" textAlign={"center"} fontWeight={"bold"} fontSize={{ xs: "20px", sm: "15px", md: "18px" }}>I'm a designer looking to share my work</Typography>
                    <Typography className='descrip' overflow={"hidden"} variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} component="p" textAlign={"center"} fontSize={{ xs: "8px", sm: "10px", md: "12px" }}>
                      With over 7 million shots from vast community of designers, Dribble is the leading source for design inspiration
                    </Typography>
                    <Radio
                      id="a"
                      onClick={(e) => {
                        // console.log(e.target.checked)
                      }}
                      {...controlProps('a')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 28,
                          color: "#ec4a8a"
                        },
                      }}
                      checkedIcon={<CheckCircleRoundedIcon />} />
                  </Box>
                </label>
              </Grid>
              <Grid item xs={12} sm={4} bgcolor={""} px={2}>
                <label htmlFor="b">
                  <Box ref={currRef} textAlign="center" onClick={(e) => { setSelectedValue("b") }} bgcolor={""} sx={{ border: "1.5px solid #ececec" }} className="custom-border rounded-3">
                    <Lottie className={"img-fluid"} animationData={Hire} />
                    <Typography variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} px={{ sm: 0, md: 2 }} component="p" textAlign={"center"} fontWeight={"bold"} fontSize={{ xs: "20px", sm: "15px", md: "18px" }}>I'm looking to hire a designer</Typography>
                    <Typography className='descrip' overflow={"hidden"} variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} component="p" textAlign={"center"} fontSize={{ xs: "8px", sm: "10px", md: "12px" }}>
                      With over 7 million shots from vast community of designers, Dribble is the leading source for design inspiration
                    </Typography>

                    <Radio
                      {...controlProps('b')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 28,
                          color: "#ec4a8a"
                        },
                      }}
                      checkedIcon={<CheckCircleRoundedIcon />} />
                  </Box>
                </label>
              </Grid>
              <Grid item xs={12} sm={4} bgcolor={""} px={2}>
                <label htmlFor="c">

                  <Box textAlign="center" onClick={(e) => { setSelectedValue("c"); }} sx={{ border: "1.5px solid #ececec" }} bgcolor={""} className="custom-border rounded-3">
                    <Lottie className={"img-fluid"} animationData={Inspiration} />
                    <Typography variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} component="p" textAlign={"center"} fontWeight={"bold"} fontSize={{ xs: "20px", sm: "15px", md: "18px" }}>I'm looking for design inspiration</Typography>
                    <Typography className='descrip' overflow={"hidden"} variant="p" sx={{ paddingX: { sm: 0, md: 0, lg: 6 } }} component="p" textAlign={"center"} fontSize={{ xs: "8px", sm: "10px", md: "12px" }}>
                      With over 7 million shots from vast community of designers, Dribble is the leading source for design inspiration
                    </Typography>
                    <Radio
                      {...controlProps('c')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 28,
                          color: "#ec4a8a"
                        },
                      }}
                      checkedIcon={<CheckCircleRoundedIcon />} />
                  </Box>
                </label>
              </Grid>
            </Grid>
          </Container>
          <Grid item xs={12} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Button type="submit" sx={{
              bgcolor: selectedValue ? "#ea4b8a" : "#f8b8d0", color: "white", paddingX: 10, textTransform: "capitalize", "&:disabled": { color: "white" }, "&:hover": {
                bgcolor: "#ea4b8a"
              }
            }} disabled={selectedValue ? false : true}>
              Finish
            </Button>
            <Typography color={"#999a9f"} onClick={() => { navigate("/profile-creation") }}>
              or press Return
            </Typography>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default WhyDribbble;