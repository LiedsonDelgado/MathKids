/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigation/StackNavigator";


function App() {

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;