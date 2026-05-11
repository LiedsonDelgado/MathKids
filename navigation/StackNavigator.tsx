import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/types"
import { GameOverScreen, GameScreen, HomeScreen } from "../screens"


const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="GameHome" component={HomeScreen}/>
      <Stack.Screen name="GamePlay" component={GameScreen}/>
      <Stack.Screen name="GameOver" component={GameOverScreen}/>
    </Stack.Navigator>
  )

}