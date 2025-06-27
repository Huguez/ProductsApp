
export type Products = Product[];

export interface Product {
   id:          string;
   title:       string;
   price:       number;
   description: string;
   slug:        string;
   stock:       number;
   sizes:       Size[];
   gender:      string;
   tags:        string[];
   images:      string[];
   user?:        TesloUser;
}

export enum Size {
   L = "L",
   M = "M",
   S = "S",
   Xl = "XL",
   Xs = "XS",
   Xxl = "XXL",
}

interface TesloUser {
   id:       string;
   email:    string;
   fullName: string;
   isActive: boolean;
   roles:    string[];
}
