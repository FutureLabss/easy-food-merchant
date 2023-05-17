// // This Page is to create new meal as a merchant

// import axios from "axios";

// import { ReactNode, createContext, useContext, useEffect,} from "react";
// import { IcreateMeal } from "../../../lib/interfaces/meal"


// interface state{
//     // createMealApi: () => void;
// }
// const createMealApi = async(input: IcreateMeal) => {
//     let merchant_id = localStorage.getItem("my_id")
//     console.log(merchant_id)
//     return await axios
//     .post(`/meal/`, input)
//     // .post(`/meal/645ba68e70cd40a1a0ec75ea`, input)
//     .then((res) =>{
//       console.log(`${res.data.result}`);      
//       console.log({input})
//       return res.data;
//     })
//     .catch((e) => {
//       console.log({e})
//       const errMsg = e.response?.data?.message || "Network Error";
//       throw new Error(errMsg);
//     });
//   }
//   export {createMealApi}


// import { ISignUp } from "@/lib/interfaces/signup";
import { IcreateMeal } from "../../../lib/interfaces/meal";
import axios from "axios";
// interface state{
//   data: string
// }
const createMealApi = async (input: IcreateMeal) => {
  console.log("api")
  let merchant_id = localStorage.getItem("my_id")
  console.log({ merchant_id })
  const merchant = await axios
    .post(`/meal/${merchant_id}`, input)
    .then((res: { data: any; }) => {
      // console.log({merchant})
      console.log(res.data)
      return res.data;
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network error";
      throw new Error(errMsg);
    });
  return merchant;
}


// const CreateMerchantProfileApi  = async (input: ISignUp) => {
//   console.log("api")
//   const merchant = await axios
//   .post(`/merchant`, input)
//   .then((res) => {
//       console.log(res.data)
//       return res.data;
//   })
//   .catch((e) => {
//       const errMsg = e. response?.data?.message || "Network error";
//       throw new Error(errMsg);
//   });
//   return merchant;
// }


// const getMerchantProfileApi = async() =>{
//     return await axios
//     .get(`/merchant`)
//     .then((res) =>{
//       console.log(res.data.result);
//       return res.data;
//     })
//     .catch((e) => {
//       console.log({e})
//       const errMsg = e.response?.data?.message || "Network Error";
//       throw new Error(errMsg);
//     });
//   }

//   const upDateMerchantProfileApi = async () =>{
//     // console.log({name:data})
//     const update = await axios
//     // /${id}
//     .put(`/merchant`)
//     .then((res)=>{
//       console.log(res.data || {})
//       return res.data 
//     })
//     .catch(e=>{
//      const errMsg = e.response?.data?.message || "error"
//      throw new Error(errMsg)
//     })
//     return update
//   }

//   const deleteMerchantProfileApi = async () => {
//     const message = await axios
//     .delete(`/merchant/`)
//     .then ((res)=>{
//         console.log(res.data || {})
//       return res.data 
//     })
//     .catch(e=>{
//         const errMsg = e.response?.data?.message || "error"
//         throw new Error(errMsg)
//        })
//        return message
//   }

//   const getAllMerchantApi = async() =>{
//     return await axios
//     .get(`/merchant/all`)
//     .then((res) =>{
//       console.log(res.data.result);
//       return res.data;
//     })
//     .catch((e) => {
//       console.log({e})
//       const errMsg = e.response?.data?.message || "Network Error";
//       throw new Error(errMsg);
//     });
//   }

//   const getSingleMerchantApi = async () => {
//     return await axios
//       .get(`/merchant/{merchant_id/ }`)
//       .then((res) => {
//         return res.data;
//       })
//       .catch((e) => {
//         const errMsg = e.response?.data?.message || "Network Error";
//         throw new Error(errMsg);
//       });
//   };

export {
  createMealApi,
}