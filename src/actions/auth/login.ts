import { tesloApi } from "../../config";
import { returnUserToken } from "../../helpers";
import { AuthUserResponse, loginReturn } from "../../infrastructure";

interface Props {
   email:    string;
   password: string;
}

export const login = async ( { email, password }: Props ): Promise<loginReturn | null> => {
   try {
      const { data } = await tesloApi.post<AuthUserResponse>( '/auth/login', {
         email,
         password,
      } )

      return returnUserToken( data )
   } catch (error) {
      console.log( error );
      return null
   }
}
