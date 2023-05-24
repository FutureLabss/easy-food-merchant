import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ModalPage from '../modal';

import { useState } from 'react';

function createData(
    foodName: string,
    amount: string,
    image: string,
    orderType: string,

) {
    return {
        foodName,
        amount,
        image,
        orderType,
    };
}

const rows = [
    createData('Fried Chicken', "2300", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food"),
    createData('Jellof Rice', "4230", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Pre-Order"),
    createData('Fried Chicken', "2210", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food"),
    createData('White Soup', "4200", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food" ),
    createData('Jellof Rice', "2500", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Pre-Order" ),
    createData('Indomie Sauce', "1500", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food" ),

];

export default function PendingProductPage() {
    const [modalOpen, setModalOpen] = useState(false);
   
    const handleOpenModal = () => {
        setModalOpen(true);
      };
      const modalhandleClose = () => {
        setModalOpen(false);
      };
    return (
        

                <div style={{ marginTop: "16px", marginBottom: "100px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="simple table">

                            <TableBody>
                               {rows.map((row) => (
                                    <TableRow
                                        key={row.foodName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ display: "flex", flexDirection: "row", gap: "12px" }}>

                                            <Box sx={{ mt: "11px" }}>

                                                <Typography sx={{ fontSize: "13.3px", fontWeight: "700", }}> {`${row.foodName}`}</Typography>
                                                <Typography sx={{ fontSize: "13px", fontWeight: "500" }}> {`${row.amount}`} </Typography>
                                            </Box>
                                        </TableCell>

                                        <TableCell align="right" sx={{ mt: "20px", }}>
                                            <Box sx={{ lineHeight: "10px", fontFamily: "Plus Jakarta Sans", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "end" }}>

                                                <ArrowForwardIosIcon sx={{ width: "10.41px", height: "12px", mt: "8px" }} />

                                            </Box>
                                        </TableCell>


                                    </TableRow>
                                ))}
                            


                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button 
                    onClick={handleOpenModal} 
                    sx={{ mt: "20px", fontWeight: "700", fontSize: "16px", color: "#FFFFFF", textTransform: "capitalize", background: "#3BB273", borderRadius: "8px",  width: { md: '355px', xs: "100%" }, }} variant="contained" size="large" fullWidth>
                    {/* <Link href="/merchant/createproduct"> */}
                        Create Products
                    {/* </Link> */}
                    </Button>
                    <ModalPage open={modalOpen} onClose={modalhandleClose}  />
                </div>


    )
}