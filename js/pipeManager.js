import {
    backgroundHeight,
    groundHeight,
    gamePace,
    pipeHeight,
    pipeWidth
} from './game';
import Pipe from './pipe';

export default class PipeManager {
    constructor(ctx, color) {
        this.ctx = ctx;
        this.pipes = new Array();
        this.color = color;

        this.createStartingPipes();
    }

    show() {
        this.pipes.forEach(pipe => {
            pipe.show();

            pipe.x -= gamePace;
        });

        this.checkPipes();
    }

    createPipe() {
        let sizes = this.randomizeSizes();

        let pipe = new Pipe(this.ctx, sizes.x, sizes.yTop, sizes.yBottom, this.color);
        this.pipes.push(pipe);
    }

    checkPipes() {
        this.pipes.forEach(pipe => {
            if (pipe.x + pipeWidth <= 0) {
                this.createPipe();
                this.pipes.splice(this.pipes.indexOf(pipe), 1);
            }

        });
    }

    randomizeSizes(randomDistance = true) {
        let totalSize = backgroundHeight - groundHeight - 30;
        let y1 = Math.floor(Math.random() * (pipeHeight - 110)) + 30
        let y2 = totalSize - y1 - 80;

        if (randomDistance) {
            let distance = this.pipes[this.pipes.length - 1].x + 170;
            return {
                x: distance,
                yBottom: y2,
                yTop: y1
            };

        } else {
            return {
                yBottom: y2,
                yTop: y1
            };
        }
    }

    createStartingPipes() {
        let sizes = this.randomizeSizes(false);
        let pipe = new Pipe(this.ctx, 400, sizes.yTop, sizes.yBottom, this.color);
        this.pipes.push(pipe);

        sizes = this.randomizeSizes(false);
        pipe = new Pipe(this.ctx, 570, sizes.yTop, sizes.yBottom, this.color);
        this.pipes.push(pipe);
    }
}