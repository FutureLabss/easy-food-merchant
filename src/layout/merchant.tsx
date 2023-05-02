import {  Container, Box } from "@mui/material";
import BottomBar from "@/component/merchant/bottombar";

type LayoutProps = {
    children: React.ReactNode;
};

export default function HomeLayout({children} : LayoutProps) {
 return (
    <Container disableGutters maxWidth={false}>
        <Box width="390px" mx="auto">
<main>{children}</main>
 <BottomBar />
 </Box>
    </Container>
 );
}