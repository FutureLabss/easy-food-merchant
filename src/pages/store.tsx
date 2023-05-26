import AppBar from '@/component/merchant/appbar';
import { SwitchProps } from '@mui/material/Switch';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import HomeLayout from '@/layout/merchant';
import {Box, Stack, Typography, Button, Switch, Card, CardContent} from '@mui/material'
import {AiOutlineDown} from "react-icons/ai"
import Link from 'next/link'
import SimpleDialog from '@/component/merchant/modal/storeupdate';
import {merchantProvider} from '@/context/merchant';
// import {Box} from '@mui/material'


const card = (
    <CardContent>
      <Typography fontSize="14px" fontWeight="600" color="#344054" gutterBottom>
        Opening and Closing Hours
      </Typography>
      <Typography variant="body2" fontSize="14px" fontWeight="400" color="#475467">
       Please schedule your store opening and closing <br />
      hours between 7:00 am and 6:00 pm, since riders <br /> 
      can only pick up orders during that time
      </Typography>
    </CardContent>
);

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const opentime=[
  "6am",
  "8am",
  "10am"
]
// const closetime=[
//   "10pm",
//   "8pm",
//   "11pm"
// ]

export default function StorePage() {
  const data = merchantProvider()
  console.log({data})
  const [age, setAge] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
    return (
        <HomeLayout>
        <Box width="100%">
          <Box sx={{height: "800px"}}>
        <Stack direction="column" alignItems="center" justifyContent="space-around" spacing={3}>
        <AppBar props={''} url={"/"}   />
        <Stack direction="row" spacing= "144px" mt="45px">
            <Typography fontSize="16px" fontWeight="700">Store Status</Typography>
            <Stack direction="row" spacing="10px">
              {/* <Link></Link> */}
            <Typography fontSize="16px" fontWeight="600" color="#3BB273" >Store Open</Typography>
            <IOSSwitch sx={{mr: "12px"}} defaultChecked />
            </Stack>
          </Stack>
          <Box sx={{ minWidth: 275 }}>
      <Card  variant="outlined">{card}</Card>
          </Box>
          <Stack direction="column" spacing="15px" justifyContent="flex-start">
<Typography fontSize="14px" fontWeight="600">Opening Hour</Typography>
<FormControl sx={{ m: 1, minWidth: 350 }} size="small">
      <InputLabel id="demo-select-small" sx={{fontSize:"14px", fontWeight:"400", color:"#849089"}}>
        Select when your store is open for business</InputLabel>
      {data?.openingHour ? <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        defaultValue={data?.openingHour}
        fullWidth
        label="Age"
        onChange={handleChange}
      >
        {opentime.map((time)=>(
        <MenuItem value={time}>{time}</MenuItem>
        ))}
      </Select> :<></>}
    </FormControl>
          </Stack>
            <Stack direction="column" spacing="15px" justifyContent="flex-start">
<Typography fontSize="14px" fontWeight="600">Closing Hour</Typography>
<FormControl sx={{ m: 1, minWidth: 350 }} size="small">
      <InputLabel id="demo-select-small" sx={{fontSize:"14px", fontWeight:"400", color:"#849089"}}>Select when your store is closed</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        fullWidth
        label="Age"
        onChange={handleChange}
      >
         {opentime.map((time)=>(
        <MenuItem value={time}>{time}</MenuItem>
        ))}
      </Select>
    </FormControl>
          </Stack>
        <Button
        onClick={handleOpenModal}
         variant="contained" style={{height: "52px", width: "358px"}} size="medium" sx={{backgroundColor: "#3BB273", borderRadius: "8px", color: "#FFFFFF", fontSize: "16px", fontWeight: "700"}}>Save Changes</Button>
        </Stack>
        </Box>
        </Box>
        <SimpleDialog open={openModal} onClose={handleCloseModal} />
        </HomeLayout>
    )
}