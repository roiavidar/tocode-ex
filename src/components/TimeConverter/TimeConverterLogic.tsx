import ITimeConverterLogic from "./ITimeConverterLogic";

export class TimeConverterLogic implements ITimeConverterLogic {
    private _ratios: number[] = [];
    private _time: number = 0;
    constructor(props: {
        ratios: number[]
    }) {
        this._ratios = props.ratios;
    }

    get times() {
        return this.ratios.map((ratio: number) => this._time / ratio);
    }

    get ratios() {
        return this._ratios;
    }

    setTimeInSeconds(newTime: number, ratio: number) {
        this._time = newTime * ratio;
    }
}