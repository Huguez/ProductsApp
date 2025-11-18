import { tesloApi } from "../../config";

export const uploadImage = async ( image: string ) => {
   try {
      
      const formData = new FormData()
      
      formData.append( 'file', {
         uri: image,
         type: 'image/jpeg',
         name: image.split( "/" ).pop(),
      } )
      
      const { data } = await tesloApi.post<{ image: string }>( '/files/product', formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         }
      } );

      return data.image
   } catch (error) {
      console.log( error );
      throw new Error("Error - uploadImage")
   }
}