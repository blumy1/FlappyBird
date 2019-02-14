import {
    gamePace,
    backgroundHeight,
    backgroundWidth
} from './game';

export default class Background {
    constructor(ctx, timeOfDay) {
        this.ctx = ctx;
        this.height = backgroundHeight;
        this.width = backgroundWidth;
        this.x = 0;
        this.reverseX = this.width;
        this.timeOfDay;

        switch (timeOfDay) {
            case 'day':
                this.timeOfDay = 'day';
                break;
            case 'night':
                this.timeOfDay = 'night';
                break;
            default:
                console.log('There is no such time of day to choose from');
                this.timeOfDay = 'day';
        }

        this.background = new Image(this.width, this.height);
        this.background.src = `./assets/sprites/background-${this.timeOfDay}.png`;
        this.backgroundReverse = new Image(this.width, this.height);
        this.backgroundReverse.src = `./assets/sprites/background-reverse-${this.timeOfDay}.png`;
    }

    showDynamic() {
        if (this.x <= -this.width) {
            this.x = this.reverseX + this.width;
        }

        if (this.reverseX <= -this.width) {
            this.reverseX = this.x + this.width;
        }

        this.ctx.drawImage(this.background, this.x, 0);
        this.ctx.drawImage(this.backgroundReverse, this.reverseX, 0);

        this.x -= gamePace;
        this.reverseX -= gamePace;
    }

    showStatic() {
        this.ctx.drawImage(this.background, this.x, 0);
        this.ctx.drawImage(this.backgroundReverse, this.reverseX, 0);
    }
}