import type { User } from "../../domain";

export interface AuthUserResponse {
   id:       string;
   email:    string;
   fullName: string;
   isActive: boolean;
   roles:    string[];
   token:    string;
}

export interface loginReturn {
   user: User;
   token: string;
}