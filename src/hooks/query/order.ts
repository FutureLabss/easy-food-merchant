import { IQueryArgs } from "@/lib/interfaces/query";
import {IOrder} from "../../lib/interfaces/orders"
import { getAllOrderApi } from "@/pages/api/services/order";
import { useMerchantQuery } from "../helpers/query";

export function useOrderQueryObject() {
  const queryObject: IQueryArgs<IOrder[]> = {
    key: ["order"],
    callback: getAllOrderApi,
  };
  return useMerchantQuery(queryObject);
}





