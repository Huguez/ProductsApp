import { create } from "zustand";
import { User } from "../../domain";
import { AuthStatus } from "../../infrastructure";
import * as AuthActions from "../../actions";

export interface AuthState {
   token?: string;
   user?: User;
   status: AuthStatus

   login: ( email: string, password: string ) => Promise<boolean>;
}

const Starter = create<AuthState>()

export const useAuthStore =  Starter( (set, get) => ({
   status: 'unauthenticated',
   login: async ( email: string, password: string ) => {
      
      set({ status: 'checking' })

      const data = await AuthActions.login( { email, password } )

      if (!data) {
         set({ user: undefined, token: undefined, status: 'unauthenticated' })
         return false
      }

      const { user, token } = data

      set({ user, token, status: 'authenticated' })

      return true
   }
}) )
