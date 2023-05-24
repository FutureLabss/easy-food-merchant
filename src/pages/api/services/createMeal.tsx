import { IcreateMeal } from "../../../lib/interfaces/meal";
import axios from "axios";



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



export {
  createMealApi,
}