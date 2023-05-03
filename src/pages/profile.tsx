import AppBar from '@/component/merchant/appbar'
import Card1 from '@/component/merchant/card'
// import Card2 from '../../component/merchant/cards'
import HomeLayout from '@/layout/merchant'
import {Box, Stack, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Avatar} from '@mui/material'
import {AiOutlineRight} from 'react-icons/ai'
import {FiLogOut} from "react-icons/fi"
import {MdSecurity} from "react-icons/md"
import {IoIosArrowBack} from "react-icons/io"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { BiStore } from "react-icons/bi"
import { MdManageAccounts } from "react-icons/md"
import { green } from '@mui/material/colors';
import Link from 'next/link'
// import {Box} from '@mui/material'
import profile from "@/images/merchant/Profilephoto.png"
import Image from "next/image"

export default function ProfilePage() {
    return (
        <Box width="390px" margin="0 auto">
          <Box sx={{ height: "840px", spacing: "15px"}}>
            <Box sx={{backgroundColor: "#F4F5F5", height: "70px", width: "390px"}}>
              <Stack direction="row" spacing="87px" alignItems="center" justifyContent="flexstart" pt="24px">
                <Link href="/">
                <Typography fontSize="16px" fontWeight="700" color="#3BB273" style={{cursor: "pointer"}}><IoIosArrowBack />Back</Typography>
                </Link>
<Typography fontSize="16px" fontWeight="700" color="#000000">Account</Typography>

              </Stack>
            </Box>
            <Stack direction="column" spacing="15px" mt="24px">
        <Stack direction="column" alignItems="center" justifyContent="space-around" spacing={1}>
        <Avatar sx={{ width: "102px", height: "102px" }}>
            <Image src={profile} alt=""/>
         </Avatar>
        <Typography fontSize="19px" color="#000000" fontWeight="700">Four Points By Sheraton</Typography>
        <Typography  fontSize="16px" color="#000000" fontWeight="600">+234 708 675 4432</Typography>
        </Stack>
        <Stack direction="column" alignItems="center" justifyContent="center" mt="-4.64vw">
      <Accordion style={{width: 370}}>
        <AccordionSummary
           expandIcon={
 <AiOutlineRight />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar variant="rounded" sx={{ bgcolor: green[500], fontSize: "0.77em", width: 25, height: 25 }}>
            <MdManageAccounts />
         </Avatar>
            <Stack direction="column" alignItems="flex-start">
          <Typography fontSize="16.66px" fontWeight="700">Account Information</Typography>
          <Typography fontSize="13.33px" fontWeight="400">Make changes to your account info.</Typography>
          </Stack>
          </Stack>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>

         <Accordion style={{width: 370}}>
        <AccordionSummary
           expandIcon={
                <AiOutlineRight />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar variant="rounded" sx={{ bgcolor: green[500], fontSize: "0.77em", width: 25, height: 25 }}>
            <MdSecurity />
         </Avatar>
            <Stack direction="column" alignItems="flex-start">
          <Typography fontSize="16.66px" fontWeight="700">Security</Typography>
          <Typography fontSize="13.33px" fontWeight="400">Make changes to your account security</Typography>
          </Stack>
          </Stack>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      

      <Accordion style={{width: 370}}>
        <AccordionSummary
           expandIcon={
           <AiOutlineRight />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar variant="rounded" sx={{ bgcolor: green[500], fontSize: "0.77em", width: 25, height: 25 }}>
            <AiOutlineShoppingCart />
         </Avatar>
         <Stack direction="row" spacing="40.5px" alignItems="center">
            <Stack direction="column" alignItems="flex-start">
          <Typography fontSize="16.66px" fontWeight="700">View Orders</Typography>
          <Typography fontSize="13.33px" fontWeight="400">Create Products</Typography>
          </Stack>
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
          </Stack>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>

         <Accordion style={{width: 370}}>
        <AccordionSummary
           expandIcon={
                <AiOutlineRight />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ bgcolor: "#E15554", fontSize: "0.77em", width: 25, height: 25 }} variant="rounded">
            <FiLogOut />
         </Avatar>
            <Stack direction="column" alignItems="flex-start">
          <Typography fontSize="16.66px" fontWeight="700">Logout</Typography>
          <Typography fontSize="13.33px" fontWeight="400">Logout of your account</Typography>
          </Stack>
          </Stack>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
        </Stack>
        </Stack>
        </Box>
        </Box>
       
    )
}