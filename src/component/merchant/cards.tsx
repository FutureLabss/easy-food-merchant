import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import Chip from '@mui/material/Chip';



  type Cards = {
    title: string;
    description: string;
    name: string;
  };
  
  const people: Cards[] = [
    { name: 'SUCCESSFUL ORDERS',
    title: "390 Orders placed",
     description: '+20% this month', 
     },
     { name: 'CANCELLED ORDERS',
     title: "5 Orders Cancelled",
      description: '+20% this month', 
    },
  ];

export default function Card2() {
   
    
  return (

    <Stack direction={{md: "row", xs: "row"}}
    spacing={{xs:"23px", sm:"37px", md:"1.4vw"}}> 
     {people.map((Cards: Cards) => (
         <Card key={Cards.name} sx={{width: "160px"}}>
         
         <CardContent>
           <Typography fontSize="0.54em" fontWeight={{md: "600"}} >
           {Cards.name}
           </Typography>
           <Typography fontSize="0.54em" fontWeight={{md: "600"}} >
           {Cards.title}
           </Typography>
           <Typography fontSize="0.54em" fontWeight={{md: "500"}} color="text.secondary">
           {Cards.description}
           </Typography>
          
         </CardContent>
        
       </Card>
        // <li >
        //    - {Card.description}
        // </li>
      ))}
 
    </Stack>
  );
}