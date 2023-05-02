import styled from "@emotion/styled";
import {  Button } from "@mui/material"
type styling ={
    background: string ;
    RoundButton: string | number;
}
const RoundButton = styled(Button)(({ variant })=>{
    const style = {
        borderRadius: "8px",
        boxShadow: "none",
        background:"transparent",
        // position:"fixed",
      }
      if (variant == "contained") {
        style.background = "#3BB273"
        // style.background = "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"
      }
      return style
      

})
export default RoundButton;