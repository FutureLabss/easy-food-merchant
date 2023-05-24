// import { IMutationArgs, IMutationHook } from "../../lib/interfaces/query";
// import { useRegiserMutation } from "../helpers/registerMutation";
// import { updateMealApi } from "../../pages/api/services/product";
// import { IcreateMealModal, IcreateMeal } from "../../lib/interfaces/meal";



// export function useUpdateProduct ({onSuccess}: IMutationHook){
//     const mutateObject: IMutationArgs<IcreateMealModal, IcreateMeal>= {
//         key:['product'],
//         callback:(data: IcreateMealModal) => updateMealApi(data, id),
//         onSuccess: onSuccess,
//     };
//     return useRegiserMutation(mutateObject)
// }