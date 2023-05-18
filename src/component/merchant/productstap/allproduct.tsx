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
import { useState } from 'react';
import Link from 'next/link';
// import ViewProduct from '../../component/merchant/viewproduct';
import ViewProduct from '../../../component/merchant/viewproduct';
import ModalPage from '../modal';





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

export default function AllProduct() {
    const [open, setOpen] = React.useState(false);
    const [modaliiOpen, setModaliiOpen] = useState(false);
   
    const handleOpenModal = () => {
        setModaliiOpen(true);
      };
      const modalhandleClose = () => {
        setModaliiOpen(false);
      };
    const handleClickOpen = () => {

        setOpen(true);
        
    };

    const handleClose = () => {
        
        setOpen(false);
    };
    return (
        


               

                <div style={{ marginTop: "16px",  marginBottom:"100px"}}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                        { open? <ViewProduct open={open} onClose={handleClose}  /> : null }
                            <TableBody>

                                { rows.map((row) => (
                                    <TableRow
                                        key={row.foodName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={handleClickOpen}
                                    >
                                        <TableCell component="th" scope="row" sx={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                                            <Box sx={{ fontFamily: "Plus Jakarta Sans", lineHeight: "10px" }}>

                                                <img src={`${row.image}`} height="73px" width="78px" style={{ borderRadius: "8px" }} />
                                            </Box>
                                            <Box sx={{ mt: "11px" }}>

                                                <Typography sx={{ fontSize: "13.3px", fontWeight: "700", }}> {`${row.foodName}`}</Typography>
                                                <Typography sx={{ fontSize: "13px", fontWeight: "500" }}> {`${row.amount}`} </Typography>
                                            </Box>
                                        </TableCell>

                                        <TableCell align="right" sx={{ mt: "20px", }}>
                                            <Box sx={{ lineHeight: "10px", fontFamily: "Plus Jakarta Sans", display: "flex", flexDirection: "row", gap: "12px", }}>
                                                <Button style={{ backgroundColor: "#ECFDF3", borderRadius: "16px", fontSize: "13.33px", fontWeight: "500", color: "#027A48", width: "100px", height: "22px",   textAlign: "center" }}>
                                                    {/* <Typography style={{ fontSize: "13.33px", fontWeight: "500", color: "#027A48", }} > */}
                                                         {`${row.orderType}`}
                                                         {/* </Typography> */}

                                                </Button>
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
                    
                     sx={{ mt: "20px", fontWeight: "700", fontSize: "16px", color: "#FFFFFF", textTransform: "capitalize", background: "#3BB273", borderRadius: "8px", }} variant="contained" size="large" fullWidth>
                        Create Products
                    </Button>
                    <ModalPage open={modaliiOpen} onClose={modalhandleClose} />
                </div>

    )
}