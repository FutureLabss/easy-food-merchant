// import { IcreateMeal } from "../../../lib/interfaces/meal";
import { IcreateMeal, IcreateMealModal } from "@/lib/interfaces/meal";
import axios from "axios";

const getAllMealMerchantApi = async (merchant_id: string) =>{
    return await axios
      .get(`/meal/merchant/${merchant_id}`)
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

const updateMealApi = async (meal_id: IcreateMealModal, input: string) => {
    const approved = await axios
    .put(`/meal/${meal_id}`, input)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network error";
      throw new Error(errMsg);
    });
  return approved;

}

  export {
    getAllMealMerchantApi,
    updateMealApi,
  }