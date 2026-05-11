export type RootStackParamList = {
  GameHome: undefined,
  GamePlay: {operation: Operation}
  GameOver: {score: string}
}

export  type Operation = 'addition' | 'subtraction' | 'multiplication'

export type GamePhase = 'playing' | 'correct' | 'incorrect' | 'timeout'