import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Image from 'next/image'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, TextField, Stack , Box} from '@mui/material';
import messageSent from  '../../../images/merchant/messageSent.svg'
import Link from 'next/link';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  // selectedValue: string;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose,  open } = props;

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open} 
    sx={{ 
        
      ".MuiDialog-container":{
    marginTop:'120px ',

  },
  ".MuiDialog-paper":{       
    marginLeft:{md:"20px", xs:"px", sm:""},

    }
  }}>
        <Box sx={{minWidth: "323px", height: "322px", borderRadius: "8px"}}>

        <Box style={{textAlign: "center", }} sx={{mt: "33px"}}>
        
          <Image  alt='Successful' src={messageSent} width={139} height={110}/>
        </Box>

            <Typography sx={{fontSize: "23.04px",  textAlign: "center", fontWeight: "700", color: "#0F100F"}}>Transaction Successful</Typography>
            <Typography sx={{fontSize: "16px", fontWeight: "400", textAlign: "center", color: "#000000"}}>Your N5000 withdrawal to 2000211109 <br/>
            was successful</Typography>
            <Link href="/merchant">
            <Typography sx={{fontSize: "16px", fontWeight: "700", color: "#3BB273",  textAlign: "center", mt: "50px"}}>Back to Home</Typography>
            </Link>
        </Box>





      
    </Dialog>
  );
}