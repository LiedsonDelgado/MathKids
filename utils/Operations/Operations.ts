export type Timer = {
    minutes: number;
    seconds: number;
    isRunning: boolean;
}

export type Player = {
    score: number;
    lives: number;
}

export type Operator = "+" | "-" | "*" | "/";

export type KidsGameState = {
    display: string;
    firstValue: number;
    secondValue: number;
    operator: Operator | null;

    correctAnswer: number;
    userAnswer?: number;

    message: string;

    kidPlayer: Player;
    timeLeft: Timer;
}

export const initialState: KidsGameState = {
    display: "",
    firstValue: 0,
    secondValue: 0,
    operator: null,

    correctAnswer: 0,
    userAnswer: undefined,

    message: "",

    kidPlayer: {
        score: 0,
        lives: 3,
    },

    timeLeft: {
        minutes: 1,
        seconds: 0,
        isRunning: false,
    }
}

export function setTimerValues(
    timerObj: Timer,
    min: number,
    sec: number
): Timer {

    return {
        ...timerObj,
        minutes: min,
        seconds: sec
    };
}

export function runTimer(timerObj: Timer): Timer {

    if (!timerObj.isRunning) {
        return timerObj;
    }

    let minutes = timerObj.minutes;
    let seconds = timerObj.seconds;

    if (seconds > 0) {
        seconds--;
    }
    else if (minutes > 0) {
        minutes--;
        seconds = 59;
    }
    else {
        return {
            ...timerObj,
            isRunning: false
        };
    }

    return {
        ...timerObj,
        minutes,
        seconds
    };
}

export function addScore(
    playerObj: Player,
    score: number
): Player {

    return {
        ...playerObj,
        score: playerObj.score + score
    };
}

export function subractScore(
    playerObj: Player,
    score: number
): Player {

    const newScore = playerObj.score - score;

    return {
        ...playerObj,
        score: newScore < 0 ? 0 : newScore
    };
}

export function restoreLives(
    playerObj: Player,
    hp: number
): Player {

    return {
        ...playerObj,
        lives: playerObj.lives + hp
    };
}

export function subractLives(
    playerObj: Player,
    hp: number
): Player {

    const newLives = playerObj.lives - hp;

    return {
        ...playerObj,
        lives: newLives < 0 ? 0 : newLives
    };
}

function generateOperator(): Operator {

    const operators: Operator[] = ["+", "-", "*"];

    const randomIndex = Math.floor(Math.random() * operators.length);

    return operators[randomIndex];
}

function calculateAnswer(
    firstValue: number,
    secondValue: number,
    operator: Operator
): number {

    switch (operator) {

        case "+":
            return firstValue + secondValue;

        case "-":
            return firstValue - secondValue;

        case "*":
            return firstValue * secondValue;

        case "/":
            return firstValue / secondValue;

        default:
            return 0;
    }
}

export function generateRandomValues(): KidsGameState {

    const operator = generateOperator();

    let firstValue = Math.floor(Math.random() * 100);
    let secondValue = Math.floor(Math.random() * 100);

    // evita resultado negativo
    if (operator === "-" && secondValue > firstValue) {
        [firstValue, secondValue] = [secondValue, firstValue];
    }

    // evita multiplicacoes muito grandes
    if (operator === "*") {
        firstValue = Math.floor(Math.random() * 20);
        secondValue = Math.floor(Math.random() * 20);
    }

    const correctAnswer = calculateAnswer(
        firstValue,
        secondValue,
        operator
    );

    return {
        ...initialState,

        firstValue,
        secondValue,
        operator,

        correctAnswer,

        display: `${firstValue} ${operator} ${secondValue}`,
    };
}

export function validateAswer(
    gameState: KidsGameState,
    userAnswer: number
): KidsGameState {

    const isCorrect = userAnswer === gameState.correctAnswer;

    if (isCorrect) {

        return {
            ...gameState,

            userAnswer,

            message: "Parabéns, a sua resposta está correta!",

            kidPlayer: addScore(gameState.kidPlayer, 10)
        };
    }

    return {
        ...gameState,

        userAnswer,

        message: "A sua resposta está incorreta!",

        kidPlayer: subractLives(gameState.kidPlayer, 1)
    };
}

export function startGame(
    state: KidsGameState
): KidsGameState {

    return {
        ...state,

        timeLeft: {
            ...state.timeLeft,
            isRunning: true
        }
    };
}

export function stopGame(
    state: KidsGameState
): KidsGameState {

    return {
        ...state,

        timeLeft: {
            ...state.timeLeft,
            isRunning: false
        }
    };
}

export function resetGame(): KidsGameState {

    return {
        ...initialState,
        kidPlayer: {
            score: 0,
            lives: 3
        }
    };
}

export function isGameOver(
    state: KidsGameState
): boolean {

    return (
        state.kidPlayer.lives <= 0 ||
        (
            state.timeLeft.minutes === 0 &&
            state.timeLeft.seconds === 0
        )
    );
}
