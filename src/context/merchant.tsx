import * as React from "react"
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect,} from "react";
import Router, { useRouter } from "next/router";
import { IProfile } from "@/lib/interfaces/profile";
import { useMerchantProfile } from "@/hooks/query/profile";
import { IMerchant } from "@/lib/interfaces/profile";

const merchantcontext = createContext <IMerchant | undefined>(undefined)

export default function MerchantContext({children}: {children: ReactNode}){
    const {data} =useMerchantProfile()
   return(
    <>
    <merchantcontext.Provider value={data}>
      {children}
    </merchantcontext.Provider>
    </>
    
    )
}
const merchantProvider = () => useContext(merchantcontext)
export {merchantProvider}
