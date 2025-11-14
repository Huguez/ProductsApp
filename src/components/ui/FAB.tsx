import { Button } from "@ui-kitten/components"
import { Icon } from "./Icon"
import { StyleProp, ViewStyle } from "react-native"

interface Props {
   style?: StyleProp<ViewStyle>;
   iconName: string
   onPress: () => void;
}

export const FAB = ( { style, iconName, onPress }: Props ) => {
   
   return (
      <Button 
         style={[ style, {
            shadowColor: 'black',
            shadowOffset: {
               width: 0,
               height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 3,
            borderRadius: 13
         }]}
         accessoryLeft={ <Icon name={ iconName } white={ true } /> }
         onPress={ onPress }
      />
   )
}
