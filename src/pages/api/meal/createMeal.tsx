// This Page is to create new meal as a merchant

import axios from "axios";

import { ReactNode, createContext, useContext, useEffect,} from "react";
import { IcreateMeal } from "../../../lib/interfaces/meal"



// useEffect(() => {
//   let details = JSON.parse(localStorage.getItem("getToken") || "{}");
//   setToken(details?.token);
//   setAuth(details);
// }, []);

interface state{
    // createMealApi: () => void;
}
const createMealApi = async(input: IcreateMeal) => {
    let merchant_id = localStorage.getItem("my_id")
    console.log(merchant_id)
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