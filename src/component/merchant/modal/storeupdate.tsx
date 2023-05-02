import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import Image from 'next/image'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, TextField, Stack , Box} from '@mui/material';
import messageSent from  '../../../images/merchant/updatestore.svg'
import Link from 'next/link';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose,  open } = props;
  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open} 
>
        <Box sx={{minWidth: "308px", height: "322px", borderRadius: "8px"}}>

<Box style={{textAlign: "center", }} sx={{mt: "23px"}}>
 
  <Image  alt='Successful' src={messageSent} width={131} height={120}/>
</Box>

            <Typography sx={{fontSize: "23.04px",  textAlign: "center", fontWeight: "700", color: "#0F100F"}}>Store Update</Typography>
            <Typography sx={{fontSize: "16px", fontWeight: "400", textAlign: "center", color: "#000000"}}>Opening and closing time for your store
          <br/>
          has been updated successfully </Typography>
          <Link href="/merchant">
            <Typography sx={{fontSize: "16px", fontWeight: "700", color: "#3BB273",  textAlign: "center", mt: "50px"}}>Ok, Got It</Typography>
          </Link>
        </Box>
    </Dialog>
  );
}