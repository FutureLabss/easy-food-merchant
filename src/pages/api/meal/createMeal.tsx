// This Page is to create new meal as a merchant

import axios from "axios";

const merchant_id = localStorage.getItem('my_id');

interface state{
    createMealApi: () => void;
}
const createMealApi = async(input: string) =>{
    return await axios
    .post(`/meal/${merchant_id}`, input)
    // .post(`/meal/645ba68e70cd40a1a0ec75ea`, input)
    .then((res) =>{
      console.log(`${res.data.result}`);      
      console.log({input})
      return res.data;
    })
    .catch((e) => {
      console.log({e})
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
  }
  export {createMealApi}