import { useNavigation } from '@react-navigation/native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { NavHook } from '../infrastructure'

export const HomeScreen = () => {

   const navigation = useNavigation<NavHook>()

   return (
      <Layout style={ { flex: 1, } }>
         <Text> Hello world !! </Text>

         <Text>
            <Icon name='home-outline' style={ { height: 25, tintColor: 'black'} }  />
         </Text>

         <Button onPress={ () => navigation.navigate( "Login" )  }>
            <Text>
               Cerrar Session
            </Text>
         </Button>

      </Layout>
   )
}