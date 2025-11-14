import { isAxiosError } from "axios";
import type { Product } from "../../infrastructure";
import { tesloApi } from "../../config";
import { prepareImages } from "../../helpers";

export const createProduct = async ( product: Partial<Product> ) => {
   product.stock = isNaN( Number( product.stock ) ) ? 0 : Number( product.stock )
   product.price = isNaN( Number( product.price ) ) ? 0 : Number( product.price )

   try {
      const { id, images, ...rest } = product

      const checkedImages = prepareImages( images ?? [] )

      const resp = await tesloApi.post( `/products/`, {
         images: checkedImages,
         ...rest,
      } )

      return resp.data;
   } catch (error) {
      if ( isAxiosError( error ) ) {
         console.log( error.response?.data );
      }
      throw new Error("Error - updateProduct")
   }

}