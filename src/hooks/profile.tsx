// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { CreateMerchantProfileApi } from "../pages/api/services/profile";
// import { ISignUp } from "@/lib/interfaces/signup";
// interface state {
//     data: string;
// }

// function useCreateMerchantProfile () {
//     const queryClient = useQueryClient();
//     const { mutate, isLoading, error, isSuccess } = useMutation<any,any,ISignUp>((input) => {
//         return CreateMerchantProfileApi(input);
//     },
//     {onSuccess:()=>{
//         queryClient.invalidateQueries(['merchantprofile'])
//       },onSettled:()=>{
//         callback&&callback()
//       }});
//       // console.log(mutate)


//       return {
//         createMerchantProfile: mutate,
//         loading: isLoading,
//         error,
//         success: isSuccess,
//       };
// }
// export{
//     useCreateMerchantProfile,
// }




















// function callback() {
//   throw new Error("Function not implemented.");
// }
// // export function useAllOrder(){
// //     const { data, error,status } = useQuery(
// //         ["order"],
// //         (e) => {
// //             return getAllOrderApi();
// //           },
// //           {
// //             keepPreviousData: true,
// //             refetchOnMount: false,
// //             refetchOnWindowFocus: false,
// //           }
// //     );
// //     console.log({ data,error,status });
  
// //     return { orders: data?.data || [], error };
// //   }