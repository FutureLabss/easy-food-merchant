import * as React from 'react';
import Link from "next/link"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface prop {
  props: string;
  name: string;
  display: string;
  url:string;
  // onClose: () => void;
}
export default function ButtonAppBar(props:prop) {
  // const {onClose} = props
  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px"}}>
      <AppBar position="static" elevation={0} sx={{backgroundColor: "#F4F5F5" ,   }}>
        <Toolbar>
          <Link href={"/"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#3BB273", fontWeight: "700", fontSize: "16px", gap: "0.5rem", display: props.display }}
                    >
            <ArrowBackIosNewIcon />
          <Typography >
            Back</Typography>
          </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center",color: "#000000", fontWeight: "700", fontSize: "16px" }}>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}