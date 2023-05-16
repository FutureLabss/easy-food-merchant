import axios from "axios";
interface state{
    getAllArderApi: () => void;
}


const getAllOrderApi = async() =>{
    return await axios
    .get(`/order/all`)
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
  export {getAllOrderApi}