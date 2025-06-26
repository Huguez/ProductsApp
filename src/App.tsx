import * as eva from '@eva-design/eva';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { IonIconsPack, WrapSafe } from "./components";
import { StackNavigation } from "./navigation";
import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { useColorScheme } from 'react-native';



function App() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? eva.dark : eva.light

  const background = ( colorScheme === 'dark' ) ?  theme["color-basic-800"] : theme["color-basic-100"]

  return (
    <>
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
              <StackNavigation />
            </NavigationContainer>
          </WrapSafe>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;