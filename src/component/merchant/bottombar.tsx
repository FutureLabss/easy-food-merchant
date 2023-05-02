import React, { ReactElement, ReactNode } from "react";
// import { Stack, Typography, Box } from "@mui/material"
import { Stack, Box, useMediaQuery } from "@mui/material";
import { MdHome } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import Grid from '@mui/material/Grid';
import imgright from "../../images/merchant/imgright.png";
import imgleft from "../../images/merchant/imgleft.png";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ChangeEvent, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { icons, IconType } from "react-icons";
import { useTheme } from "@mui/system";
import OverViewPage from "@/pages/merchant";
import { useEffect } from "react";
import path from "path";
// import ProductPage from "@/pages/merchant/productpage";
// import ProductPage from "../../pages";

interface createdata {
  icon: ReactElement;
  details: string;
  path: string;
}
const data: createdata[] = [
  {
    icon: <MdHome />,
    details: "Overview",
    path: "/merchant"
  },
  {
    icon: <AiFillBank />,
    details: "Products",
    path: "/merchant/productpage"
  },
  {
    icon: <MdOutlineReviews />,
    details: "Wallet",
    path: "/merchant/wallet/wallet"
  },
  {
    icon: <MdOutlineAccountBalanceWallet />,
    details: "Reviews",
    path: "/merchant/orderpage"
  },
];

export default function BottomBar() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  // const [active, setActive] = React.useState(0)
  // const { onChange}
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log({isMobile})

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
    // let array = newValue
    const  item = data[newValue]
    router.push(item.path)

  };
  console.log(router.pathname)
  useEffect(() => {
    const currentpath = router.pathname;
   const index = data.findIndex(item=>item.path == currentpath)
   console.log({index})
   setValue(index || 0)
  },[router.pathname])
  return (
    <>
      <Box
        // mx={{ md: "2.60vw" }}
        pb={{ xs: "7px", sm: "11px", md: "1.18vw" }}
        sx={{
          // boxShadow: '0px 0px 16px 20px  rgba(0, 0, 0, 0.12)',
          // dropShadow:"(2px 3px 10px rgba(0, 0, 0, .5))",
          // borderTop:"(2px 3px 10px rgba(0, 0, 0, .5))",
          // backgroundImage: ` url('${imgright.src}'), url('${imgright.src}')`,
          // // backgroundPosition: "left ",
          // backgroundRepeat: "no-repeat, no-repeat",
          // backgroundSize: "35% 10% , 35% 10%",
          // backgroundPosition: "right 170px top 10px , left 160px top 10px ",
          // height:{xs:"38px", sm:"61px", md:"6.39vw"},
          // height:600,
          // width:600
          // mb: { xs: "7px", sm: "11px", md: "2.18vw" },
          // border: "solid red",
          // position: "fixed",
          // bottom: 0,
          // bgcolor: "white",
          // width: "inherit"
        }}
      >
        <Box sx={{
          borderTop:" 1px solid  rgba(0, 0, 0, .2)",
         mt:"20px",
      boxShadow: '2px 3px 10px rgba(0, 0, 0, .5)',
      }}></Box>
      
        <Stack sx={{Shadow: '2px 3px 10px gray',}}>
          <Tabs
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            sx={{
              // boxShadow: '0px 0px  8px rgba(0, 0, 0, 0.3)',
            }}
            // sx={{ mt: { xs: "7px", sm: "11px", md: "2.18vw" } }}
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: "none"
              }
            }}
          >
            {data.map((items, index) => (
              <Tab
                key={index}
                icon={items.icon}
                label={items.details}
                sx={{
                  color: "#717C76",
                  fontSize:{xs:"0.55em", md:"1vw"}
                }}
              />
            ))}
          </Tabs>
        </Stack>
      </Box>
    </>
  );
}
