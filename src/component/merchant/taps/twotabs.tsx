import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ArrowFunction } from 'typescript';

interface Props {
  name1?: string
  name2?: string
  onChange?: (index: number) => void

}

export default function TwoScrollableTabs(props: Props) {
  const { name1, name2, onChange } = props
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <Box sx={{ maxWidth: "100%", background: "#F2F4F7" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: "none"
          }
        }}

        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{
          maxWidth: "100vw", '  .Mui-selected': {
            backgroundColor: "#3BB273",
            
            color: "#FFFFFF !important",
            fontSize:"13.33px",
             fontWeight:"600",
          },
          
          borderRadius: "6px",
          padding: "4px 0px",

        
        }}

      >
        <Tab label={props.name1} sx={{ borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize:"13.33px",fontWeight:"500" }} />
        <Tab label={props.name2} sx={{ borderRadius: "6px", width: "100%", maxWidth: "25vw", textTransform: "capitalize", fontSize:"13.33px",fontWeight:"500" }} />

      </Tabs>
    </Box>
  );
}