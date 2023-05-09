import * as React from "react"
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect,} from "react";
// import Router from "next/router";
import { setToken } from "../pages/api/services/config";
import Router, { useRouter } from "next/router";
// import login from "@/pages/login";

// import { types } from "util";
// import { createContext } from "vm";

interface AuthContextType {
    auth: any;
    login:(data: any) => Promise<any>;
    signUp:(data: any) => Promise<any>;
    // Logout: () => void;
}

const usecontext = createContext<AuthContextType>({
        auth: {},
        login: async(data: any) => {},
        signUp: async(data: any) => {},
        // Logout: () => {},
});

export default function Context({children}: {children: ReactNode}){
    const [auth, setAuth] = React.useState({})
    const router = useRouter();

    useEffect(() => {
      let details = JSON.parse(localStorage.getItem("getToken") || "{}");
      setToken(details?.token);
      setAuth(details);
    }, []);

    const login = async (input: string) => {
        const Promise =  await axios
          .post("/auth/signin", input)
          .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            router.push('/')
            console.log(input)
            setAuth({ ...res.data });
            setToken(res.data.token);
            return res;
      })
      .catch((e) => {
        const message = e.response?.data?.message || "Network Error";
        throw new Error(message);
      });

    return Promise

      };

      const signUp = async (input: string) =>{
        console.log(input)
        return await axios
        .post("/auth/signup", input)
        .then((res) => {
          router.push('/login')
          return res;
        })
        .catch((e) => {
          console.log(e)
        });

      }
      const value = {
        auth,
        login,
        signUp,
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
