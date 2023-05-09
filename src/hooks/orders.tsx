import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllOrderApi } from "@/pages/api/services/order/order";
interface state{
    data:string;
}
export function useAllOrder(){
    const { data, error,status } = useQuery(
        ["order"],
        (e) => {
            return getAllOrderApi();
          },
          {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          }
    );
    console.log({ data,error,status });
  
    return { orders: data?.data || [], error };
  }