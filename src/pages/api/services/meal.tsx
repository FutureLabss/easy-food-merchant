import { MealDTO } from "@/lib/dto/meals";
import { IMeal, IcreateMeal } from "../../../lib/interfaces/meal";
import { IcreateMealModal } from "@/lib/interfaces/meal";
import axios from "axios";

const createMealApi = async (input: IcreateMeal) => {
  console.log("api");
  let merchant_id = localStorage.getItem("my_id");
  console.log({ merchant_id });
  const merchant = await axios
    .post(`/meal/${merchant_id}`, input)
    .then((res: { data: any }) => {
      // console.log({merchant})
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network error";
      throw new Error(errMsg);
    });
  return merchant;
};

const getAllMealMerchantApi = async (merchant_id: string): Promise<IMeal[]> => {
  return await axios
    .get<MealDTO[]>(`/meal/merchant/${merchant_id}`)
    .then((res) => {
      return res.data.map((meal) => convertToModel(meal));
    })
    .catch((e) => {
      console.log({ e });
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
};

const getSingleMealApi = async (id: string) :Promise<IMeal> => {
  return await axios
    .get<MealDTO>(`/meal/${id}`)
    .then((res) => {
      return convertToModel(res.data);
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network Error";
      throw new Error(errMsg);
    });
};

const updateMealApi = async (meal_id: string, data: IcreateMealModal):Promise<IMeal> => {
  const approved = await axios
    .put <MealDTO>(`/meal/${meal_id}`, data)
    .then((res) => {
      return convertToModel(res.data);
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network error";
      throw new Error(errMsg);
    });
  return approved;
};

const deleteMealApi = async (meal_id: string)  => {
  const approved = await axios
    .delete(`/meal/${meal_id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      const errMsg = e.response?.data?.message || "Network error";
      throw new Error(errMsg);
    });
  return approved;
};

function convertToModel(meal: MealDTO): IMeal {
  return {
    id: meal._id,
    merchant: {
      name: meal.merchant_id.merchant_name,
      id: meal.merchant_id._id,
    },
    mealName: meal.meal_name,
    pictures: meal.pictures.map((picture) => ({
      url: picture.url,
      publicId: picture.public_id,
    })),
    category: meal.category,
    status: meal.status,
    price: meal.price,
    preparationTime: meal.preparation_time,
    createdAt: meal.createdAt,
  };
}

export {
  createMealApi,
  getAllMealMerchantApi,
  getSingleMealApi,
  updateMealApi,
  deleteMealApi,
  // getAllCategoryApi,
};
