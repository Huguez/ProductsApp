import { useNavigation } from '@react-navigation/native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import { NavHook } from '../infrastructure'
import { useAuthStore } from '../store'
import { getProducts } from '../actions'


export const HomeScreen = () => {
   const [ isPosting, setIsPosting ] = useState<boolean>( false )
   const navigation = useNavigation<NavHook>()
   const { logout } = useAuthStore()

   getProducts()

   const onClick = async () => {
      setIsPosting( true )
      await logout()
      
      navigation.reset({
         index: 0,
         routes: [ { name: 'Login' } ]
      })
         
      setIsPosting( false )
   }

   return (
      <Layout style={ { flex: 1, } }>
         <Text> Hello world !! </Text>

         <Text>
            <Icon name='home-outline' style={ { height: 25, tintColor: 'black'} }  />
         </Text>

         <Button onPress={ onClick } disabled={ isPosting }>
            <Text>
               Cerrar Session
            </Text>
         </Button>

      </Layout>
   )
}