import {Stack, Box, TextField, InputLabel, Grid, Select} from "@mui/material"
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState, ChangeEvent, FormEvent, } from "react";
import RoundButton from "@/component/merchant/roundbutton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link'
import axios from "axios"
import { contextProvider } from "../context/auth";
import CircularProgress from '@mui/material/CircularProgress';


interface State {
  phone: string;
  password: string;
};

export default function LogInPage(){
  const { login } = contextProvider()
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loading, setLoading] = React.useState(false);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const [input, setInput] = useState({phone:'', password:''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      login(input)
      setLoading(true)
      console.log(input)
    };
    

  
    return(
        <>
        <Stack component="form" 
        onSubmit={handleSubmit}
        sx={{backgroundColor:"#26734A",
        width:"396px",
        mx:"auto"
        }}>
         <Stack sx={{backgroundColor:"#FFFFFF",
          mt:{xs:"100px", sm:"53px", md:"5.84vw"},
          borderRadius:"16px 16px 0px 0px",
          padding:"16px"
         }}>
        <Stack sx={{
            mt:{xs:"-28px", md:"-25px"},
            backgroundColor:" rgba(255, 255, 255, 0.2)", 
            px:{xs:"10px", sm:"5px", md:"0.58vw"},
            borderRadius:"16px 16px 0px 0px",
            height:{xs:"115vh", md:""},
            }}>
            <Box  sx={{width: {xs:"39px", sm:"63px", md:"6.53vw"},
                mt:{xs:"40px", sm:"21px", md:"2.31vw"},
                height: {xs:"39px", sm:"63px", md:"6.53vw"}, 
                borderRadius:"20px", 
                border: "1px solid  #99A39E"}}>
                   <Link href="/splash">
                <Box sx={{mt:{xs:"10px", sm:"27px", md:"1.78vw"},
                mx:{xs:"10px", sm:"27px", md:"2.28vw"},
                }}>
                <ArrowBackIosNewIcon />
                </Box>
                </Link>
            </Box>
        <Stack>
            <Typography sx={{
                fontSize:"29.85px",
                mt:{xs:"10px", sm:"15px", md:"1.62vw"},
                fontWeight:"700",
            }}>
            Login
            </Typography>
            <Typography sx={{fontSize:"18px", 
            color:"#717C76", 
            mt:"8px", 
            fontWeight:"400"}}>
            Your customers are just a click away, Login!
            </Typography>
        </Stack>
       <Grid container  spacing={3} 
        mt={{xs:"20px", sm:"17px", md:"1.85vw"}}
        sx={{px:{xs:"8%", sm:"5px", md:"0.58vw"}}}>
          <Grid container  mt="30px" >
          <Grid item xs={12} md={6}>
              <InputLabel sx={{fontSize:"16px", color:"#000000", fontWeight:"600"}}>
              Phone Number
              </InputLabel>
            <TextField
              placeholder="Enter your Phone Number"
              size="small"
              name="phone" 
              value={input.phone} 
              onChange={handleChange}
              variant="outlined"
              fullWidth
              // name="title"
            />
          </Grid>
       </Grid>
       <Grid container  mt="30px">
        <Grid item xs={12} md={6} >
          <InputLabel sx={{fontSize:"16px", color:"#000000",
        fontWeight:"600"}}>
          Password
        </InputLabel>
        <OutlinedInput
          name="password"
          value={input.password} 
          onChange={handleChange}
            placeholder="Password"
            size="small"
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Box>
          <RoundButton sx={{
            fontSize:"12px",
            ml:{xs:"150px", sm:"134px", md:"14.87vw"},
            color:" #000000",
            fontWeight:"600"
          }}>
          Forgot Password
          </RoundButton>
          </Box>
          </Grid>
          </Grid>
          {loading ? <RoundButton className="text-center" 
          sx={{mx:"auto", mt:"20px", 
          backgroundColor:"inherit"}}> 
            <CircularProgress color="inherit" />
            </RoundButton> :
            <RoundButton 
            variant="contained" 
            fullWidth
            type='submit'
            sx={{ fontSize: "16px", 
            width:{xs:"100%", sm:"100%", md:"100%"}, 
            mt:{xs:"30px", sm:"20px", md:"2.26vw"},
            color:"#FFFFFF",
          fontWeight:"700",
        padding:"13px"}}
            
            > Log In </RoundButton>}
          
            </Grid>
            <Box sx={{mt:"30px"}}>
                <Typography fontSize="16px" fontWeight="400">
                Have an Account?
                {/* <RoundButton> */}
                <Link href="/createaccount">
                  <span style={{color:"#3BB273"}}>
                 Sign Up
                  </span>
                 </Link>
                 {/* </RoundButton> */}
                </Typography>
            </Box>
          </Stack>
          </Stack>
        </Stack>
        </>
    )
}


