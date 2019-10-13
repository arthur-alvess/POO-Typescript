import { Vagão } from './vagão';
import { Locomotiva } from './locomotiva';
import { Ferrovia } from './ferrovia';

export class Trem {
    mover (vel: number, via: Ferrovia) {

    }
}

let trem = new Trem();
let andar = trem.mover(10, 1);

console.log(andar);