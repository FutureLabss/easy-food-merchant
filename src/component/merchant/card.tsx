import * as React from "react";
import { Box, Stack, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Cards = {
  title: string;
  title1: string;
  description: string;
  name: string;
};

const people: Cards[] = [
  {
    name: "TOTAL SALES",
    title1: "N",
    title: "309,950",
    description: "+20% this month",
  },
  {
    name: "TOTAL ORDERS",
    title: "395",
    title1: " Orders placed",
    description: "+20% this month",
  },
  {
    name: "SUCCESSFUL ORDERS",
    title: "390",
    title1: " Orders placed",
    description: "+20% this month",
  },
  {
    name: "CANCELLED ORDERS",
    title: "5",
    title1: " Orders Cancelled",
    description: "+20% this month",
  },
  {
    name: "NEW CUSTOMERS",
    title: "53",
    title1: " New Customers",
    description: "+20% this month",
  },
  {
    name: "RETURNING CUSTOMERS",
    title: "390",
    title1: " Returning Customers",
    description: "+20% this month",
  },
];

export default function Card1() {
  return (
    <Box sx={{ height: 200, overflow: "hidden", overflowY: "auto" }}>
      <Grid container rowSpacing="16px" columnSpacing="16px">
        {people.slice(0, 4).map((card: Cards,index) => (
          <Grid item xs={6} key={card.name}>
            <Card sx={{ width: "160px", backgroundColor: "#EFF0F0"}} variant="outlined">
              <CardContent>
                <Typography fontSize="11.11px" fontWeight="700">
                  {card.name}
                </Typography>
                <Stack direction={index==0 ?'row-reverse' :"row"} justifyContent={index==0 ?"flex-end" : "flex-start"} alignItems="center" spacing="4px" mt="10px">
                  <Typography fontSize="19.2px" fontWeight="700">
                    {card.title}
                  </Typography>
                  <Typography fontSize="11.11px" fontWeight="500">
                    {card.title1}
                  </Typography>
                </Stack>
                <Typography
                  fontSize="11.11px"
                  fontWeight="500"
                  color="text.secondary"
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {people.slice(4).map((card: Cards) => (
          <Grid item xs={6} key={card.name}>
            <Card sx={{ width: "160px", backgroundColor: "#EFF0F0"}} variant="outlined">
              <CardContent>
                <Typography fontSize="11.11px" fontWeight={{ md: "600" }}>
                  {card.name}
                </Typography>
                <Stack direction="row" alignItems="center" spacing="4px">
                  <Typography fontSize="19.2px" fontWeight="700">
                    {card.title}
                  </Typography>
                  <Typography fontSize="11.11px" fontWeight="500">
                    {card.title1}
                  </Typography>
                </Stack>
                <Typography
                  fontSize="11.11px"
                  fontWeight={{ md: "500" }}
                  color="text.secondary"
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
