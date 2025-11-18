import { uploadImage } from "../actions";

export const prepareImages = async ( images: string[] ) => {

   const filesImages   = images.filter( image => image.includes("file://") );
   const currentImages = images.filter( image => !image.includes("file://") );

   if ( filesImages.length > 0 ) {
      const uploadedPromises = filesImages.map( img => uploadImage( img ) )
      const uploadedImages = await Promise.all( uploadedPromises )
      currentImages.push( ...uploadedImages )
   }


   return currentImages.map( img => img.split("/").pop() )
}