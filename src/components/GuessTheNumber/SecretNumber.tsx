import ISecretNumber from "./ISecretNumber";

export class SecretNumber implements ISecretNumber {
    public lie: () => boolean;
    public pickNumber: () => number;
    private secretNumber: number = -1;

    constructor(props: {
        pickNumber: () => number,
        lie: () => boolean
    }) {
        const { pickNumber, lie } = props;
        this.lie = lie;
        this.pickNumber = pickNumber;
        this.secretNumber = pickNumber();
        console.log(this.secretNumber);
    }

    guess(gussedNumber: number) {
        let result = gussedNumber - this.secretNumber;
        return this.lie() ? result*-1 : result;
    }
}