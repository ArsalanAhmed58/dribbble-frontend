import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Study from "../Anima/Study"
import Lottie from 'lottie-react';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'

import { useNavigate } from "react-router-dom"
// CommonJS

export default function Login() {
    const navigation = useNavigate()
    // const Swal = require('sweetalert2')
    const base = {
        username: "arsalan",
        password: "ahmed"
    }
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const [eye, setEye] = useState(true)


    return (
        <>
            {/* <Box component="section" sx={{ background: "linear-gradient(to right, #7F00FF, #E100FF)", minHeight: "100vh", padding: 0, display: "flex", alignItems: "center" }}>
                <Container sx={{ borderRadius: "200px" }}>
                    <Grid container sx={{ margin: 0, padding: 0, background: "white", borderRadius: "20px" }}>
                        <Grid item xs={7} sx={{ background: "linear-gradient(to right, blue, red)", borderRadius: "20px 0px 0px 20px" }}>
                            <Lottie animationData={Study}></Lottie>
                        </Grid>
                        <Grid item xs={5} bgcolor={""}>
                            <Grid container sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Grid item xs={9} textAlign={"center"}>
                                    <form id="form" onSubmit={(e) => {
                                        e.preventDefault()
                                        let form = document.getElementById('form')

                                        if (base.username == data.username && base.password == data.password) {
                                            e.target.reset()
                                            window.location.href = "/Home"
                                            console.log("right")

                                        } else if (data.username == "" || data.password == "") {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Kindly please fill all the fields!',
                                                footer: '<a href="">Why do I have this issue?</a>'
                                            })

                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: ' Incorrect Username or Password!',
                                                footer: '<a href="">Why do I have this issue?</a>'
                                            })
                                        }
                                        console.log(data)
                                    }}>

                                        <Typography varient="h3" sx={{ color: "blue", fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>User Login</Typography>
                                        <Typography sx={{ color: "gray", marginY: "10px", fontSize: "15px" }}>
                                            Hey enter your detail to sign in to your account
                                        </Typography>
                                        <TextField id="input-with-icon-textfield"
                                            // label="TextField"
                                            // fullWidth
                                            sx={{ width: "100%", margin: "auto" }}
                                            // fullWidth
                                            placeholder='Enter your Username/Email'
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonOutlineOutlinedIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                            onChange={(e) => {
                                                setData(
                                                    {
                                                        ...data, username: e.target.value
                                                    }
                                                )
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <TextField id="input-with-icon"
                                            sx={{ width: "100%", marginTop: "10px" }}
                                            placeholder='Enter your password'
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" style={{ cursor: 'pointer' }} onClick={() => {
                                                        setEye(!eye)
                                                    }}>
                                                        {eye ? <VisibilityOffIcon /> : <VisibilityOutlinedIcon />}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            type={eye ? "password" : "text"}
                                            variant="outlined"
                                            onChange={(e) => {
                                                setData(
                                                    {
                                                        ...data, password: e.target.value
                                                    }
                                                )
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <Typography sx={{ textAlign: 'left', color: "gray", fontSize: "15px", marginY: "10px" }}>
                                            Having Trouble in sign in?
                                        </Typography>
                                        <Button variant="contained" type="submit" sx={{ textDecoration: "lowercase", marginY: "10px" }} fullWidth>Login In</Button>
                                        <Typography sx={{ marginTop: "20px", marginBottom: "8px", fontSize: "13px" }}>
                                            Or sign in with
                                        </Typography>
                                        <Button variant="outlined" sx={{ borderColor: "lightgray", color: "black" }} startIcon={<GoogleIcon />}>
                                            Google
                                        </Button>
                                        <Button variant="outlined" sx={{ marginLeft: "10px", borderColor: "lightgray", color: "black" }} startIcon={<FacebookOutlinedIcon />}>
                                            Facebook
                                        </Button>
                                        <Typography sx={{ marginTop: "30px", color: "gray" }}>
                                            Don't Have an account? <Link to="/Sign-up" sx={{ color: "blue", textDecoration: "none" }}>Signup Now</Link>
                                        </Typography>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box > */}
            <Box component="section" display={"flex"} textAlign={"center"} justifyContent={"center"} alignItems={"center"} sx={{ background: "linear-gradient(to right, #7F00FF, #E100FF)", minHeight: "100vh", padding: 0, display: "flex", alignItems: "center" }}>
                <Typography variant='h4' >

                    This login page was not in the task so go to <a href=''>Sign up</a>
                </Typography>
            </Box>
        </>
    );
}