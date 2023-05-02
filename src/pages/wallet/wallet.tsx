import { useState } from 'react';
import HomeLayout from '../../../layout/merchant'
import { Grid, Stack , Box, Typography, Button, Container} from "@mui/material"
import { AiOutlineEye } from "react-icons/ai"
import { CiWallet } from "react-icons/ci"
import { BsArrowLeftCircleFill } from "react-icons/bs"
import  Link from "next/link"

import Modal from "../../../component/merchant/modal/walletModal"

import bgImage from '../../../images/merchant/background.png'

type Cards = {
  title: string;
  description: string;
  date: string;
  amount: any;
  type: "credit" | "debit" ;
  
 
  
};


const wallet: Cards[] = [
  {
  title: "Withdrawal",
   description: 'You withdrew N24,000 to 2000211109 Kuda bank' ,
   amount: '₦24,000.00',
   type: "debit",
  date: '25 october 2023 . 12:30 pm'},
  {
  title: "Meal Payment",
   description: 'N3,000 has been added to your wallet for an order' ,
   type: "credit",
   amount: '₦24,000.00',

  date: '25 october 2023 . 12:30 pm'},
];


export default function WalletPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

 return(
    <>
    <HomeLayout>
    <Box  height="540px" mt="61px">
    <Box p="15px" sx={{ ml: '10px', backgroundImage: `url("${bgImage.src}")`, height: '224px', width: "370px", backgroundSize: 'cover',
        backgroundPosition: 'center'}}
      style={{borderRadius: "8px"}}>

<Typography textAlign="center" fontSize="16px" fontWeight="600"
pt={{xs:"11px", sm:"17px", md:"1.85vw"}} color="white">Wallet Balance</Typography>
<Typography textAlign="center" color="white"  fontWeight="800"
fontSize="35px" > ₦20,000 <AiOutlineEye    /> </Typography>

<Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={1}
  mt={{xs:"13px", sm:"20px", md:"2.20vw"}}
  pb={5}
>

<Button style={{width: "150px", height:"40px"}} onClick={handleOpenModal} sx={{backgroundColor: "#FFFFFF", 
borderRadius: "25px", fontSize: "16px", fontWeight: "700", color: "#000000", textTransform: "none","&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#000000"}
    }}  

>
  Withdraw
  </Button>
</Stack>

  </Box>
  <Typography mt={2} fontSize="16px" fontWeight="600" color="#222524" >Wallet History</Typography>
  <Stack 
  direction="column" alignItems="center" 
   spacing={{xs:"10px", sm:"16px", md:"0.60vw"}}>
     {wallet.map((Cards: Cards) => (
          <Stack key={Cards.title} direction="row" spacing= "9.3vw" pt={2} 
          pb={2} style={{borderTop: "1px solid #DADDDB "}}
         >
          <Box>

<Typography fontSize="16px" fontWeight="600" color="#222524" >{Cards.title}</Typography>
<Typography fontSize="13px" fontWeight="400" color="#849089">{Cards.date}</Typography>
<Typography fontSize="13px" fontWeight="400" color="#5C6560">{Cards.description} </Typography>
</Box>
<Typography
     fontSize="16px"
     fontWeight="700" 
      sx={{ color: Cards.type === "credit" ? "#3BB273" : "#E15554" }}
    >
    {/* {Cards.type === "credit" ? '+' : '-'}   */}
    {Cards.amount}
   
    </Typography>
          </Stack>
              ))}
          </Stack>

  <Box>
 
  </Box>
 
  </Box>

    </HomeLayout>
    <Modal open={modalOpen} onClose={handleCloseModal} />

    </>
 )

}