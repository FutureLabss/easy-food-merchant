import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface Props {
  name1?: string
  name2?: string
  name3?: string
  name4?: string

}

export default function FourScrollableTabs(props: Props) {
  const {name1, name2, name3, name4} = props
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
  };









 

  return (
    <Box sx={{ maxWidth: "100%" , background: "#F2F4F7", }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            }
          }}
          sx={{
            maxWidth: "100vw", '  .Mui-selected': {
              backgroundColor: "#3BB273",
              color: "white !important"
            },
            
            borderRadius: "6px",
            padding: "4px 0px",
           
          
          }}
      >
        <Tab label={props.name1} sx={{borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize: "14px"}} />
        <Tab label={props.name2} sx={{borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize: "14px"}} />
        <Tab label={props.name3} sx={{borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize: "14px"}} />
        <Tab label={props.name4} sx={{borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize: "14px"}} />
       
      </Tabs>
    </Box>
  );
}