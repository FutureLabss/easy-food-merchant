import { Grid, TextField, Stack, Box } from "@mui/material"
import RoundButton from "@/component/merchant/roundbutton"
import * as React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
type prop={
    props:string;
  }
export default function SignInOption(props:prop){
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        router.push("/merchant/login")

      };
return(
    <>
    <Stack sx={{backgroundColor:"#26734A"}}>
        <Box sx={{backgroundColor:"#FFFFFF", 
        mt:{xs:"380px", sm:"277px", md:"30.73vw"}, 
        borderRadius:" 32px 32px 0px 0px",
       }}>
            <Box 
            sx={{ px:{xs:"3.20vw", md:"0.81vw"},
            mt:{xs:"17px", sm:"25px", md:"2.78vw"},
            ml:{md:"20%"} }}>
            <RoundButton
            // onClick={handle}
             variant="contained" 
            sx={{ fontSize: "16px", 
            width:{xs:"100%", sm:"100%", md:"50%"}, 
            mt:{xs:"13px", sm:"21px", md:"2vw"},
            color:"#FFFFFF",
            fontWeight:"700",
            }}>
             <Link href="/merchant/createaccount">
                 Create an Account
            </Link>
             </RoundButton>
            </Box>
            <Box 
            sx={{ px:{xs:"3.20vw", md:"0.81vw"},
            mt:{xs:"5px", sm:"7px", md:"0.81vw"},
            ml:{md:"20%"}}}>
            <RoundButton  
            onClick={handleClick}
            sx={{ fontSize: "16px", 
            width:{xs:"100%", sm:"100%", md:"50%"}, 
            mt:{xs:"13px", sm:"21px", md:"2vw"},
            background:"transparent",
            border:"solid 1px gray",
            color:"#0F100F",
            fontWeight:"700"
            }}> Login</RoundButton>
            </Box>
        </Box>

    </Stack>

    </>
)
}