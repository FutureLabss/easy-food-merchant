import {Stack,
   Box, 
  TextField, 
  InputLabel, Grid, 
  Select,
  Alert,
} from "@mui/material"
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from "react";
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
import { contextProvider } from "../context/auth";
// import { useCreateMerchantProfile } from '../hooks/profile'
import { ISignUp } from "@/lib/interfaces/signup";
import LogInLoading from "@/component/Loading/loading";
import CircularProgress from '@mui/material/CircularProgress';
// import * as Yup from 'yup';
//  import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { useForm, SubmitHandler } from "react-hook-form";


// interface State {
//   phone: string;
//   password: string;
//   fullname: string;
// };
export default function CreateAccountPage(){
  const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>();
    const {signUp} = contextProvider();
    const [input, setInput] = useState <ISignUp>({phone:'', password:'', fullname:" john fidelis", role:"merchant"});
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState("");
    
    // const {createMerchantProfile, loading:editLoading} = useCreateMerchantProfile();
    // console.log({createMerchantProfile})
    
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput({ ...input, [name]: value });
      
    };
    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   signUp(input)
    //   setLoading(true);
    //   console.log(input)
    //   // setLoading(false);
    //   // createMerchantProfile(input)
    // }
    const onSubmit = async () => {
    try {
      setLoading(true);
     await signUp(input)
      // Perform your async operation, e.g., API call
      // await yourAsyncFunction(data);
      setLoading(false);
    } catch (e: any) {
      // console.log(error)
      setError(e.message);
      setLoading(false);
      // Handle the error
    }
  }
      // setLoading(true);
      // console.log(input)
    //  console.log(input);

    return(
        <>
        <Stack component="form" 
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(onSubmit)}
        sx={{backgroundColor:"#26734A", 
         width:"396px",
        mx:"auto"}}>
         <Stack sx={{backgroundColor:"#FFFFFF",
          mt:{xs:"100px", sm:"53px", md:"5.84vw"},
          borderRadius:"16px 16px 0px 0px", 
          padding:"16px"}}>
        <Stack sx={{
            mt:{xs:"-28px", md:"-25px"},
            backgroundColor:" rgba(255, 255, 255, 0.2)", 
            px:{xs:"10px", sm:"5px", md:"0.58vw"},
            borderRadius:"16px 16px 0px 0px",
            // border:"solid red",
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
                color:"#000000",
                fontSize:"29.85px",
                mt:{xs:"20px", sm:"15px", md:"1.62vw"},
                fontWeight:"700",
            }}>
           Create an Account
            </Typography>
            <Typography sx={{fontSize:"18px", 
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
            {...register("phone", { required: true, minLength: 11 })}
            // required
              placeholder="Enter your Phone Number"
              size="small"
              variant="outlined"
              value={input.phone} 
              onChange={handleChange}
              fullWidth
              name="phone"
            />
            {errors.phone && errors.phone.type === "required" && (
            <p>Phone is required</p>
            )}
          {errors.phone && errors.phone.type === "minLength" && (
            <p>Phone must be at least 10 characters long</p>
          )}
          {error && <Alert severity="error">{error}</Alert>}
            {/* {phone.error} */}
          </Grid>
       </Grid>

       <Grid container  mt="30px">
        <Grid item xs={12} md={6} >
          <InputLabel sx={{fontSize:"16px", color:"#000000",
        fontWeight:"600"}}>
          Password
        </InputLabel>
        <OutlinedInput
         {...register("password", {required: true, minLength: 8, maxLength: 20 })}
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
          {/* <p> Password must be at least 8 characters long </p> */}
          {errors.password && errors.password.type === "required" && (
            <p> Password is required </p>
          )}
          {errors.password && errors.password.type === "minLength" && (
       <p> Password must be at least 8 characters long </p>
      )}

      {errors.password && errors.password.type === "maxLength" && (
        <p>Password cannot be more than 20 characters long</p>
      )}
          </Grid>
          </Grid>
            {loading ? <RoundButton className="text-center" sx={{mx:"auto", mt:"20px", backgroundColor:"inherit"}}> 
            <CircularProgress color="inherit" />
            </RoundButton> : <RoundButton variant="contained" 
            type="submit"
            fullWidth
            sx={{ fontSize: "16px", 
            fontWeight:"700",
            width:{xs:"100%", sm:"100%", md:"100%"}, 
            mt:"38px",
            color:"#FFFFFF",
            padding:"13px"}}>
               Proceed </RoundButton>
           }
          
            </Grid>
            <Box sx={{mt:"30px"}}>
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