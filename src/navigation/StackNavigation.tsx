
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParam, SettingsNavigation } from '../types';
import { enableScreens } from 'react-native-screens';
import { HomeScreen, LoadingScreen, LoginScreen, RegisterScreen } from '../screens';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParam>();

export const StackNavigation = () => {

   const settings: SettingsNavigation = {
      headerShown: false,
   }

   return (
      <Stack.Navigator initialRouteName='Login' screenOptions={ settings }>
         <Stack.Screen name='Home'     component={ HomeScreen } />
         <Stack.Screen name='Loading'  component={ LoadingScreen } />
         <Stack.Screen name='Login'    component={ LoginScreen } />
         <Stack.Screen name='Register' component={ RegisterScreen } />
      </Stack.Navigator>
   
   )
}