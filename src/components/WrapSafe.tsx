import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';

interface props {
   children: React.JSX.Element | ReactNode;
}

export const WrapSafe = ( { children }: props ) => {

   const { left, right, top, bottom } =  useSafeAreaInsets()
   const edge = 15;

   const margins = { 
      marginTop: top, 
      marginBottom: bottom, 
      marginLeft:  left === 0 ? edge : left ,  
      marginRight: right  === 0 ? edge : right,
      flex: 1,
      backgroundColor: colors.background
   }


   return (
      <View style={ [{ flex: 1, backgroundColor: colors.background }] }>
         <View style={ margins  } >
            { children }
         </View>
      </View>
   )
}