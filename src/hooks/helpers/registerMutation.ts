import { IMutationArgs } from "@/lib/interfaces/query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { CreateMerchantProfileApi } from "../pages/api/services/profile";

export function useRegiserMutation<IArg, IReturn>({ callback, key, onSuccess }: IMutationArgs<IArg, IReturn>) {
  const queryClient = useQueryClient();
  return useMutation(
    (data: IArg) => {
      return callback && callback(data);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(key);
        onSuccess && onSuccess(data);
      },
    }
  );
}

// function useCreateMerchantProfile () {
//   const queryClient = useQueryClient();
//   const { mutate, isLoading, error, isSuccess } = useMutation<any,any,ISignUp>((input) => {
//       return CreateMerchantProfileApi(input);
//   },
//   {onSuccess:()=>{
//       queryClient.invalidateQueries(['merchantprofile'])
//     },onSettled:()=>{
//       callback&&callback()
//     }});
//     // console.log(mutate)


//     return {
//       createMerchantProfile: mutate,
//       loading: isLoading,
//       error,
//       success: isSuccess,
//     };
// }
