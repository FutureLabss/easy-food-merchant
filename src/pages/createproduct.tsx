import ModalPage from "@/component/merchant/modal";
import { Box } from "@mui/material";
import BottomBar from "@/component/merchant/bottombar";
import React from "react";
interface state {
    open:boolean;
    // props:string;
    onClose: () => void;
}
export default function CreateProductPage(props:state){
    const [open, setOpen] = React.useState(true)
    const handleClose = () =>{
        setOpen(false)
    }
    return(
        <>
      
        <Box>
        <ModalPage  open={open} onClose={handleClose}  />
        </Box>
   
        
        </>
    )
}




