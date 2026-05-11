import { Text, View, Button, StyleSheet } from "react-native";


export function GameOverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt}>Parabéns</Text>
        <Text style={styles.txt}>A sua pontuação final: ...</Text>
      </View>

      <View style={styles.btns}>
        <Button title="Jogar"/>
        <Button title="Sair"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 16,
    gap: 60
  },
  header: {
    alignItems: 'center',
    gap: 30
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  txt: {
    fontSize: 22,
    fontWeight: '700'
  }
})