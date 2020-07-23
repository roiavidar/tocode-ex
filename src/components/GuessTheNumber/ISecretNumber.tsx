export default interface ISecretNumber {
    lie: () => boolean;
    pickNumber: () => number;
    guess: (gussedNumber: number) => number
}