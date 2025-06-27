import { useNavigation } from "@react-navigation/native"
import { NavHook } from "../infrastructure"
import { PropsWithChildren, useEffect } from "react"
import { useAuthStore } from "../store"

export const AuthProvider = ( { children }: PropsWithChildren ) => {
   const navigation = useNavigation<NavHook>()
   const { checkStatus, status } = useAuthStore()


   useEffect( () => {
      checkStatus()
   }, [] )

   useEffect( () => {
      if ( status !== 'checking' ) {
         switch ( status ) {
            case 'authenticated':
               navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }]
               })   
               break;
            case "unauthenticated":
               navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }]
               })   
               break; 
         }
      }
   }, [status] )



   return <>
      { children }
   </>
}
