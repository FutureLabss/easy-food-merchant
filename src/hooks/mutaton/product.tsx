import { IMutationArgs, IMutationHook } from "../../lib/interfaces/query";
import { useRegiserMutation } from "../helpers/registerMutation";
import { deleteMealApi, updateMealApi } from "../../pages/api/services/meal";
import { IcreateMealModal, IcreateMeal, IMeal } from "../../lib/interfaces/meal";



export function useUpdateProduct ({onSuccess}: IMutationHook){
    const updateObject: IMutationArgs<IcreateMealModal, IMeal>= {
        key:['product'],
        callback:(data: IcreateMealModal) => updateMealApi(data.meal_id, data),
        onSuccess: onSuccess,
    };
    return useRegiserMutation(updateObject)
}



export function useDeleteMeal({onSuccess}: IMutationHook){
    const deleteObject: IMutationArgs<IcreateMealModal, IcreateMeal>= {
        key:['product'],
        callback:(data: IcreateMealModal) => deleteMealApi(data.meal_id),
        onSuccess: onSuccess,
    };
    return useRegiserMutation(deleteObject)
}