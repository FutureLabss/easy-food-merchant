import { Grid, TextField, Stack, Box, Dialog } from "@mui/material"
import RoundButton from "@/component/merchant/roundbutton"
import * as React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useEffect} from "react"
// type prop={
//     props:string;
//     // onClose: () => void;
//   }

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  interface prop {
    props:string;
    open: boolean;
    // onClose: () => void;
  }

export default function SignInOption(props:prop){
    // const {open, onClose} = props
       const router = useRouter();
    //    const [page, setPage]= React.useState(false)
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
  setOpen(true)    
    }, [])
    const handleClick = () => {
        router.push("/login")
      };

    return(
        <>
    <Dialog
      sx={{".MuiDialog-paper":{
        width:'393px',
        // marginRight:{md:"20px", xs:"20px"}
        height:"47vh",
        mt:{xs:"320px", sm:"277px", md:"30.73vw"}, 
        borderRadius:" 32px 32px 0px 0px",
        padding:'16px'
        }}}
        // px={10}
        fullScreen
        open={open}
        // onClose={onClose}
        TransitionComponent={Transition}
        >
        <Box sx={{backgroundColor:"#FFFFFF", 
        borderRadius:" 32px 32px 0px 0px",
        mt:{xs:"22px", sm:"-277px", md:"-30.73vw"}, 

        pb:"73px",
       }}>
            <Box 
            sx={{ px:{xs:"3.20vw", md:"0.81vw"},
            // mt:{xs:"17px", sm:"25px", md:"2.78vw"},
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
             <Link href="/createaccount">
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
        </Dialog>
        </>
    )
}