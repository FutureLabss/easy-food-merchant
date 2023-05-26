import { IOrder } from "@/lib/interfaces/orders";
import axios from "axios";
interface state{
    getAllArderApi: () => void;
}

const getAllOrderApi = async() =>{
    return await axios
    .get(`/order/all`)
    .then((res) =>{
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log({e})
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
  }

  const getSingleOrderApi  = async(id: string) =>{
    return await axios
      .get(`/order/${id}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        const errMsg = e.response?.data?.message || "Network Error";
        throw new Error(errMsg);
      });
  }

 
  export {getAllOrderApi, getSingleOrderApi}