import React, { useState } from 'react'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { Alert, ScrollView, useWindowDimensions } from 'react-native'
import { Icon } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { NavHook } from '../../infrastructure'
import { useAuthStore } from '../../store'

const initValue = {
  email: "",
  password: ""
}

export const LoginScreen = () => {
   const navigation = useNavigation<NavHook>()
   const [ form, setForm ] = useState<{email: string, password: string }>( initValue )
   const [ isPosting, setIsPosting ] = useState<boolean>( false )
   const { height } = useWindowDimensions()

   const { login } = useAuthStore()

   const handleSubmit = async () => {
      const { email, password } = form

      if ( email === "" || password === "" ) {
         return;
      }
      setIsPosting( true )
      const resp = await login( email, password )
      
      if ( resp ) {
         navigation.reset({
            index: 0,
            routes: [ { name: 'Home' } ]
         })
         return
      }

      Alert.alert( "Error", "username or password wrong!!" )
      setIsPosting( false )
   }

   return (
      <Layout style={{ flex: 1 }}>
         <ScrollView style={{ marginHorizontal: 40 }}>

            <Layout style={{ paddingTop: height * 0.2 }}>
               <Text category={ 'h1' }> Enter </Text>
               <Text category={ 'p2' }> Please, Entrer to Continue </Text>
            </Layout>

            <Layout style={{ marginTop: 20 }}>
               <Input
                  placeholder='E-mail'
                  keyboardType={ 'email-address' }
                  autoCapitalize={ 'none' }
                  accessoryLeft={ <Icon name={ 'mail-outline' }  /> }
                  style={{ marginBottom: 10 }}
                  onChangeText={ ( value: string ) => setForm( prev => ({ ...prev, email: value }) ) }
                  value={ form.email }
               />
               <Input
                  placeholder='Password'
                  secureTextEntry
                  autoCapitalize={ 'none' }
                  accessoryLeft={ <Icon name={ 'lock-closed-outline' }  /> }
                  style={{ marginBottom: 10 }}
                  onChangeText={ ( value: string ) => setForm( prev => ({ ...prev, password: value }) ) }
                  value={ form.password }
               />
            </Layout>

            <Layout style={{ marginTop: 20 }}>
               <Button
                  disabled={ isPosting }
                  onPress={ () => handleSubmit() }
                  accessoryRight={ <Icon white={ true } name={ 'arrow-forward-outline' }  /> }  
               >
                  Enter
               </Button>
            </Layout>


            <Layout style={{ height: 50 }} />            

            <Layout style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
               <Text> Do you haven't  account ?</Text>
               <Text status={ 'primary' } category={ 's1'} onPress={() => navigation.reset({
                  index: 0,
                  routes: [ { name: 'Register' } ]
               })} > Create account </Text>
            </Layout>

         </ScrollView>
      </Layout>
   )
}