import ICatchTheTarget from "./ICatchTheTarget";

export default class CatchTheTargetLogic implements ICatchTheTarget {
    private bonusPoints: number = 0;
    private penaltyPoints: number = 0;
    private _boxes: number = 0;
    private calcTarget: () => number;
    private _target: number = -1;
    private _score: number = 0;

    constructor(props: {
        calcTarget: () => number,
        bonusPoints: number,
        penaltyPoints: number,
        boxes: number
    }) {

        this.bonusPoints = props.bonusPoints;
        this.penaltyPoints = props.penaltyPoints;
        this._boxes= props.boxes;
        this.calcTarget = props.calcTarget;
        this._target = this.calcTarget();
    }

    tryToHit(box: number) {
        if (box === this.target) {
            this._score += this.bonusPoints;
            this._target = this.calcTarget();
        } else {
            this._score += this.penaltyPoints;
        }
    }

    reset() {
        this._score = 0;
        this._target = this.calcTarget();
    }

    get target(): number {
        return this._target;
    }

    get score(): number {
        return this._score;
    }

    get boxes() : number {
        return this._boxes;
    }
}