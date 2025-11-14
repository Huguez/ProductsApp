import {createNativeStackNavigator, } from '@react-navigation/native-stack';
import { RootStackParam, SettingsNavigation } from '../infrastructure';
import { enableScreens } from 'react-native-screens';
import { HomeScreen, LoadingScreen, LoginScreen, ProductScreen, RegisterScreen } from '../screens';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParam>();

export const StackNavigation = () => {

   const settings: SettingsNavigation = {
      headerShown: false,   
   }

   return (
      <Stack.Navigator initialRouteName='Loading' screenOptions={ settings }>
         <Stack.Screen options={{ animation: 'fade' }} name='Home'     component={ HomeScreen } />
         <Stack.Screen options={{ animation: 'fade'  }} name='Login'    component={ LoginScreen } />
         <Stack.Screen options={{ animation: 'fade'  }} name='Register' component={ RegisterScreen } />
         <Stack.Screen options={{ animation: 'fade'  }} name='Product' component={ ProductScreen } />
         
         <Stack.Screen name='Loading'  component={ LoadingScreen } />
      </Stack.Navigator>
   )
}