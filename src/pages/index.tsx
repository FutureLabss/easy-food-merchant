import AppBar from '../component/merchant/appbar'
import Card1 from '../component/merchant/card'
// import Card2 from '../../component/merchant/cards'
import HomeLayout from '../layout/merchant'
import { List, ListItem, ListItemIcon, ListItemText, Box, Stack, Typography, Button, Avatar, IconButton} from '@mui/material'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from "react-icons/ai"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { BiStore } from "react-icons/bi"
import { green } from '@mui/material/colors';
import Link from 'next/link'
// import {Box} from '@mui/material'
import BottomBar from '@/component/merchant/bottombar'
import React from 'react'
import ModalPage from '@/component/merchant/modal'
import { useState } from 'react'
import Modal from '@/component/merchant/modal/walletModal'


export default function OverViewPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [secModalOpen, setSecModalOpen]= useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const modalhandleClose = () => {
    setModalOpen(false);
  };
  const handleOpenSecondModal = () =>{
    setSecModalOpen(true);
  }
  const modalhandleSecondClose = () =>{
    setSecModalOpen(false);
  }
    return (
        <HomeLayout>
        <Box sx={{mb:"100px"}}>
          <Box sx={{backgroundColor: "#1C5436", height: "310px"}}>
        <Stack direction="column" alignItems="center" justifyContent="space-around" spacing={3}>
        <AppBar url={'/store'} props={''} />
        <Typography fontSize="13.33px" color="#DADDDB" fontWeight="700">Wallet Balance</Typography>
        <Stack direction="row" alignItems="flex-end">
        <Typography  fontSize="16px" color="#AFB6B2" fontWeight="600">N</Typography>
      <Typography  fontSize="33.18px" color="#DADDDB" fontWeight="700">3,000,000</Typography>
      <Typography  fontSize="16px" color="#AFB6B2" fontWeight="600">.00</Typography>
      </Stack>
        <Button variant="outlined" size="medium" sx={{backgroundColor: "#FFFFFF", borderRadius: "25px", color: "#000000", fontSize: "16px", fontWeight: "700", textTransform: "none","&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#000000"}}} onClick={ handleOpenSecondModal}>Withdraw</Button>
      {/* </Link> */}

        </Stack>
        </Box>   
        <Stack direction="column" alignItems="center" justifyContent="center" mt="-3.64vw">
          <Box sx={{backgroundColor: 'white', borderRadius: '10px', width: '370px'}}>
        <List style={{ width: 370 }} onClick={handleOpenModal}>
        <ListItem button secondaryAction={
                    <IconButton edge="end" >
                      <AiOutlineRight />
                    </IconButton>
                  }>
          <ListItemIcon>
            <Avatar sx={{ bgcolor: green[500], fontSize: "0.77em", width: 25, height: 25 }}>
              <BiStore />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={<Typography fontSize="16.66px" fontWeight="700">Create Products</Typography>} secondary={<Typography fontSize="13.33px" fontWeight="400">Create Products</Typography>} />
        </ListItem>
      </List>
      <Link href={"/orderpage"}>
      <List style={{ width: 370 }}>
        <ListItem button secondaryAction={
                    <IconButton edge="end" 
                    // onClick={handleOpenModal}
                    >
                      <AiOutlineRight />
                    </IconButton>
                  }>
          <ListItemIcon>
            <Avatar sx={{ bgcolor: green[500], fontSize: "0.77em", width: 25, height: 25 }}>
              <AiOutlineShoppingCart />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography fontSize="16.66px" fontWeight="700">View Orders</Typography>
              <Box
                textAlign="center" alignItems="center" justifyContent="center"
                sx={{
                  width: 90,
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: '#FEF3F2',
                }}
              >
                <Typography fontSize="13.33px" color="#B42318" fontWeight="500">7 New Orders</Typography>
              </Box>
            </Stack>
          } secondary={<Typography fontSize="13.33px" fontWeight="400">Create Products</Typography>} />
        </ListItem>
      </List>
      </Link>
      </Box>
        </Stack>
        <Stack direction="column" alignItems="center" spacing="24px">
          <Stack direction="row" spacing= "144px" mt="27px">
            <Typography fontSize="13.33px" fontWeight="700">Sales Performance</Typography>
            <Typography fontSize="13.33px" fontWeight="500">This Month<AiOutlineDown /></Typography>
          </Stack>
          <Card1 />
          {/* <Card2 /> */}
        </Stack>
        <ModalPage open={modalOpen} onClose={modalhandleClose}  />
        <Modal open={secModalOpen} onClose={modalhandleSecondClose}  />
        </Box>
        </HomeLayout>
    )
}