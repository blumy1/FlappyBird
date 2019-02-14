import {
    pipeHeight,
    pipeWidth,
    backgroundHeight,
    groundHeight
} from './game';

export default class Pipe {
    constructor(ctx, x, yTop, yBottom, color, extra) {
        this.ctx = ctx;
        this.height = pipeHeight;
        this.width = pipeWidth;
        this.x = x;
        this.yTop = yTop;
        this.yBottom = yBottom;
        this.extra = extra;
        this.color;

        switch (color) {
            case 'green':
                this.color = 'green';
                break;
            case 'red':
                this.color = 'red';
                break;
            default:
                console.log('There is no such color to choose from');
                this.color = 'green';
        }

        this.pipeBottom = new Image(pipeWidth, pipeHeight);
        this.pipeBottom.src = `./assets/sprites/pipeBottom-${this.color}.png`;
        this.pipeTop = new Image(pipeWidth, pipeHeight);
        this.pipeTop.src = `./assets/sprites/pipeTop-${this.color}.png`;
    }

    show() {
        this.ctx.drawImage(this.pipeBottom, this.x, backgroundHeight - groundHeight - this.yBottom);
        this.ctx.drawImage(this.pipeTop, this.x, -this.height + this.yTop);
    }
}