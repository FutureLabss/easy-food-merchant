import * as React from "react"
import axios from "axios";
import { ReactNode, createContext, useContext,} from "react";
import Router from "next/router";
import { setToken } from "../services/config";
// import login from "@/pages/login";

// import { types } from "util";
// import { createContext } from "vm";

interface AuthContextType {
    auth: any;
    login:(data: any) => Promise<any>;
    // signUp:(data: any) => Promise<any>;
    // Logout: () => void;
}

const usecontext = createContext<AuthContextType>({
        auth: {},
        login: async(data: any) => {},
        // signUp: async(data: any) => {},
        // Logout: () => {},
});

export default function Context({children}: {children: ReactNode}){
    const [auth, setAuth] = React.useState({})
    const login = async (input: string) => {
        return await axios
          .post("/auth/signin", input)
          .then((res) => {
            // router.push('/home')
            console.log(input)
            return res;
      })
      .catch((e) => {
        console.log(e)
      });

      };
      const value = {
        auth,
        login,
        // signUp,
        // Logout,
      };
   return(
    <>
    <usecontext.Provider value={value}>
      {children}
    </usecontext.Provider>
    </>
    
    )
}
const contextProvider = () => useContext(usecontext)
export {contextProvider}
