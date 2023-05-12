import { ISignUp } from "@/lib/interfaces/signup";
import axios from "axios";
// interface state{
//   data: string
// }
const CreateMerchantProfileApi  = async (input: ISignUp) => {
  console.log("api")
  const merchant = await axios
  .post(`/merchant`, input)
  .then((res) => {
      console.log(res.data)
      return res.data;
  })
  .catch((e) => {
      const errMsg = e. response?.data?.message || "Network error";
      throw new Error(errMsg);
  });
  return merchant;
}


const getMerchantProfileApi = async() =>{
    return await axios
    .get(`/merchant`)
    .then((res) =>{
      console.log(res.data.result);
      return res.data;
    })
    .catch((e) => {
      console.log({e})
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
  }

  const upDateMerchantProfileApi = async () =>{
    // console.log({name:data})
    const update = await axios
    // /${id}
    .put(`/merchant`)
    .then((res)=>{
      console.log(res.data || {})
      return res.data 
    })
    .catch(e=>{
     const errMsg = e.response?.data?.message || "error"
     throw new Error(errMsg)
    })
    return update
  }

  const deleteMerchantProfileApi = async () => {
    const message = await axios
    .delete(`/merchant/`)
    .then ((res)=>{
        console.log(res.data || {})
      return res.data 
    })
    .catch(e=>{
        const errMsg = e.response?.data?.message || "error"
        throw new Error(errMsg)
       })
       return message
  }

  const getAllMerchantApi = async() =>{
    return await axios
    .get(`/merchant/all`)
    .then((res) =>{
      console.log(res.data.result);
      return res.data;
    })
    .catch((e) => {
      console.log({e})
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
  }

  const getSingleMerchantApi = async () => {
    return await axios
      .get(`/merchant/{merchant_id/ }`)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        const errMsg = e.response?.data?.message || "Network Error";
        throw new Error(errMsg);
      });
  };



  export {
    CreateMerchantProfileApi, 
    getMerchantProfileApi, 
    upDateMerchantProfileApi, 
    deleteMerchantProfileApi,
    getAllMerchantApi,
    getSingleMerchantApi,
    
}