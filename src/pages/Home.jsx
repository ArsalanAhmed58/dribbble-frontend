import React from 'react'
import { Box, Typography, Grid } from "@mui/material"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Footer from '../components/Footer';
const Home = () => {
  const image = JSON.parse( localStorage.getItem("image"))
  return (
    <>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
        <Typography variant='h4' fontSize={{xs:18, sm:30}} marginTop={{ xs: 4, md: 8 }} background="red" fontWeight={"bold"}>
          Please verify your email...
        </Typography>
        <MarkEmailReadIcon sx={{ fontSize: {xs:150, md:200}, color: "#bbbbbb" }} />
        <Typography variant="body1" gutterBottom textAlign={"center"}>
          Please verify your email address. We've sent a confirmation email to:
        </Typography>
        <Typography variant="body1" marginY={3} gutterBottom style={{ fontWeight: 'bold' }}>
          account@refero.design
        </Typography>
        <Typography variant="body1" color={"#908e95"} fontWeight={"bold"} gutterBottom px={{ xs: 7, sm: 20, lg: 50 }} textAlign={"center"}>
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
          you still don't see it, you can <Link href="#" className='home-a'>resend the confirmation email</Link>.
        </Typography>
        <Typography variant="body1" color={"#908e95"} my={3} fontWeight={"semi-bold"} gutterBottom px={{ xs: 7, sm: 20, lg: 50 }} textAlign={"center"}>
          Wrong email address? <Link href="#" className='home-a'>Change it</Link>.
        </Typography>
      </Box>
      <Footer/>
    </>
  )
}

export default Home
