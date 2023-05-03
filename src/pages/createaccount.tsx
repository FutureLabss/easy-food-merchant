import {Stack, Box, TextField, InputLabel, Grid, Select} from "@mui/material"
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from "react";
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

export default function CreateAccountPage(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    return(
        <>
        <Stack component="form" 
        sx={{backgroundColor:"#26734A"}}>
         <Stack sx={{backgroundColor:"#FFFFFF",
          mt:{xs:"70px", sm:"53px", md:"5.84vw"},
          borderRadius:"16px 16px 0px 0px",}}>
        <Stack sx={{
            mt:"-10px",
            backgroundColor:" rgba(255, 255, 255, 0.2)", 
            px:{xs:"10px", sm:"5px", md:"0.58vw"},
            borderRadius:"16px 16px 0px 0px",
            }}>
            <Box  sx={{width: {xs:"39px", sm:"63px", md:"6.53vw"},
                mt:{xs:"25px", sm:"21px", md:"2.31vw"},
                height: {xs:"39px", sm:"63px", md:"6.53vw"}, 
                borderRadius:"20px", 
                border: "1px solid  #99A39E"}}>
                <Box sx={{mt:{xs:"10px", sm:"27px", md:"1.78vw"},
                mx:{xs:"10px", sm:"27px", md:"2.28vw"},
                }}>
                <ArrowBackIosNewIcon />
                </Box>
            </Box>
        <Stack>
            <Typography sx={{
                color:"#000000",
                fontSize:"27.65px",
                mt:{xs:"10px", sm:"15px", md:"1.62vw"},
                fontWeight:"700",
            }}>
           Create an Account
            </Typography>
            <Typography sx={{fontSize:"16px", 
            color:"#717C76", mt:"8px", 
            fontWeight:"400"}}>
            Your customers are just a click away, Signup!
            </Typography>
        </Stack>
       <Grid container  spacing={3}
        mt="32px"
        sx={{px:{xs:"8%", sm:"5px", md:"0.58vw"}}}>
          <Grid container  mt={{xs:"13px", sm:"21px", md:"1vw"}}>
          <Grid item xs={12} md={6}>
              <InputLabel sx={{fontSize:"14px", fontWeight:"600", color:"#000000"}}>
              Business Phone Number
              </InputLabel>
            <TextField
              placeholder="Enter your Phone Number"
              size="small"
              variant="outlined"
              fullWidth
              name="title"
            />
          </Grid>
       </Grid>
            <RoundButton variant="contained" fullWidth
            sx={{ fontSize: "16px", 
            fontWeight:"700",
            width:{xs:"100%", sm:"100%", md:"50%"}, 
            mt:"30px",
            color:"#FFFFFF",}}
            
            > Proceed </RoundButton>
          
            </Grid>
            <Box sx={{mt:"22px"}}>
                <Typography fontSize="16px" fontWeight="400">
                Don’t have an Account?
                {/* <RoundButton> */}
                <Link href="/login">
                <span style={{color:"#3BB273"}}>
                 Log In
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