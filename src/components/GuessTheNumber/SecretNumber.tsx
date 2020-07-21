export class SecretNumber {
    public lie: () => boolean;
    public pickNumber: () => number;
    private secretNumber: number = -1;

    constructor(props: {
        pickNumber: () => number,
        lie: () => boolean
    }) {
        this.lie = props.lie;

        this.pickNumber = props.pickNumber;

        this.secretNumber = props.pickNumber();
        console.log(this.secretNumber);
    }

    guess(gussedNumber: number) {
        let result = this.secretNumber - gussedNumber;
        return this.lie() ? result*-1 : result;
    }
}