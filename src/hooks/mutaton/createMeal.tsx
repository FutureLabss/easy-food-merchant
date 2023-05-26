import { IMutationArgs, IMutationHook } from "../../lib/interfaces/query";
import { useRegiserMutation } from "../helpers/registerMutation";
<<<<<<< HEAD
import { createMealApi } from "../../pages/api/services/createMeal";
import { IcreateMeal, ICreateMealModal } from "../../lib/interfaces/meal";
// import { ISignUp, ISignUpForm } from "../../lib/interfaces/signup";
=======
import { createMealApi } from "../../pages/api/services/meal";
import { IcreateMeal, IcreateMealModal } from "../../lib/interfaces/meal";
// import { ISignUp, ISignUpForm } from "../../lib/interfaces/signup";~
>>>>>>> a6b4e40cac6f334a9faa210b8ba507fbaaeee0c5
export function useMealCreate ({onSuccess}: IMutationHook){
    const mutateObject: IMutationArgs<IcreateMeal, ICreateMealModal>= {
        key:['meal'],
        callback:(data: ICreateMealModal) => createMealApi(data),
        onSuccess: onSuccess,
    };
    return useRegiserMutation(mutateObject)
}