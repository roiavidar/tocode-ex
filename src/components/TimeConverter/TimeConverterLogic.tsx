import ITimeConverterLogic from "./ITimeConverterLogic";

export class TimeConverterLogic implements ITimeConverterLogic {
    private ratios: number[] = [];
    private _time: number = 0;
    constructor(props: {
        ratios: number[]
    }) {
        this.ratios = props.ratios;
    }

    get timeRatios() {
        return this.ratios.map((ratio: number) => this._time / ratio);
    }

    set time(newTime: number) {
        this._time = newTime;
    }
}