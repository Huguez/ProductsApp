import { Card, Text } from "@ui-kitten/components";
import type { Product } from "../../infrastructure"
import { Image, useWindowDimensions } from "react-native";
import { FadeInImage } from "../ui/FadeInImage";

interface Props {
   product : Product;
}

export const ProductCard = ( { product }: Props ) => {

   const { width } = useWindowDimensions()

   return (
      <Card
         style={{ flex: 1, backgroundColor: '#f9f9f9', margin: 3 }}
      >
         {
            product.images.length === 0 ? 
            <Image
               source={{ uri: require("../../assets/no-product-image.png") }}
               style={{ width: width/3, height: width/3 }}
            /> :
            <FadeInImage 
               uri={ product.images[0] }
               style={{ width: width/3, height: width/3 }}
            />
         }
         <Text numberOfLines={2} style={{ textAlign: 'center', width: '100%' }} >{ product.title }</Text>

      </Card>
   )
}
