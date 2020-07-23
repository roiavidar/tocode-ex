export interface GameState {
    board: IGameCell[][];
    currentPlayer: number;
    scores: Score[];
    players: IPlayers;    
    winner: number;
}

export interface IPlayers {
    [playerId: number]: string
}

export interface ITicTacToeService {
    tryToMark: (indexX: number, indexY: number) => GameState[];
    readonly GameState: GameState;
}

export interface IGameCell {
    player?: number,
    state?: number
}

export interface Score {
    score: number;
    player: number
}