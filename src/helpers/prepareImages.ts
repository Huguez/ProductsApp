
export const prepareImages = ( images: string[] ) => {
   return images.map( img => img.split("/").pop() )
}