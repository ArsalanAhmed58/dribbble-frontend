import { FormControl, InputBase, InputLabel } from '@mui/material'
import React from 'react'

const CustomInput = ({touched, error, value, name = "email", onChange, label, fullWidth = false, placeholder }) => {
    // console.log(value)
    return (

            <FormControl variant="standard" fullWidth={fullWidth} >
                <InputLabel shrink htmlFor="bootstrap-input" className={"loginLabel"}>
                    {label}
                </InputLabel>
                <InputBase sx={{
                    'label + &': {
                        marginTop: 3,
                    },
                    '&:focus': {
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 0 0 4px rgba(234,100,217,0.1)",
                        borderColor: "rgba(234, 100, 217, 0.4)", outline: "none",
                    },
                    '&:hover': {
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        backgroundColor: " #fff",
                        boxShadow: "0 0 0 4px rgba(234,100,217,0.1)", outline: "none",

                    },
                    fontFamily: [
                        "Mona Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"
                    ].join(','),
                    borderRadius: "12px",
                    position: 'relative',
                    border: '1px solid rgba(0, 0, 0, 0.1) ',
                    outline: "none",
                    fontSize: "14px",
                    width: '100%',
                    padding: '18px 20px',
                    height: "56px",
                    boxSizing: "border-box",
                    lineHeight: "28px",
                    transition: "borderColor 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                }} name={name} value={value} onChange={onChange} />
                {error && touched ? <p style={{color:"red", fontSize:"15px"}}>{error}</p> : ""}
            </FormControl>
    )
}

export default CustomInput
