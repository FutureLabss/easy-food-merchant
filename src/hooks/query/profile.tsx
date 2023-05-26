import { IQueryArgs } from "@/lib/interfaces/query";
import { useMerchantQuery } from "../helpers/query";
import { IProfile } from "@/lib/interfaces/profile";
import { getMerchantProfileApi } from "@/pages/api/services/profile";
import { IMerchant } from "@/lib/interfaces/profile";


export function useMerchantProfile() {
    const profileObject: IQueryArgs<string, IMerchant> = {
      key: ["merchant"],
      callback:getMerchantProfileApi,
    };
    return useMerchantQuery(profileObject);
  }
  