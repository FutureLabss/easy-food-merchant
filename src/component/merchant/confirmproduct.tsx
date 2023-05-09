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
import BottomBar from '../../component/merchant/bottombar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Grid, InputLabel, TextField, Stack, FormControl } from '@mui/material';
import { RiAddFill } from "react-icons/ri"
import AppBar from '../../component/merchant/appbar';
import RoundButton from '../../component/merchant/roundbutton';
// import ButtonAppBar from './backbar';
import ButtonAppBar from '../../component/merchant/backbar';
import HomeLayout from '../../layout/merchant';
import Link from 'next/link';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ViewProduct from './viewproduct';

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

export default function ConfirmProduct(props: prop) {
    const { open, onClose } = props
    // const [open, setOpen] = React.useState(true);
    // console.log("the status is", { open })
    // const [viewModal, setViewModal] = React.useState(false);
    // // console.log("the status is", {open})   
    
    //  const handleOpenModal = ()=> {
    //     setViewModal(true)
    //   }
    //   const handleCloseModal=()=>{
    //     setViewModal(false)
    //   }


    return (
        // <HomeLayout>
            <Stack component="form">

                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open full-screen dialog
                </Button> */}
                <Dialog
                sx={{
                    ".MuiDialog-paper":{
                        //  border:'solid red',
                        //  width:'100%'
                        width:'393px',
                        // marginRight:{md:"50px"},
                        // bgcolor:'red',        
                        // marginLeft:{md:"29px", xs:"25px", sm:"-30px"},
                        // height: "auto",
                        // mt:'290px',
                        borderRadius:"8px",
                        mt:"100px",
                        // marginRight:{md:"20px"}
                  
                        }
                }}
                fullScreen
                    open={open}

                    onClose={onClose}
                    TransitionComponent={Transition}
                    // sx={{ '& .MuiDialog-paper': { maxHeight: 600, borderTopLeftRadius: "50px", borderTopRightRadius: "50px", top: "30px", }, '.MuiDialog-paper::-webkit-scrollbar': { display: "none" }, }}
                >
                    {/* <HomeLayout> */}
                        <Stack sx={{ mt: "32px", padding: "0px 10px", }}>
                            <Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "23.04px" }}>Confirm Product</Typography>
                            <Typography sx={{ color: "#717C76", fontWeight: "400", fontSize: "16px" }}>Create your product creation details </Typography>
                            <Box sx={{ mt: "24px", mb: "23px" }}>
                                <Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "13.33px" }}>Product Image</Typography>
                                <img src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`} height="116px" width="134px" style={{ borderRadius: "8px" }} />
                            </Box>
                            <Card sx={{ minWidth: 275, bgcolor: "#FAFAFA" }}>
                                <CardContent>
                                    <Box>
                                        <Typography sx={{ color: "#5C6560", fontWeight: "700", fontSize: "13.33px" }} >
                                            Meal
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
                            <Link href="/productpage">
                            <Button 
                            onClick={onClose}
                            // onClick={handleOpenModal}
                            sx={{
                                 mt: "20px", 
                                 fontWeight: "700", 
                                 fontSize: "16px", 
                                 color: "#FFFFFF", 
                                 textTransform: "capitalize", 
                                 background: "#3BB273", 
                                 borderRadius: "8px",
                                //  width:{md:'355px', xs:"320px"},
                                //  position: "fixed",
                                // bottom:46,
                             }} 
                                 variant="contained" 
                                 size="large" 
                                 fullWidth
                                 >
                                Save Products
                            </Button>
                            </Link>
                            <Link href="/merchant/createproduct">
                            <Button sx={{ 
                                mt: "20px", 
                            fontWeight: "700", 
                            fontSize: "16px", 
                            color: "#5C6560", 
                            textTransform: "capitalize", 
                            background: "#FFFFFF ", 
                            borderRadius: "8px",
                            // width:{md:'355px', xs:"320px"},
                            // position: "fixed",
                            // bottom:2, 
                        }} 
                            size="large" 
                            fullWidth>
                                Make Changes
                            </Button>
                            </Link>
                        </Stack>
                    {/* </HomeLayout> */}

                </Dialog>
                    {/* <ViewProduct open={viewModal} onClose={handleCloseModal}/> */}
            </Stack>
        // </HomeLayout>
    );
}