import { tesloApi } from "../../config";
import { returnUserToken } from "../../helpers";
import { AuthUserResponse, loginReturn } from "../../infrastructure";

export const checkStatus = async (): Promise<loginReturn | null> => {
   try {
      const { data } = await tesloApi.get<AuthUserResponse>( '/auth/check-status' )

      return returnUserToken( data )
   } catch (error) {
      console.log( error );
      return null
   }
}