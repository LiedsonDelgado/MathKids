import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Text, Button, StyleSheet, View } from "react-native";
import { Operation, RootStackParamList } from '../types/types';
import { useNavigation } from '@react-navigation/native';



type Nav = NativeStackNavigationProp<RootStackParamList, 'GameHome'>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>()

  const goToGame = (operation: Operation) => {
    navigation.navigate('GamePlay', {operation})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MathKids</Text>

      <Button 
        title="Adição"
        onPress={() => goToGame('addition')}
      />
      <Button 
        title="Subtração"
        onPress={() => goToGame('subtraction')}
      />
      <Button 
        title="Multiplicação"
        onPress={() => goToGame('multiplication')}
      />
    </View>
  )

}

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#e8f5e9',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#1b5e20',
  },
})