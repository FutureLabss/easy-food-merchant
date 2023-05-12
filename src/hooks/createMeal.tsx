// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // import { createMealApi } from "../pages/api/meal/createMeal";
// // interface state{
// //     data:string;
// // }

// // export function useAllMealApi(){
// //     const { data, error,status } = useQuery(
// //         ["meal"],
// //         (e) => {
// //             return createMealApi();
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
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { createMealApi } from "../pages/api/meal/createmeal";

// // export function useCreateMealApi() {
// //   const queryClient = useQueryClient();

// //   const createMealMutation = useMutation(createMealApi, {
// //     onSuccess: (data) => {
// //       // Invalidate the "meal" query to trigger a refetch and update the cache
// //       queryClient.invalidateQueries("meal");
// //     },
// //   });

// //   const createMeal = async (input: string) => {
// //     try {
// //       const result = await createMealMutation.mutateAsync(input);
// //       console.log(result);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return { createMeal, isLoading: createMealMutation.isLoading };
// // }

// function useCreateMealApi() {
//     const queryClient = useQueryClient();
//     const { isLoading, mutate, error, isSuccess } = useMutation((data) => {
//       return createMealApi(data);
//     },{onSuccess:()=>{
//       queryClient.invalidateQueries(['meal'])
//     },onSettled:()=>{
//       callback&&callback()
//     }});
  
//     return {
//       createMeal: mutate,
//       loading: isLoading,
//       success: isSuccess,
//       error,
//     };
//   }


// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createMealApi } from "../pages/api/meal/createmeal";

// interface UseCreateMealApiReturnType {
//   createMeal: (data: string) => void;
//   loading: boolean;
//   success: boolean;
//   error: Error | null;
// }

// export function useCreateMealApi(callback?: () => void): UseCreateMealApiReturnType {
//   const queryClient = useQueryClient();

//   const { isLoading, mutate, error, isSuccess } = useMutation(createMealApi, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["meal"]);
//     },
//     onSettled: () => {
//       callback && callback();
//     },
//   });

//   return {
//     createMeal: mutate,
//     loading: isLoading,
//     success: isSuccess,
//     error,
//   };
// }

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMealApi } from "../pages/api/meal/createMeal";
import { IcreateMeal } from "../lib/interfaces/meal"

// interface UseCreateMealApiReturnType {
  // createMeal: (data: string) => void;
//   loading: boolean;
//   success: boolean;
//   error: unknown;
//   input: string;
// }

function useCreateMealApi() {
  const queryClient = useQueryClient();
  const { isLoading, mutate, error, isSuccess } = useMutation< any, any,  IcreateMeal>((input) =>{
    return createMealApi(input);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['meal']);
    },
    onSettled: () => {
      callback&&callback();
    },
  });

  return {
    createMeal: mutate,
    loading: isLoading,
    success: isSuccess,
    error,
  };
}

export { useCreateMealApi }


function callback() {
  throw new Error("Function not implemented.");
}
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { createMealApi } from "../pages/api/meal/createmeal";
// interface state{
//     data:string;
// }
// export function useCreateMealApi(){
//     const { data, error,status } = useQuery(
//         ["meal"],
//         (e) => {
//             return createMealApi();
//           },
//           {
//             keepPreviousData: true,
//             refetchOnMount: false,
//             refetchOnWindowFocus: false,
//           }
//     );
//     console.log({ data,error,status });
  
//     return { createMeal: data?.data || [], error };
  // }
