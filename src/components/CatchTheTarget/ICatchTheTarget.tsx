export default interface ICatchTheTarget {
    tryToHit: (box: number) => void;
    reset: () => void;
    readonly target: number;
    readonly score: number;
    readonly boxes: number;
}