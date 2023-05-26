// import { ISignUp } from "@/lib/interfaces/signup";
import { IMerchant } from "@/lib/interfaces/profile";
import { ISignUp } from "../../../lib/interfaces/signup";
import axios from "axios";
import { MerchantDTO } from "@/lib/dto/meals";
import { IMerchantDTO } from "@/lib/dto/profile";
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


const getMerchantProfileApi = async(): Promise<IMerchant> =>{
    return await axios
    .get<IMerchantDTO>(`/merchant`)
    .then((res) =>{
      return convertToModel(res.data);
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

  function convertToModel(merchant: IMerchantDTO): IMerchant {
    return {
      id: merchant._id,
      user: merchant.user,
      name: merchant.merchant_name,
      logo:merchant.logo,
      address: merchant.address,
      openingHour: merchant.opening_hour,
      closingHour: merchant.closing_hour,
      phone:merchant.phone,
      ratings:merchant.ratings,

     
    };
  }



  export {
    CreateMerchantProfileApi, 
    getMerchantProfileApi, 
    upDateMerchantProfileApi, 
    deleteMerchantProfileApi,
    getAllMerchantApi,
    getSingleMerchantApi,
    
}