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
import ButtonAppBar from './backbar';
import HomeLayout from '@/layout/merchant';
import ConfirmProduct from './confirmproduct';

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
}

export default function CreateProductModalPage(props: prop) {
    const [open, setOpen] = React.useState(false);
   

    const handleClickOpen = () => {

        setOpen(true);
        
    };

    const handleClose = () => {
        
        setOpen(false);
    };

    return (
        
        <Stack component="form" width={"390px"} mx="auto">
                {/* <HomeLayout> */}
                { open? <ConfirmProduct open={open} onClose={handleClose}  /> : null }
                <Box fontSize={{ xs: "7px", sm: "11px", md: "1.11vw" }} >
                    <ButtonAppBar name={'Add product'} props={''} display={''} url={''} />
                </Box>
                <Stack mt={{ xs: "13px", sm: "21px", md: "2.22vw" }}
                    sx={{
                        ml: { xs: "7px", sm: "11px", md: "1.11vw" }, 
                        mr: { xs: "7px", sm: "11px", md: "1.11vw" }, 
                    }}>
                    <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#000000"}}>Product Image</Typography>
                    <Box sx={{
                        width: { xs: "39px", sm: "63px", md: "6.53vw" },
                        height: { xs: "39px", sm: "63px", md: "6.53vw" },
                        borderRadius: "16px",
                        background: "#F4F5F5",
                        border: "1px dashed #99A39E"
                    }}>
                        <Box sx={{
                            mt: { xs: "10px", sm: "27px", md: "1.78vw" },
                            mx: { xs: "10px", sm: "27px", md: "2.28vw" },
                        }}>
                            <RiAddFill />
                        </Box>
                    </Box>

                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} sx={{mt:{ xs: "13px", sm: "5px", md: "1vw"}}}>

                            <InputLabel sx={{width: "100px", fontSize:"16px", fontWeght:"400", color:"#000000"}} id="demo-simple-select-standard-label">
                                {" "}
                                Meal Category
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                defaultValue="Select Category"
                                // value={data.category}
                                name="category"
                                size="small"
                                variant="outlined"
                                fullWidth
                                // onChange={onChange}
                            >
                                {/* <MenuItem value={"none"}> Select Category </MenuItem> */}
                                {product.map((item, title) => (
                                    <Box key={item.item1}>
                                        <MenuItem > {item.item1} </MenuItem>
                                        <MenuItem > {item.item2} </MenuItem>
                                        <MenuItem > {item.item3} </MenuItem>
                                    </Box>
                                    //   <MenuItem > {item.item2} </MenuItem>
                                ))}
                                {/* <MenuItem value={"tens"}>Twenty</MenuItem>
                  <MenuItem value={"tenss"}>Thirty</MenuItem> */}
                            </Select>
                        </Grid>
                    </Grid>


                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} sx={{mt:{ xs: "13px", sm: "5px", md: "1vw"} }}>
                            <InputLabel id="demo-simple-select-standard-label" sx={{fontSize:"16px", fontWeght:"400", color:"#000000"}}>
                                {" "}
                                Cooking
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                defaultValue="Select Category"
                                // value={data.category}
                                name="category"
                                size="small"
                                variant="outlined"
                                fullWidth
                                // onChange={onChange}
                                
                            >
                                {/* <MenuItem value={"none"}> Select Category </MenuItem> */}
                                {product.map((item, title) => (
                                    <Box key={item.item1}>
                                        <MenuItem > {item.item1} </MenuItem>
                                        <MenuItem > {item.item2} </MenuItem>
                                        <MenuItem > {item.item3} </MenuItem>
                                    </Box>
                                    //   <MenuItem > {item.item2} </MenuItem>
                                ))}
                                {/* <MenuItem value={"tens"}>Twenty</MenuItem>
                  <MenuItem value={"tenss"}>Thirty</MenuItem> */}
                            </Select>
                        </Grid>
                    </Grid>


                    <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
                        <Grid item xs={12} md={12}>
                            <InputLabel sx={{fontSize:"16px", fontWeght:"400", color:"#000000"}}>
                                Meal Name
                            </InputLabel>
                            <TextField
                            
                                size="small"
                                variant="outlined"
                                fullWidth
                                //   defaultValue={data.title}
                                //   value={data.title}
                                //   onChange={onChange}
                                placeholder='Enter Meal Name'
                                name="title"
                                
                            />
                        </Grid>
                    </Grid>
                    <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
                        <Grid item xs={12} md={12} >
                            <InputLabel sx={{fontSize:"16px", fontWeght:"400", color:"#000000"}}>
                                Description
                            </InputLabel>
                            <TextField
                                fullWidth
                                placeholder="One Plate of Rice with chicken and takeaway"
                                multiline
                                rows={4}
                                // defaultValue={data.description}
                                name="description"
                            // onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
                        <Grid item xs={12} md={12}>
                            <InputLabel sx={{fontSize:"16px", fontWeght:"400", color:"#000000"}}>
                                Amount
                            </InputLabel>
                            <TextField
                           
                                size="small"
                                variant="outlined"
                                fullWidth
                                //   defaultValue={data.title}
                                //   value={data.title}
                                //   onChange={onChange}
                                placeholder='Amount'
                                name="title"
                            />
                        </Grid>
                    </Grid>

                    <Button sx={{ mt: "32px", fontWeight: "700", fontSize: "16px", color: "#FFFFFF", textTransform: "capitalize", 
                            background: "#3BB273",
                            ":hover": {
                                backgroundColor: "#3BB273"},
                                 borderRadius: "8px", mb:"23px" }} 
                                 size="large" fullWidth
                                 onClick={handleClickOpen}
                                 >
                        Save product
                    </Button>



                </Stack>
                {/* </HomeLayout> */}
        </Stack>
        // </HomeLayout>
    );
}