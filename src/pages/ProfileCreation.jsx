import CloudinaryUpload from '../components/CloudinaryUpload'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Box, Typography, Stack, Button, IconButton, TextField } from "@mui/material"
import "../App.css"
import axios from 'axios';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { Navigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const ProfileCreation = () => {
  // const img = localStorage.getItem('image');
  // if (!img) {
  //   return <Outlet />;
  // } else {
  //   return <Navigate to="/home" />;
  // }
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const [image, setImage] = useState(null);
  const { values, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      location: ""
    },
    onSubmit: (values) => {
      const formdata = new FormData();
      formdata.append("image", image)
      formdata.append("location", values.location)
      // console.log(formdata.getAll("image"))
      // console.log(formdata.getAll("location"))
      handleOpen2()
      // console.log(JSON.parse(localStorage.getItem("user")))
      axios.put("https://dribble-task-1.onrender.com/api/update/profile", formdata, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user"))
        }
      }).then((value) => {
        // console.log(value)
        localStorage.setItem("image", JSON.stringify(image))
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
        navigate("/why-dribbble")

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
  const handleUpload = async (e) => {
    setImage("demo")
    handleOpen()
    const file = e.target.files[0];

    // Create a FormData object to send the file to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); // Replace 'your_upload_preset' with your Cloudinary upload preset name

    try {
      // Make a POST request to Cloudinary's upload API
      let response
      const prom = new Promise(async (resolve, reject) => {
        response = await axios.post(
          'https://api.cloudinary.com/v1_1/dehiyjo8l/image/upload',
          formData
        );
        resolve(response)
      })
      prom.then((response) => {
        // If upload is successful, set the image URL in state
        setImage(response.data.secure_url);
      }).then(() => { handleClose() })
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <Grid container justifyContent={{ xs: "center", }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item bgcolor={""} px={5} mt={5} xs={12} >
        <Box m={5} display={"flex"} justifyContent={{ xs: "center", md: "left" }} sx={{
          "&:hover": {
            opacity: 0.6
          }
        }}>
          <svg width="86" style={{ background: "" }} height="25" viewBox="0 0 210 59" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1" ><path fillRule="evenodd" clipRule="evenodd" d="M206.622 31.928a1.032 1.032 0 011.631.058h-.003l1.534 2.097c.291.403.289.96-.015 1.352-2.663 3.454-7.329 6.78-12.959 7.1-4.444.254-8.109-1.43-10.104-4.613a1.025 1.025 0 00-1.709-.07c-2.367 3.177-5.231 5.661-8.215 5.833-5.315.303-6.816-3.262-5.502-11.122.132-.783-.554-1.444-1.293-1.249a10.101 10.101 0 01-3.459.319 1.056 1.056 0 00-1.106.748c-1.967 6.46-6.648 12.47-12.707 12.819-3.868.221-9.646-1.995-9.068-11.254.048-.753-.628-1.346-1.324-1.135a10.249 10.249 0 01-3.849.43 1.053 1.053 0 00-1.103.748c-1.967 6.46-6.648 12.47-12.707 12.818-3.868.221-9.646-1.995-9.068-11.253.048-.754-.628-1.347-1.324-1.136-1.213.369-2.519.545-3.849.43a1.054 1.054 0 00-1.103.748c-1.968 6.46-6.648 12.47-12.707 12.818-2.752.158-6.473-.92-8.182-4.888a1.034 1.034 0 00-1.805-.216c-2.393 3.265-5.307 5.842-8.35 6.016-3.119.179-4.825-1.072-5.567-3.304a1.033 1.033 0 00-1.78-.35c-2.129 2.502-4.554 4.336-7.007 4.476-3.783.219-5.96-2.585-6.14-5.981-.207-3.963 1.507-8.603 3.42-13.667.266-.704-.215-1.465-.941-1.497a25.86 25.86 0 01-3.55-.384c-.534-.103-1.053.229-1.205.772-2.263 8.08-5.729 16.001-8.653 20.683-.327.524-1.003.664-1.494.303l-2.233-1.644a1.123 1.123 0 01-.276-1.486c4.226-6.769 7.978-17.366 9.271-25.205.081-.5.489-.872.978-.901l2.97-.171c.68-.04 1.217.595 1.093 1.293l-.013.074c-.111.622.304 1.207.904 1.289 2.663.366 6.643.41 9.344.305.76-.029 1.297.756 1.02 1.492-2.166 5.765-5.07 13.753-4.903 16.915.076 1.428.706 2.208 1.815 2.145 2.122-.121 5.385-4.387 7.859-9.137.045-.085.078-.177.098-.272.834-3.72 2.07-7.867 3.32-12.058l.078-.26a1.06 1.06 0 01.947-.77l3.557-.202c.734-.042 1.283.696 1.06 1.425l-.546 1.792c-3.13 10.26-5.758 18.875-2.218 18.673 2.314-.132 5.592-4.058 8.413-9.646.045-.092.078-.19.098-.292.142-.73.314-1.494.524-2.293 1.645-6.568 3.51-13.074 5.376-19.588.577-2.01 1.153-4.022 1.723-6.036.127-.445.507-.758.952-.785l3.651-.208c.742-.042 1.291.704 1.058 1.439a1647.233 1647.233 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.145 7.174 8.239.015.268.031.558.038.853.015.564.438 1.02.978 1.067 1.934.172 3.911-.403 5.438-1.765.157-.14.263-.33.316-.535 1.514-5.878 3.185-11.713 4.857-17.555.573-2 1.146-4.001 1.713-6.005.126-.446.506-.76.952-.786l3.65-.208c.742-.042 1.292.704 1.059 1.439a1619.481 1619.481 0 00-4.431 14.136c-.304.988.755 1.81 1.59 1.24 1.441-.985 3.107-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.268.03.559.038.854.012.563.438 1.02.977 1.067 1.934.17 3.911-.404 5.438-1.766.157-.14.263-.33.317-.535 1.514-5.878 3.184-11.713 4.857-17.555.573-2 1.145-4.001 1.712-6.005.127-.446.507-.76.952-.786l3.651-.208c.742-.042 1.291.704 1.058 1.439a1654.28 1654.28 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.271.03.558.037.854.016.56.436 1.02.975 1.067 1.871.166 3.785-.367 5.289-1.634.167-.14.283-.337.339-.553 1.724-6.645 4.256-15.35 6.697-23.682a1.06 1.06 0 01.949-.772l3.618-.208c.734-.042 1.283.69 1.063 1.42-3.36 11.156-6.099 20.915-7.61 26.672-2.008 7.81-2.086 10.063.197 9.931 1.917-.11 4.499-2.83 6.934-6.94a1.12 1.12 0 00.155-.532c.319-8.229 5.364-15.715 12.863-16.144 5.023-.287 7.775 3.507 7.972 7.24.375 7.128-6.67 11.683-13.498 11.262-.795-.05-1.373.803-1.023 1.546.954 2.04 2.962 3.178 6.39 2.98 3.261-.184 6.681-2.998 8.835-5.509zm-112.867 2c-1.62 6.495.347 9.037 2.891 8.892 4.177-.24 8.218-7.894 7.907-13.801-.137-2.58-1.646-3.923-3.408-3.823-2.934.169-6.094 3.549-7.39 8.732zm28.053-1.607c-1.62 6.494.347 9.037 2.892 8.892h-.003c4.177-.24 8.22-7.894 7.909-13.801-.134-2.58-1.646-3.923-3.408-3.823-2.934.168-6.093 3.549-7.39 8.732zm28.054-1.608c-1.62 6.495.347 9.038 2.891 8.893h-.002c4.174-.24 8.22-7.894 7.909-13.801-.135-2.58-1.646-3.924-3.408-3.823-2.934.168-6.094 3.549-7.39 8.731zm50.722-8.49c-.025-1.701-1.071-2.934-2.767-2.837h-.002c-3.332.192-5.94 3.8-6.77 8.176-.132.696.377 1.344 1.058 1.328 4.304-.108 8.618-2.948 8.481-6.666zm-156.232 3.16c-.435-13.187-9.01-21.89-21.68-21.436-5.441.247-11.667 2.31-16.35 6-.44.347-.555.985-.256 1.47l1.987 3.235a1.03 1.03 0 001.555.256c3.564-2.962 8.43-4.904 13.111-5.11 8.684-.36 15.064 5.2 15.436 15.939.466 12.505-7.94 26.81-21.446 27.584-.47.026-.962.037-1.453.037-.689 0-1.197-.672-1.025-1.368a769.967 769.967 0 018.747-32.287c.215-.73-.332-1.457-1.064-1.415l-3.95.227a1.064 1.064 0 00-.951.777c-2.98 10.313-5.962 21.497-8.646 31.992-.154.606-.77.954-1.342.759-1.4-.477-2.678-1.02-3.767-1.655-.521-.305-1.182-.09-1.45.47L.11 54.403c-.25.524-.065 1.167.428 1.449 3.846 2.181 9.684 3.428 15.552 3.093C35.403 57.84 44.864 40.002 44.352 25.39v-.005zM82.304 9.182c-2.349.134-4.433 2.774-4.286 5.557.096 1.834 1.274 3.059 3.102 2.956 2.349-.134 4.49-2.914 4.351-5.562-.096-1.834-1.47-3.049-3.167-2.951z" fill="currentColor"></path></svg>
        </Box>
      </Grid>
      <Grid item bgcolor={""}  xs={9} md={5}>
        <Typography sx={{  fontSize: { xs: "20px", sm: "32px" }, }} className='profile-hed' variant='h1' component={"h1"}>
          Welcome! Let’s create your profile
        </Typography>
        <Typography sx={{ fontSize: { xs: "13px", sm: "16px" }, marginTop: "17px", color: " #6e6d7a", lineHeight: "24px" }} paddingBottom={1} variant='p' component={"p"}>
          Let others get to know you better!
        </Typography>
        <Typography sx={{ fontSize: { xs: "18px", sm: "22px" }, fontWeight: "bold", fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', marginY: "26px" }} variant='h4' component={"h4"}>
          Add an avatar
        </Typography>
        <Stack paddingBottom={5} flexDirection={"row"} gap={5} useFlexGap flexWrap="wrap" justifyContent={{ xs: "center", sm: "left" }}>
          {image ? (
            <Box position="relative" className="profile" justifyContent={"center"} height={{ xs: "170px" }} width={{ xs: "170px" }} borderRadius={"50%"} alignItems={"center"}>
              <div>
                {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: "absolute", borderRadius: "50%" }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>

              <img src={image} className='img-fluid' style={{ objectFit: "cover", borderRadius: "50%", width: '100%', height: '100%' }} />
              <IconButton className='rounded-pill delete-b' onClick={() => { setImage(null); }} aria-label="delete" style={{ position: "absolute", bottom: 0, left: "50%", transform: `translate(-50%, 50%)`, border: "4px solid white", background: "red", color: "white" }} >
                <DeleteIcon color="white" />
              </IconButton>
            </Box>
          ) :
            <Button style={{ borderRadius: "50%", padding: 0, position: "relative" }} >
              <Box bgcolor="" display={"flex"} border={"3px dashed grey"} position="relative" justifyContent={"center"} height={{ xs: "170px" }} width={{ xs: "170px" }} className="uploadImg" borderRadius={"50%"} alignItems={"center"}>
                <input style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", opacity: 0 }} type="file" onChange={handleUpload} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
              </Box>
            </Button>

          }

          <Box >
            <Button
              style={{ border: "1.5px solid #e7e7e9", fontSize: "12px", textTransform: "inherit", color: "#0d0c22", padding: "10px 30px", fontWeight: "bold", marginTop: "20px" }}
              className='rounded-pill'
              component="label"
              role={undefined}
              tabIndex={-1}
            >
              Choose Image
              <VisuallyHiddenInput onChange={handleUpload} type="file" />
            </Button>
            <Box color="#908fa0" sx={{ fontWeight: "semi-bold" }} marginTop={1} >
              <span >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" svginline="" role="presentation" focusable="false" tabIndex="-1" className="fill-current icon-16"><path d="M4.47 1.154a.814.814 0 00-1.149 0 .806.806 0 000 1.143l3.636 3.62-3.636 3.62a.806.806 0 000 1.143.814.814 0 001.148 0L8.667 6.5a.817.817 0 00.224-.381.806.806 0 00-.228-.79L4.47 1.155z"></path></svg></span> <span>
                Or choose one of our defaults
              </span>
            </Box>
          </Box>
        </Stack>
        <Typography sx={{ fontSize: { xs: "18px", sm: "22px" }, fontWeight: "bold", fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', marginY: "15px" }} variant='h4' component={"h4"}>
          Add your location
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" name="location" value={values.location} onChange={handleChange} label="Enter a location" variant="standard" fullWidth />
          <Button type="submit" disabled={!Boolean(values.location)} variant="contained"
            sx={{
              marginY: 4, paddingX: 6, background: "#ea4b8a", "&:disabled": {
                background: "#f8b8d0",
                color: "white"
              }, "&:hover": {
                background: "#ea4b8a"
              }

            }}>Next</Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default ProfileCreation
