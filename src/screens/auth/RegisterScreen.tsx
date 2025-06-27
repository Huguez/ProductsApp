import { Button, Input, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { Icon } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { NavHook } from '../../infrastructure'

export const RegisterScreen = () => {
   
   const navigation = useNavigation<NavHook>()
   const { height } = useWindowDimensions()

   return (
      <Layout style={{ flex: 1 }}>
         <ScrollView style={{ marginHorizontal: 40 }}>

            <Layout style={{ paddingTop: height * 0.2 }}>
               <Text category={ 'h1' }> Enter </Text>
               <Text category={ 'p2' }> Please, create account to continue </Text>
            </Layout>

            <Layout style={{ marginTop: 20 }}>
               <Input
                  placeholder='Username'
                  autoCapitalize={ 'none' }
                  accessoryLeft={ <Icon name={ 'person-outline' }  /> }
                  style={{ marginBottom: 10 }}
               />
               
               <Input
                  placeholder='E-mail'
                  keyboardType={ 'email-address' }
                  autoCapitalize={ 'none' }
                  accessoryLeft={ <Icon name={ 'mail-outline' }  /> }
                  style={{ marginBottom: 10 }}
               />
               <Input
                  placeholder='Password'
                  secureTextEntry
                  autoCapitalize={ 'none' }
                  accessoryLeft={ <Icon name={ 'lock-closed-outline' }  /> }
                  style={{ marginBottom: 10 }}
               />
            </Layout>

            <Layout style={{ marginTop: 20 }}>
               <Button
                  onPress={() => {}}
                  accessoryRight={ <Icon white={ true } name={ 'arrow-forward-outline' }  /> }  
               >
                  Enter
               </Button>
            </Layout>


            <Layout style={{ height: 50 }} />            

            <Layout style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
               <Text> Do you already account ?</Text>
               <Text status={ 'primary' } category={ 's1'} onPress={() => navigation.reset({
                  index: 0,
                  routes: [ { name: 'Login' } ]
               }) }  > Log-in </Text>
            </Layout>

         </ScrollView>
      </Layout>
   )
}
  
  
const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },
   text: {
      fontSize: 35,
      fontWeight: 'bold'
   }
})