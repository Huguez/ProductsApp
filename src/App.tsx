import * as eva from '@eva-design/eva';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { IonIconsPack, WrapSafe } from "./components";
import { StackNavigation } from "./navigation";
import { AuthProvider } from './providers';


const queryClient = new QueryClient()

function App() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? eva.dark : eva.light

  const background = ( colorScheme === 'dark' ) ?  theme["color-basic-800"] : theme["color-basic-100"]

  return (
    <QueryClientProvider client={ queryClient } >
      <IconRegistry icons={IonIconsPack} />
      <ApplicationProvider {...eva} theme={ theme }>
        <SafeAreaProvider>
          <WrapSafe>
            <NavigationContainer theme={ {
              dark: colorScheme === 'dark',
              colors: {
                primary:      theme["color-primary-500"],
                background:   background,
                card:         theme["color-basic-100"],
                text:         theme["text-basic-color"],
                border:       theme["color-basic-800"],
                notification: theme["color-primary-500"],
              },
              fonts: {
                regular: {
                  fontFamily: 'MyCustomFont-Regular',
                  fontWeight: '300'
                },
                medium: {
                  fontFamily: 'MyCustomFont-Regular',
                  fontWeight: '500'
                },
                bold: {
                  fontFamily: 'MyCustomFont-Regular',
                  fontWeight: '700'
                },
                heavy: {
                  fontFamily: 'MyCustomFont-Regular',
                  fontWeight: '900'
                }
              },
            } }>
              <AuthProvider>
                <StackNavigation />
              </AuthProvider>
            </NavigationContainer>
          </WrapSafe>
        </SafeAreaProvider>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;