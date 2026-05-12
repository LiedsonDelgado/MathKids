type Timer = {
    minutes: number;
    seconds: number;
    isRunning: boolean;
}

type Player = {
    score: number;
    lives: number;
}

export type KidsGameState = {
    display: string,
    firstValue: number;
    secondValue: number;
    operator: string|null,

    kidPlayer: Player,
    timeLeft: Timer,
}

export const initialState: KidsGameState = {
    display: "",
    firstValue: 0,
    secondValue: 0,
    operator: null,

    kidPlayer: {
        score: 0,
        lives: 0,
    },
    timeLeft: {
        minutes: 0,
        seconds: 0,
        isRunning: false
    }
}

export function setTimerValues(timerObj: Timer,min: number,sec: number): Timer{ //atribui valores
    timerObj.minutes = min;
    timerObj.seconds = sec;

    return timerObj;
}

export function runTimer(timerObj: Timer,isRunning: boolean): Timer{ //metodo para simular a contagem do timeLeft
    //(...)
}

export function addScore(playerObj: Player,score: number): Player{
    //(...)
}

export function subractScore(playerObj: Player,score: number): Player{
    //(...)
}

export function restoreLives(playerObj: Player,hp: number): Player{
    //(...)
}

export function subractLives(playerObj: Player,hp: number): Player{
    //(...)
}

export function generateRandomValues(): KidsGameState{ //gera valores aleatorios para firstValue e secondValue (ex: firstValue "+" ou "-" ou "*" ou "/" secondValue)
    //(...)
}

export function validateAswer(): KidsGameState{
    //(...)
}