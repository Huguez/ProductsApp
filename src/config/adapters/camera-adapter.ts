import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export class CameraAdapter {

   static async takePicture(): Promise<string[]> {
      try {
         
         const response = await launchCamera({
            mediaType: 'photo',
            quality: 0.7,
            cameraType: 'back'
         })
         
         if ( !response.assets || !response.assets[0].uri ){
            return []
         }
         
         return [ response.assets[0].uri ?? "" ]
      } catch (error) {
         console.log( error );
         throw new Error("CameraAdapter - takePicture");
      }
   }

   static async getPictureFromLibrary(): Promise<string[]> {
      try {
         const response = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.7,
            selectionLimit: 10,
         })
         
         if ( !response.assets ){
            return []
         }
         
         return [ ...response.assets.map( asset => asset.uri ).filter( assets => assets !== undefined ) ]
      } catch (error) {
         console.log( error );
         throw new Error("CameraAdapter - getPictureFromLibrary");
      }
   }
}