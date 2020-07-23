import tinycolor from 'tinycolor2';
import _ from 'lodash';

export default class ColorShadesGenerator {
    constructor() {

    }

    getShades(color: string, numberOfShades: number) {
        const shades: string[] = [];
        const selectedColor = tinycolor(color);
        _.range(numberOfShades).map((item: number, index: number) => {
            selectedColor.setAlpha((index + 1) / numberOfShades);
            shades.push(selectedColor.toRgbString());
        });

        return shades;
    }
}