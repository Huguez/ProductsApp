import {StyleProp, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
 
export const IonIconsPack = {
  name: 'ionicons',
  icons: createIconsMap(),
};
 
function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    },
  );
}
 
const IconProvider = ( name: any ) => ({
  toReactElement: ( props : any) => IonIcons({name, ...props}),
});
 
function IonIcons({name, style }:{ name: any, style?: StyleProp<any> }) {
  
   const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);

  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}