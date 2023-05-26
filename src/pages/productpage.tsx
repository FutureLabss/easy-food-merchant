import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBar from '../component/merchant/search';
import HomeLayout from '../layout/merchant';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
// import useState


import TwoScrollableTabs from '../component/merchant/taps/twotabs';
import ButtonAppBar from '../component/merchant/backbar';
import { useState } from 'react';
import AllProduct from '../component/merchant/productstap/allproduct';
import PendingProduct from '../component/merchant/productstap/pendingproduct';
// useAllMeal()
// import { useAllMeal } from "../hooks/query/product"


function createData(
    foodName: string,
    amount: string,
    image: string,
    orderType: string,

) {
    return {
        foodName,
        amount,
        image,
        orderType,
    };
}

const rows = [
    createData('Fried Chicken', "2300", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food"),
    createData('Jellof Rice', "4230", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Pre-Order"),
    createData('Fried Chicken', "2210", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food"),
    // createData('White Soup', "4200", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food" ),
    // createData('Jellof Rice', "2500", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Pre-Order" ),
    // createData('Indomie Sauce', "1500", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "Fast Food" ),

];

export default function ProductPage() {

    const [active, setActive] = useState(0) 
    return (
        <HomeLayout>
            <ButtonAppBar display={"none"} name={"Products"} props={''} url={''} />
            <div style={{ padding: "0px 20px" }} >

                <SearchBar searchType="Search Products" />

                <TwoScrollableTabs 
                 onChange={setActive} 
                 name1={"Products"} 
                 name2={"Categories"} 
                />

                {active == 0 ? <AllProduct /> : null }
                {active == 1 ? <PendingProduct/> : null}
                

            </div>
        </HomeLayout>

    )
}