import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import BottomBar from './bottombar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Grid, InputLabel, TextField, Stack, FormControl } from '@mui/material';
import { RiAddFill } from "react-icons/ri"
import AppBar from './appbar';
import RoundButton from './roundbutton';
// import ButtonAppBar from './backbar';
import ButtonAppBar from './backbar';
import HomeLayout from '../../layout/merchant';
import ModalPage from './modal';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

type state = {
    item1: string;
    item2: string;
    item3: string;
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const product: state[] = [
    {
        item1: "Imagination at work.",
        item2: "We try harder",
        item3: "Impossible is nothing.",
    }
];
type prop = {
    props?: string;
    open: boolean;
    onClose: () => void;
}

export default function ViewProduct(props: prop) {
    const { open, onClose } = props


    // function handleCloseModal(): void {
    //     throw new Error('Function not implemented.');
    // }

    return (
        // <HomeLayout>
        <Stack component="form" >
            <Dialog
                sx={{
                    ".MuiDialog-paper": {
                        //  border:'solid red',
                        //  width:'100%'
                        // width: '393px',
                        // bgcolor:'red',        
                        marginLeft: { md: "19px", xs: "25px", sm: "-30px" },
                        // height: "100vh",
                        // mt:'290px',
                        borderRadius: "8px",
                        mt: "90px",

                    }
                    
                }}
                fullWidth
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}>
                {/* <HomeLayout> */}
                <Stack sx={{ padding: "0px 10px", backgroundColor: "#FFFFFF" }}>
                    <Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "23.04px", mt: "32px" }}>View Product</Typography>
                    <Typography sx={{ color: "#717C76", fontWeight: "400", fontSize: "16px" }}>View, update details about this product </Typography>
                    <Box sx={{ mt: "24px", mb: "23px" }}>
                        <Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "13.33px" }}>Product Image</Typography>
                        <img src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`} height="116px" width="134px" style={{ borderRadius: "8px" }} />
                    </Box>
                    <Card sx={{ minWidth: 275, bgcolor: "#FAFAFA" }}>
                        <CardContent>
                            <Box>
                                <Typography sx={{ color: "#5C6560", fontWeight: "700", fontSize: "13.33px" }} >
                                    Meal Name
                                </Typography>
                                <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "16px", mb: "12px" }} variant="body2">
                                    Fried Rice and Chicken
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "#5C6560", fontWeight: "700", fontSize: "13.33px" }}>
                                    Description
                                </Typography>
                                <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "16px", mb: "12px" }} variant="body2">
                                    Fried Rice and Chicken with pet coke and
                                    take-away plate
                                </Typography>
                            </Box>


                        </CardContent>

                    </Card>
                    <Card sx={{ minWidth: 275, bgcolor: "#FAFAFA", mt: "16px" }}>
                        <CardContent>
                            <Box>
                                <Typography sx={{ color: "#5C6560", fontWeight: "700", fontSize: "13.33px" }} >
                                    Amount
                                </Typography>
                                <Typography sx={{ color: "#3BB273", fontWeight: "700", fontSize: "19.2px", mb: "12px" }} variant="body2">
                                    N 7,800.00
                                </Typography>
                            </Box>


                                    
                                </CardContent>
                               
                            </Card>
                            <Card sx={{ minWidth: 275, bgcolor: "#FAFAFA", mt: "16px" }}>
                                <CardContent>
                                    <Box>
                                    <Typography sx={{ color: "#5C6560",  fontWeight: "700",fontSize: "13.33px" }} >
                                    Meal Category
                                </Typography>
                                <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "16px", mb: "12px" }} variant="body2">
                                    Pre-Order Meal
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "#5C6560", fontWeight: "700", fontSize: "13.33px" }}>
                                    Cooking Duration
                                </Typography>
                                <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "16px", mb: "12px" }} variant="body2">
                                    1hr 30 mins
                                </Typography>
                            </Box>

                                    
                                </CardContent>
                               
                            </Card>
                            <Link href="/merchant/createproduct">
                            <Button 
                            // onClick={handleOpenModal}
                            sx={{ mt: "20px",
                             fontWeight: "700", 
                             mr:{md:"50px", xs:"20px"},
                             fontSize: "16px", 
                             color: "#123623", 
                             textTransform: "capitalize", 
                             background: "#E8F7EF",
                             width:{md:'355px', xs:"320px"},
                             position: "fixed",
                            bottom:45,
                            // alignSelf:'flex-end',
                            ":hover": {
                                backgroundColor: "#E8F7EF"},
                                 borderRadius: "8px", }} 
                                 size="large" >
                        Update Products
                    </Button>
                    </Link>
                            <Button sx={{
                                width:{md:'355px', xs:"320px"},
                                 position: "fixed",
                                 bottom:2,
                                //  mt: "20px", 
                            fontWeight: "700", 
                            fontSize: "16px", 
                            color: "#5C6560", 
                            textTransform: "capitalize", 
                            background: "#FFFFFF ", 
                            borderRadius: "8px" }} 
                            onClick={onClose} size="large" 
                            fullWidth>
                        Close
                    </Button>
                        </Stack>
                    {/* </HomeLayout> */}

            </Dialog>
            {/* <ModalPage open={letOpen} onClose={handleCloseModal} props={''}/> */}
        </Stack>
        // </HomeLayout>
    );
}