import type { User } from "../domain"
import type { AuthUserResponse } from "../infrastructure"

export const returnUserToken = (data: AuthUserResponse ) => {
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