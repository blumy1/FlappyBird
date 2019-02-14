import {
    birdHeight,
    birdWidth,
    backgroundHeight,
    gravity,
    lift
} from './game';

export default class Bird {
    constructor(ctx, color) {
        this.height = birdHeight;
        this.width = birdWidth;
        this.velocity = 0;
        this.angle = 0;
        this.x = 70;
        this.y = backgroundHeight / 2 - (2 * this.height);
        this.ctx = ctx;
        this.color;

        switch (color) {
            case 'yellow':
                this.color = 'yellow';
                break;
            case 'blue':
                this.color = 'blue';
                break;
            case 'red':
                this.color = 'red';
                break;
            default:
                console.log('There is no such color to choose from');
                this.color = 'yellow';
        }

        this.birdMidFlap = new Image(this.birdWidth, this.birdHeight);
        this.birdMidFlap.src = `./assets/sprites/${this.color}bird-midflap.png`;
        this.birdDownFlap = new Image(this.birdWidth, this.birdHeight);
        this.birdDownFlap.src = `./assets/sprites/${this.color}bird-downflap.png`;
        this.birdUpFlap = new Image(this.birdWidth, this.birdHeight);
        this.birdUpFlap.src = `./assets/sprites/${this.color}bird-upflap.png`;
    }

    show() {
        this.ctx.drawImage(this.birdMidFlap, this.x, this.y);

        this.velocity += gravity;
        if (this.velocity >= 10) {
            this.velocity = 10;
        }

        this.y += this.velocity;
    }

    flyUp() {
        this.velocity = -lift;
    }

}