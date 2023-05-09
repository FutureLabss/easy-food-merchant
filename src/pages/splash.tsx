import { Grid, TextField, Stack, Box } from "@mui/material"
import RoundButton from "@/component/merchant/roundbutton"
import * as React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
// import SignInOption from "./signin";
import SignInOption from "@/component/merchant/modal/signin";
import { useEffect, useState } from "react";

type prop={
    props:string;
  }
export default function splash(props:prop){
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    // const router = useRouter();
    // const [open, setOpen] = React.useState(false);
    // const handleClick = () => {
    //     router.push("/merchant/login")

    //   };
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(prevCount => prevCount + 1);
    //         const modalOpen=()=>{
    //             setModalOpen(true)
    //         }
    //     }, 2000);
    //     return () => clearInterval(interval);
    //   }, []);

return(
    <>
    <Stack sx={{backgroundColor:"#26734A", 
    height:"100vh",
    //  border:"solid red", 
     width:{md:"390px"},
     mx:"auto",
}}>

    
    {/* <SignInOption props={""}  /> */}
    <SignInOption props={""} open={false}   />
    </Stack>
    </>
)
}