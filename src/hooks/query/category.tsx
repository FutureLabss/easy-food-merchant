import { getAllCategoryApi } from "../../pages/api/services/category";
import { IQueryArgs } from "@/lib/interfaces/query";
import {IMeal, Icategory, IcreateMeal} from "../../lib/interfaces/meal"
import { useMerchantQuery } from "../helpers/query";


export  function useAllCategory(){
    const categoryObject: IQueryArgs<string, Icategory[]> = {
        key: ["category"],
        callback: getAllCategoryApi,
      };
      return useMerchantQuery(categoryObject);
  }
  
  