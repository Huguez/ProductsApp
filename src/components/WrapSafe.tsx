import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';
import { Layout } from '@ui-kitten/components';

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
   }


   return (
      <Layout style={ [{ flex: 1 }] }>
         <Layout style={ margins  } >
            { children }
         </Layout>
      </Layout>
   )
}