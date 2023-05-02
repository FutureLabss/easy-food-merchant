import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';


interface Props {
    searchType?: string
   
  
  }

export default function SearchBar(props: Props) {
    return (

        <div style={{marginTop: "30px"}}>
        <FormControl fullWidth sx={{ m: 1 }}>
            
            <OutlinedInput
                id="filled-adornment-amount"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                placeholder={props.searchType}
            />
        </FormControl>
        </div>
    )
}