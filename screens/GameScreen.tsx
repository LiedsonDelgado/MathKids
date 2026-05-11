import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../types/types"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useState } from "react"
import { Text, View } from "react-native"

type Route = RouteProp<RootStackParamList, 'GamePlay'>
type Nav = NativeStackNavigationProp<RootStackParamList, 'GamePlay'>

export function GameScreen() {
  const {params: {operation}}  = useRoute<Route>()
  const navigation = useNavigation<Nav>()

  //states
  const [lives, seteLives] = useState(3)
  const [score,  setScore] = useState(0)
  const [answer, setAnswer] = useState('')

  return (
    <View>
      <View>
        <Text>Pontos: {score}</Text>
        <Text>Vidas: {lives}</Text>
        <Text>Tempo: {}</Text>
      </View>
      
    </View>
  )
}