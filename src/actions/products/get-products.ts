import { ENDPOINT, tesloApi } from "../../config";
import type { Product, Products } from "../../infrastructure";

export const getProducts = async ( page: number = 0, limit: number = 20): Promise< Products > => {
   try {
      const { data } = await tesloApi.get<Products>( '/products', {
         params: { limit, offset: page*10 }
      } )
      
      console.log( data );

      return data ? [
         ...data.map( ( p: Product ) => (({ ...p, images: p.images.map( (i: string) => `${ ENDPOINT }/files/product/${ i }` )})) )
      ] : []
   } catch (error) {
      console.log( error );
      throw new Error(" Error Get-Products")
   }
}