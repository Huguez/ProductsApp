import { ENDPOINT, tesloApi } from "../../config";
import type { Product } from "../../infrastructure";

const emptyProduct: Product = {
   id: "",
   title: "",
   price: 0,
   description: "",
   slug: "",
   stock: 0,
   sizes: [],
   gender: "",
   tags: [],
   images: []
}

export const getProductById = async ( id: string ): Promise<Product> => {
   if( id === 'new' ) return emptyProduct 

   try {
      const { data } = await tesloApi.get(`products/${ id }`)
      
      return {...data, images: data.images.map( (i: string) => `${ ENDPOINT }/files/product/${ i }` ) }
   } catch (error) {
      console.log( error );
      throw new Error("Error - GetProductById")
   }
}