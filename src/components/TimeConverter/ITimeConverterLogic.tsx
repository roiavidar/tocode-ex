export default interface ITimeConverterLogic {
    readonly times: number[];
    readonly ratios: number[];
    setTimeInSeconds: (newTime: number, ratio: number) => void;
}