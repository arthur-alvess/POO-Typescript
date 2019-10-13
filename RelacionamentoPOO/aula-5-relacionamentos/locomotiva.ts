import { Farol } from './farol';

export class Locomotiva {
    farol_esq: Farol;
    farol_dir: Farol;

    constructor(fe: Farol, fd: Farol) {
        this.farol_esq = fe;
        this.farol_dir = fd;
    }

}

