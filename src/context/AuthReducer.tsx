import { Usuario } from "../interfaces/appInterface";

export interface AuthState {
    status: 'checkin' | 'authenticated' | 'no-authenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
 
}

type AuthAction = 
    | {type: 'sinUp', payload:{token:string , user:Usuario} }
    | {type: 'addError', payload:string}
    | {type: 'removeError'}
    | {type:'notAuthenticaded'}
    | {type:'logout'}

export const authReducer = (state: AuthState, action:AuthAction):AuthState =>{

    switch (action.type) {
        case 'addError':
            return{
                ...state,
                user:null,
                status:'no-authenticated',
                token:null,
                errorMessage: action.payload
            }
        case 'removeError':
            return{
                ...state,
                errorMessage: '',
            }
        case 'sinUp':
            return{
                ...state,
                status:'authenticated',
                errorMessage:'',
                token:action.payload.token,
                user:action.payload.user
            }  

        case 'logout':
        case 'notAuthenticaded':
            return{
                ...state,
                status:'no-authenticated',
                token:null,
                user:null
            }    
            
    
        default:
            return state
    }
}