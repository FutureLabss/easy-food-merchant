import {Stack, Avatar, Typography, Box} from "@mui/material"
import { BsFillPersonFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi"
import {AiOutlineDown} from "react-icons/ai"
import {AiOutlineBell} from "react-icons/ai"
import { useTheme } from "@mui/material/styles";
import Link from "next/link"
import Image from "next/image"
import profile from "../../images/merchant/profile.png"
import { ReactNode } from "react";

interface prop {
    props: string;
    url: string;
    
  }
export default function AppBar(props:prop){
    const theme = useTheme();
    return(
        <>
        <Stack direction="row" alignItems="center" justifyContent="space-around" spacing={12} mt="20px">
            <Link href="/merchant/profile">
         <Avatar sx={{ width: "40px", height: "40px" }} >
            <Image src={profile} alt=""/>
         </Avatar>
         </Link>
        <Box 
      sx={{
        maxWidth: "150px",
        height: 30,
        borderRadius: 5,
        backgroundColor: '#26734A',

      }}>
        <Link href={props.url}>
         <Stack direction="row"  mt="5px" width="100%" spacing={2}>
            <Typography 
            mx="10px" 
            fontSize="13.33px" 
            color="white" 
            display="flex"
            gap="5px" 
            alignItems="center" 
            fontWeight="700" >
                <BiStore /> 
                Store Open 
                <AiOutlineDown />
            </Typography>
         </Stack>
         </Link>
         </Box>
         <Box sx={{fontSize:"16px"}}>
        <AiOutlineBell color={theme.palette.mode === "dark" ? "white" : "black"} fontSize="inherit"/>
        </Box>
        </Stack>
        </>
    )
}