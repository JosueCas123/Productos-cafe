import React, { createContext } from "react";
import { Usuario } from "../interfaces/appInterface";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checkin' | 'authenticated' | 'no-authenticated';
    singUp: () => void;
    signIn: () => void;
    logOut: () => void;
    removeError: () => void;
}


const AuthContext = createContext({}as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    return(
        <AuthContext.Provider value={{
            
        }} >
            {children}
        </AuthContext.Provider>
    )
}