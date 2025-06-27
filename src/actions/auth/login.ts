import { tesloApi } from "../../config";
import { User } from "../../domain";
import { AuthUserResponse } from "../../infrastructure";

interface Props {
   email:    string;
   password: string;
}

interface loginReturn {
   user: User;
   token: string;
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

const returnUserToken = (data: AuthUserResponse ) => {
   const user: User = {
      id: data.id,
      email: data.email,
      fullName: data.fullName,
      isActive: data.isActive,
      roles: [ ...data.roles ]
   }

   return {
      user, 
      token: data.token
   }
}