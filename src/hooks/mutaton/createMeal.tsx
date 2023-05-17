import { IMutationArgs, IMutationHook } from "../../lib/interfaces/query";
import { useRegiserMutation } from "../helpers/registerMutation";
import { createMealApi } from "../../pages/api/services/createMeal";
import { IcreateMeal, IcreateMealModal } from "../../lib/interfaces/meal";
// import { ISignUp, ISignUpForm } from "../../lib/interfaces/signup";
export function useMealCreate ({onSuccess}: IMutationHook){
    const mutateObject: IMutationArgs<IcreateMeal, IcreateMealModal>= {
        key:['meal'],
        callback:(data: IcreateMealModal) => createMealApi(data),
        onSuccess: onSuccess,
    };
    return useRegiserMutation(mutateObject)
}