import { IQueryArgs } from "@/lib/interfaces/query";
import {IOrder} from "../../lib/interfaces/orders"
import { getAllOrderApi, getSingleOrderApi } from "@/pages/api/services/order";
import { useMerchantQuery } from "../helpers/query";

export function useOrderQueryObject() {
  const queryObject: IQueryArgs<string, IOrder[]> = {
    key: ["order"],
    callback: getAllOrderApi,
  };
  return useMerchantQuery(queryObject);
}

export function useSingleOrderQuery(){
  const singleQuery: IQueryArgs<string, IOrder[]> = {
    key: ["order"],
    callback:()=> getSingleOrderApi('all'),
  };
  return useMerchantQuery(singleQuery);

}





