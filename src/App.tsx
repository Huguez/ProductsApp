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

  return (
    <>
      <IconRegistry icons={IonIconsPack} />
      <ApplicationProvider {...eva} theme={ theme }>
        <SafeAreaProvider>
          <WrapSafe>
            <NavigationContainer>
              <StackNavigation />
            </NavigationContainer>
          </WrapSafe>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;