import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { WrapSafe } from "./components";
import { StackNavigation } from "./navigation";

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <WrapSafe>
          <StackNavigation />
        </WrapSafe>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;