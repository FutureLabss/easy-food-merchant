import { useState } from 'react';
import { Button, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, Typography,
   TextField, Stack , Box, InputLabel, Select, MenuItem} from '@mui/material';
import Divider from '@mui/material/Divider';
import { FiArrowRight } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import AppBar from '../appbar';
import SimpleDialog from './transactionsuccess';
import React from 'react';



interface ModalProps {
    open: boolean;
    onClose: () => void;
  //  modalhandleSecondClose = (){

  }

  const styles = {
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
};
type state = {
  bank1: string;
  bank2: string;
  bank3: string;
}
const product: state[] = [
  {
      bank1: "UBA",
      bank2: "ACCESS BANK",
      bank3: "FIRST BANK.",
  }]


  
  const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const handleClose = () => {
  //   // setIsOpen(false);
  //   onClose();
  // };


  return (
    <Box>
    <Dialog  fullScreen 
        open={open} onClose={onClose}  sx={{ 
        
          ".MuiDialog-container":{
           display:'flex',
           alignItems:"center",
           padding:"0px",
           margin:"auto",
           
           //  width:'390px',
           // height:{xs:"100vh", md:"70vh"},
           marginTop:{ xs:"120px", sm:"100px", lg:"120px", xl:"-100px", md:"100px"},
           
          },
          ".MuiDialog-paper":{
            //  border:'solid red',
            //  width:'100%'
            // maxWidth:'393px',
            width:'393px',
            mr:{md:"15px",xs:"px", sm:"10px", xl:"15px" },
            // bgcolor:'red',        
            height:{xs:"80%"},
            borderRadius:"8px"

      }
      }} >
        
        {/* <Box sx={{backgroundColor: "#1C5436", height: "310px"}}>
     <Stack direction="column" alignItems="center" justifyContent="space-around" spacing={3}>
            <Box sx={{opacity:0.5,}}>
       <AppBar props={''}  url={''}  />
            </Box>
      <Typography fontSize="13.33px" color="#DADDDB" fontWeight="700" sx={{opacity:0.5, }}>Wallet Balance</Typography>
         <Stack direction="row" alignItems="flex-end">
        <Button >Open</Button>

       <Typography  fontSize="16px" color="#AFB6B2" fontWeight="600" sx={{opacity:0.5,}}>N</Typography>
      <Typography  fontSize="33.18px" color="#DADDDB" fontWeight="700" sx={{opacity:0.5,}}>3,000,000</Typography>
      <Typography  fontSize="16px" color="#AFB6B2" fontWeight="600" sx={{opacity:0.5,}}>.00</Typography>
     </Stack>
      </Stack>
      </Box> */}

      <DialogTitle>
        <Stack direction="row" >
        <Stack direction="column" >
      <Typography fontSize="23.04px" fontWeight="700" color=" #000000" >Withdraw Balance</Typography>
      <Typography  fontSize="16px"  color=" #000000" fontWeight="400" >Withdraw Money made from sales</Typography>
      </Stack>
      {/* <AiOutlineClose onClick={onClose} style={{marginTop: "15px", cursor: "pointer"}} size={25}/> */}
             </Stack>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
         <Typography fontSize="14px" mb={1} fontWeight="600" color=" #000000" >Amount To Withdraw</Typography>
         <TextField id="outlined-basic" 
         fullWidth
            sx={{
                // width: '80%',
                borderRadius: '8px',
              }}
           InputProps={{
            placeholder: 'Amount to withdraw',
            sx: { height:"44px",}
          }}
          variant="outlined" />
         <Typography fontSize="12px" mt={2} fontWeight="600" color=" #000000" >Wallet Balance: NGN 20,000.00</Typography>
        </DialogContentText>
        <DialogContentText>
        <InputLabel  sx={{color:"#000000", fontSize:"14px", mb:"10px", mt:"10px"}}>
                 Bank
              </InputLabel>
             <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={data.category}
                name="category"
                placeholder='Select Bank'
                size="small"
                variant="outlined"
                fullWidth
                // onChange={onChange}
              >
                {/* <MenuItem value={"none"}> Select Category </MenuItem> */}
                {product.map((item, title) => (
                  <Box key={item.bank1}>
                    <MenuItem > {item.bank1} </MenuItem>
                   <MenuItem > {item.bank2} </MenuItem>
                   <MenuItem > {item.bank3} </MenuItem>
                 </Box>
                ))}
              </Select>
        </DialogContentText>
        <DialogContentText>
         <Typography fontSize="14px" mt={2}  fontWeight="600" color=" #000000" >Account Number</Typography>
         <TextField id="outlined-basic" 
         fullWidth
         
            sx={{
              mt:"10px",
                // width: '80%',
                borderRadius: '8px',
              }}
           InputProps={{
            placeholder: '123456789087654',
            sx: { height:"44px",}
          }}
          variant="outlined" />
           <Typography fontSize="12px" mt={2} fontWeight="600" color="#3BB273" mb="39px">Emmanuel Ekpenyong</Typography>
       
        </DialogContentText>
      <Button
      onClick={handleOpenModal}
       variant="contained" style={{height: "52px", width: "338px"}} size="medium" sx={{backgroundColor: "#3BB273", borderRadius: "8px", color: "#FFFFFF", fontSize: "16px", fontWeight: "700", mb:"30px"}}>Proceed</Button>
      </DialogContent>
      <Stack
  alignItems="center"
  spacing={{xs:"17px", sm:"25px", md:"2.78vw"}}
  mb={{xs:"14px", sm:"21px", md:"4.31vw"}}
  pr={2}
>


      {/* <DialogActions> */}

      {/* </DialogActions> */}
</Stack>
<SimpleDialog open={openModal} onClose={handleCloseModal}/>
    </Dialog>
    </Box>
    
  )};


  export default Modal
