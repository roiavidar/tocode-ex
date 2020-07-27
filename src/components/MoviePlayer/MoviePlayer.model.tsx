export default interface IMoviePlayer {
    createPlayer: (elementId: string, movieId: number) => void;
    loadVideo: (movieId: number) => void;
}