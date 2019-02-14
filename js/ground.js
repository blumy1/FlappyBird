import {
    backgroundHeight,
    gamePace,
    groundHeight,
    groundWidth
} from './game';

export default class Ground {
    constructor(ctx) {
        this.ctx = ctx;
        this.height = groundHeight;
        this.width = groundWidth;
        this.ground = new Image(this.width, this.height);
        this.ground.src = './assets/sprites/base.png';
        this.x = 0;
        this.reverseX = this.width;
    }

    showDynamic() {
        if (this.x <= -this.width) {
            this.x = this.reverseX + this.width;
        }

        if (this.reverseX <= -this.width) {
            this.reverseX = this.x + this.width;
        }

        this.ctx.drawImage(this.ground, this.x, backgroundHeight - this.height);
        this.ctx.drawImage(this.ground, this.reverseX, backgroundHeight - this.height);

        this.x -= gamePace;
        this.reverseX -= gamePace;
    }

    showStatic() {
        this.ctx.drawImage(this.ground, this.x, backgroundHeight - this.height);
        this.ctx.drawImage(this.ground, this.reverseX, backgroundHeight - this.height);
    }
}