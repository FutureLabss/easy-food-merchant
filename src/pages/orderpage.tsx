import * as React from 'react';
import Link from "next/link"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import  TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeLayout from '../../layout/merchant';
import SearchBar from '../../component/merchant/search';
import FourScrollableTabs from '../../component/merchant/taps/fourtap';
import ButtonAppBar from "../../component/merchant/backbar";
import ConfirmProduct from '../../component/merchant/confirmproduct';
import ViewProduct from '../../component/merchant/viewproduct';
import { Stack } from "@mui/material"



function createData(
    foodName: string,
    userName: string,
    date: string,
    status: string,
    times: number,
    price: number,
    deliveryTime: string,
    
) {
    return { foodName,
        userName,
        date,
        status,
        times,
        price,
        deliveryTime,
     };
}

const rows = [
    createData('Indomie', "Chidera Godwin", "13 Jan 2022 1:12", "Approved", 2 , 2700, "1:00" ),
    createData('Fried Chicken', "John Fidelis", "13 Jan 2023 11:23", "Pending", 2 , 6000, "12:00" ),
    createData('Indomie', "Chidera Godwin", "13 Jan 2022 1:12", "Approved", 2 , 2700, "1:00" ),
    createData('Salad Rice', "Mark Brown", "13 Jan 2023 11:23", "Cancelled", 2 , 6100, "2:00" ),
    createData('Stew', "James Brown", "18 Dec 2022 11:23", "Pending", 2 , 4000, "4:00" ),
];

export default function OrderPage() {
    const [open, setOpen] = React.useState(false);
   

    const handleClickOpen = () => {

        setOpen(true);
        
    };

    const handleClose = () => {
        
        setOpen(false);
    };
    return (
    // <HomeLayout>
        <Stack width="390px" mx="auto">
            <ButtonAppBar name={"Orders"} props={''} display={''} url={''}/>
        <div style={{padding: "0px 20px"}} >
            

            <SearchBar searchType="Search Orders" />

           

            <div style={{marginTop: "16px"}}>
                <FourScrollableTabs name1={"All"} name2={"Pending"} name3={"Approved"} name4={"Cancelled"}/>
            </div>
            
            { open? <ViewProduct open={open} onClose={handleClose}  /> : null }


            <div style={{marginTop: "16px"}}>
                <TableContainer component={Paper}
                
                >
                    <Table sx={{ minWidth: "100%" }} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell> */}
                                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                      
                      {rows.map((row) => (
                            <TableRow
                                key={row.foodName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={handleClickOpen}
                            >
                                <TableCell component="th" scope="row">
                                    <Box sx={{fontFamily: "Plus Jakarta Sans",lineHeight: "10px" }}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: "700", }}> {row.foodName}</Typography>
                                        <Typography sx={{ fontSize: "13px", fontWeight: "400" }}>{row.userName}</Typography>
                                        <Typography sx={{
                                            
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>{row.date}</Typography>
                                        <Typography sx={{ fontWeight: "600", fontSize: "13.33px", color: "#C5A31C" }}>{row.status}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="right" >
                                    <Box sx={{ lineHeight: "10px", fontFamily: "Plus Jakarta Sans" }}>
                                        <Typography sx={{fontWeight:"500",fontSize:"13.33px"}}>{"x" + row.times}</Typography>
                                        <Typography> <span style={{ backgroundColor: "#ECFDF3", borderRadius: "16px", padding : "2px 8px 2px 8px", fontSize: "13.33px", fontWeight: "500", color: "#027A48", }}>{"Pre-Order"}</span> <span style={{fontWeight: "700", fontSize: "16px", color: "#000000" }}>{"N" + row.price}</span> </Typography>
                                        <Typography sx={{fontWeight: "400", fontSize: "13.33px", color: "#000000" }}>{"DeliveryTime:" + row.deliveryTime}</Typography>
                                    </Box>
                                </TableCell>

                                
                            </TableRow>
                            ))} 
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
        </Stack>
    
    )
}