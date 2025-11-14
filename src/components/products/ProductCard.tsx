import { Card, Text } from "@ui-kitten/components";
import type { NavHook, Product } from "../../infrastructure"
import { Image, useWindowDimensions } from "react-native";
import { FadeInImage } from "../ui/FadeInImage";
import { useNavigation } from "@react-navigation/native";

interface Props {
   product : Product;
}

export const ProductCard = ( { product }: Props ) => {

   const { width } = useWindowDimensions()

   const navigation = useNavigation<NavHook>()

   return (
      <Card
         onPress={ () => navigation.navigate( 'Product', { productId: product.id } ) }
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
