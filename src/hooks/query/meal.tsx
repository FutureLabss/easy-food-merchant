import { IQueryArgs } from "@/lib/interfaces/query";
import {IMeal, Icategory, IcreateMeal} from "../../lib/interfaces/meal"
import { getAllMealMerchantApi, getSingleMealApi} from "@/pages/api/services/meal";
import { useMerchantQuery } from "../helpers/query";

export  function useAllMeal(){
    const queryObject: IQueryArgs<string, IMeal[]> = {
        key: ["meal"],
        callback:()=> getAllMealMerchantApi('all'),
      };
      return useMerchantQuery(queryObject);
}

export function useSingleMeal(){
  const singleQuery: IQueryArgs<string, IMeal> = {
    key: ["meal"],
    callback:()=> getSingleMealApi('id'),
  };
  return useMerchantQuery(singleQuery);
}

