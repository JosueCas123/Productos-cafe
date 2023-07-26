import React, { createContext, useEffect, useReducer } from "react";
import { LoginResponse, Usuario, LoginData, RegisterData } from "../interfaces/appInterface";
import { AuthState, authReducer } from "./authReducer";
import cafeApi from "../api/cafeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checkin' | 'authenticated' | 'no-authenticated';
    signIn: (loginData: LoginData) => void;
    singUp: (RegisterData: RegisterData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checkin',
    token: null,
    user: null,
    errorMessage:''
}

export const AuthContext = createContext({}as AuthContextProps);


export const AuthProvider = ({children}:any) => {

    useEffect(() => {
      checkToken()
    }, [])
    
    const checkToken =async () =>{
        const token = await AsyncStorage.getItem('token')

        //no autenticado
        if(!token) return dispatch({type:'notAuthenticaded'})
        //si esta autenticado
        const resp = await cafeApi.get('/auth')
        if (resp.status !== 200) {
            return dispatch({type:'notAuthenticaded'})
        }
        await AsyncStorage.setItem('token', resp.data.token)
        dispatch({
            type: 'sinUp',
            payload:{
                token:resp.data.token,
                user: resp.data.usuario
            }
        })
    }

    const [state, dispatch] = useReducer(authReducer, authInicialState)

    const signIn = async ({correo, password}:LoginData) => {
        try {
            const {data} = await cafeApi.post<LoginResponse>('/auth/login',{correo, password});
            console.log(data)
            dispatch({
                type: 'sinUp',
                payload:{
                    token:data.token,
                    user:data.usuario
                }
            })
            await AsyncStorage.setItem('token', data.token)
        } catch (error:any) {
            console.log(error.response.data);
            dispatch({
                type:'addError',
                payload: error.response.data.msg || 'Informacion incorrecta',
            })
        }
    };
    
    const logOut = async() => {
        // remover del localstorage
        await AsyncStorage.removeItem('token')
        dispatch({type:'logout'})
    };
    const singUp = async ({correo, password, nombre}:RegisterData) => {
        try {
            const resp = await cafeApi.post<LoginResponse>('/usuarios',{correo, password,nombre});
            dispatch({type:'sinUp',
                payload:{
                    token:resp.data.token,
                    user: resp.data.usuario
                }
        })
        await AsyncStorage.setItem('token', resp.data.token)
        } catch (error) {
            console.log(error.response.data.msg)
            dispatch({type:'addError', payload:error.response.data.msg || 'Informacion incorreecta'})
        }
    };


    const removeError = () => {
        dispatch({
            type:'removeError'
        })
    };

    return(
        <AuthContext.Provider value={{
            ...state,
            signIn,
            singUp,
            logOut,
            removeError
        }} >
            {children}
        </AuthContext.Provider>
    )
}