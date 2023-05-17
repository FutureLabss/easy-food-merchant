// import { IMutationArgs, IMutationHook } from "@/lib/interfaces/query";
import { IMutationArgs, IMutationHook } from "../../lib/interfaces/query";
import { useRegiserMutation } from "../helpers/registerMutation";
import { CreateMerchantProfileApi } from "../../pages/api/services/profile";
import { ISignUp, ISignUpForm } from "../../lib/interfaces/signup";
export function useAccountCreate ({onSuccess}: IMutationHook){
    const mutateObject: IMutationArgs<ISignUpForm, ISignUp>= {
        key:[''],
        callback:(data: ISignUpForm) => CreateMerchantProfileApi(data),
        onSuccess: onSuccess,
    };
    return useRegiserMutation(mutateObject)
}
84