import { IQueryArgs } from "@/lib/interfaces/query";
import {IcreateMeal} from "../../lib/interfaces/meal"
import { getAllMealMerchantApi} from "@/pages/api/services/createMeal";
import { useMerchantQuery } from "../helpers/query";

export  function useAllMeal(){
    const queryObject: IQueryArgs<string, IcreateMeal[]> = {
        key: ["meal"],
        callback:()=> getAllMealMerchantApi('all'),
      };
      return useMerchantQuery(queryObject);
}