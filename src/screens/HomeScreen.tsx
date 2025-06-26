// import { Text, View } from 'react-native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React from 'react'

export const HomeScreen = () => {
   return (
      <Layout style={ { flex: 1, } }>
         <Text> Hello world !! </Text>

         <Text>
            <Icon name='home-outline' style={ { height: 25, tintColor: 'black'} }  />
         </Text>

         <Button>
            <Text>
               Cerrar Session
            </Text>
         </Button>

      </Layout>
   )
}