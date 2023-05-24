import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
// import BottomBar from '@/component/merchant/bottombar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Grid, InputLabel, TextField, Stack, FormControl } from '@mui/material';
import { RiAddFill } from "react-icons/ri"
import AppBar from '@mui/material/AppBar';
import RoundButton from '../../component/merchant/roundbutton';
import ButtonAppBar from './backbar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import HomeLayout from '../../layout/merchant';
import ConfirmProduct from './confirmproduct';
import ImageUpload from "../ImageUpload";



// Api 
// import { useCreateMealApi } from '../../hooks/createMeal'
// import { useMealCreate } from "../../"
import { useMealCreate } from "../../hooks/mutaton/createMeal"






interface data {
  name: string;
  display: string;
}
type state = {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;

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
    item1: "Pre-Order Meal.",
    item2: "Fast Food.",
    item3: "Vegetables.",
    item4: "Snacks.",
    item5: "Drinks.",
  }
];
interface prop {
  // props:string;
  open: boolean;
  onClose: () => void;
}

interface createMeal {
  price: string;
  meal_name: string;
  preparation_time: string;
  pictures: string[];
  status: boolean;
}




export default function ModalPage(props: prop) {
  // const { data } = useMealCreate()

  const { data , mutate,  } = useMealCreate({onSuccess:()=>{}})
  console.log(data)
 

  const [mealInput, setMealInput] = useState({ price: 1000, meal_name: '', preparation_time: 10, category: "Fast-food" });
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [pictures, setPictures] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMealInput({ ...mealInput, [name]: value });
    // if (validatePhoneNumber(value)) {
    //   setPhoneNumber(value);
    // }
  };
  const handleImageUpload = (file: File) => {
    // setPictures(file);
    // setMealInput({ ...mealInput, "pictures" : value });
  };



  const [confirmopen, setConfirmOpen] = React.useState(false);
  const { open, onClose } = props
  const handleOpenModal = () => {
    setConfirmOpen(true)
  }

  function submit(e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    mutate({
      ...mealInput,
      pictures: []
    })
    // mealInput.pictures = pictures
    // createMeal(mealInput)
  }


  // const checking = () => {
  //   mealInput.pictures = pictures
  //   // console.log(mealInput)
  //   // console.log(pictures)
  //   submit()
  // }
  const handleCloseModal = () => {
    setConfirmOpen(false)
    onClose()
  }

  return (
    <Stack component="form" >
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: '393px',
            marginRight: { md: "20px", xs: "" }
          }
        }}
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        {/* <HomeLayout> */}
        <Box fontSize={{ xs: "7px", sm: "11px", md: "1.11vw" }}>
          <AppBar position="static"
            elevation={0}
            sx={{ backgroundColor: "#F4F5F5" }}>
            <Toolbar>
              <Link href="/">
                <IconButton
                  onClick={onClose}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{
                    mr: 2, color: "#3BB273",
                    fontWeight: "700", fontSize: "16px",
                    gap: "0.5rem",
                  }}
                >
                  <ArrowBackIosNewIcon />
                  <Typography fontSize="16px">
                    Back</Typography>
                </IconButton>
              </Link>
              <Typography variant="h6" component="div"
                sx={{
                  flexGrow: 1, textAlign: "center",
                  color: "#000000", fontWeight: "700",
                  fontSize: "16px"
                }}>
                Add Product
              </Typography>
            </Toolbar>
          </AppBar>

        </Box>
        <Stack mt={{ xs: "13px", sm: "21px", md: "2.22vw" }}
          sx={{
            px: { xs: "7px", sm: "11px", md: "1.11vw" }
          }}>
          <Typography sx={{
            fontSize: "16px", fontWeight: "700",
            color: "#000000"
          }}>Product Image</Typography>

          {/* <Box mt={{xs:"13px", sm:"21px", md:"1vw"}}
         sx={{width: {xs:"39px", sm:"63px", md:"6.53vw"},
         height: {xs:"39px", sm:"63px", md:"6.53vw"}, 
         borderRadius:"16px", 
         background: "#F4F5F5",
         border: "1px dashed #99A39E"}}>
            <Box sx={{
              mt:{xs:"10px", sm:"27px", md:"3vw"},
             mx:{xs:"15px", sm:"27px", md:"2.58vw"},
             }}>
    
            <RiAddFill >
    
            </RiAddFill>
            </Box>
        </Box> */}
          <ImageUpload onUpload={handleImageUpload} />

          <Grid container spacing={3} mt={{ xs: "13px", sm: "21px", md: "0.5vw" }}>
            <Grid item xs={12} md={12} >
              {/* <InputLabel sx={{
                fontSize:"14px", 
              fontWeight:"600", 
              color:"#000000",:
            mb:"10px"}} 
              id="demo-simple-select-standard-label">
                {" "}
                Meal Category
              </InputLabel> */}
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000",
                // mb:"10px"
              }} >Meal Category</Typography>
              {/* <FormControl fullWidth> */}
              {/* <InputLabel 
            sx={{
              fontSize:"14px", 
            fontWeight:"400", 
            color:"#849089",
          mt:"-10px"
        }} 
            id="demo-simple-select-standard-label">
              {" "}
              Meal Category</InputLabel> */}
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue="Select Category"
                // value={data.category}
                name="category"
                placeholder='select category'
                size="small"
                variant="outlined"
                fullWidth
                // onChange={onChange}
                label="Select Category"
              >
                {/* <MenuItem value={"none"}> Select Category </MenuItem> */}
                {product.map((item, title) => (
                  <Box key={item.item1}>
                    <MenuItem > {item.item1} </MenuItem>
                    <MenuItem > {item.item2} </MenuItem>
                    <MenuItem > {item.item3} </MenuItem>
                    <MenuItem > {item.item4} </MenuItem>
                    <MenuItem > {item.item5} </MenuItem>
                  </Box>
                  //   <MenuItem > {item.item2} </MenuItem>
                ))}
                {/* <MenuItem value={"tens"}>Twenty</MenuItem>
                  <MenuItem value={"tenss"}>Thirty</MenuItem> */}
              </Select>
              {/* </FormControl> */}
            </Grid>
          </Grid>
          <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
            <Grid item xs={12} md={12}>
              <InputLabel sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000"
              }}>
                Meal Name
              </InputLabel>
              <TextField
                label="Enter meal name"
                size="small"
                variant="outlined"
                fullWidth
                // value={mealInput.meal_name} 
                onChange={handleChange}
                //   defaultValue={data.title}
                //   value={data.title}
                //   onChange={onChange}
                name="meal_name"
                sx={{ mt: "10px" }}
              />
            </Grid>
          </Grid>
          <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
            <Grid item xs={12} md={12} >
              <InputLabel sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000"
              }}>
                Description
              </InputLabel>
              <TextField
                fullWidth
                label="One Plate of Rice with chicken and takeaway"
                multiline
                rows={4}
                // defaultValue={data.description}
                name="description"
                // onChange={onChange}

                // value={mealInput.meal_name} 
                onChange={handleChange}
                sx={{ mt: "10px" }}
              />
            </Grid>
          </Grid>
          <Grid container mt={{ xs: "13px", sm: "21px", md: "1vw" }}>
            <Grid item xs={12} md={12}>
              <InputLabel sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000"
              }}>
                Amount
              </InputLabel>
              <TextField
                label="Amount"
                size="small"
                variant="outlined"
                fullWidth

                // value={mealInput.meal_name} 
                onChange={handleChange}
                //   defaultValue={data.title}
                //   value={data.title}
                //   onChange={onChange}
                name="price"
                sx={{ mt: "10px" }}
              />
            </Grid>
          </Grid>
          <Box pb={{ xs: "23px", sm: "36px", md: "3.75vw" }}>
            {/* <Link href="/merchant/conf"> */}
            <RoundButton
              // onClick={handleOpenModal}
              // onClick={submit()}
              onClick={(e) => submit(e)}
              variant="contained"
              fullWidth
              sx={{
                fontSize: "16px",
                width: { xs: "100%", sm: "100%", md: "100%" },
                mt: "42px",
                color: "#FFFFFF",
                // position:"fixed",
                // width:{md:'355px', xs:"320px"},
                // mb:"90px",
                // position: "fixed",
                // bottom:5,
                // width:{md:'355px', xs:"320px"},
              }}
            > Save product </RoundButton>
            {/* </Link> */}
          </Box>
        </Stack>
        <ConfirmProduct open={confirmopen} onClose={handleCloseModal} />
        {/* </HomeLayout> */}
      </Dialog>
    </Stack>
  );
}