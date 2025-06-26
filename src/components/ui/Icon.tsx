import { Icon as IconComponent, useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface Props {
   name:   string;
   color?: string;
   white?: boolean;
}


export const Icon = ( { name, color, white = false }: Props) => {

   const theme = useTheme()

   if ( white ) {
      color = theme['color-info-100']
   }else if( !color ) {
      color = theme["text-basic-color"]
   }else{
      color = theme[ color ] ?? theme["text-basic-color"];
   }


   return (
      <IconComponent name={ name } style={ [ styles.icon, { tintColor: color } ] }  />
   )
}

const styles = StyleSheet.create({
   icon: {
      width:  30,
      height: 30,
   }
})