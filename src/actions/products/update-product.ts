import { isAxiosError } from "axios";
import { tesloApi } from "../../config";
import type { Product } from "../../infrastructure";
import { prepareImages } from "../../helpers";

export const updateProduct = async ( product: Partial<Product> ) => {
   try {
      const { id, images, ...rest } = product

      const checkedImages = await prepareImages( images ?? [] )

      const resp = await tesloApi.patch( `/products/${ id }`, {
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

