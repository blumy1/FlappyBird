import Bird from './bird';
import Background from './background';
import Ground from './ground';
import PipeManager from './pipeManager';
import CollisionDetector from './collisionDetector';

export const backgroundHeight = 512;
export const backgroundWidth = 288;
export const groundHeight = 112;
export const groundWidth = 336;
export const pipeHeight = 320;
export const pipeWidth = 52;
export const birdHeight = 24;
export const birdWidth = 34;
export const gravity = 0.5;
export const lift = 7.5;
export const gamePace = 1.5;

export default class Game {

    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx = canvas.getContext('2d');
        this.bird = new Bird(this.ctx, 'yellow');
        this.ground = new Ground(this.ctx);
        this.background = new Background(this.ctx, 'day');
        this.pipeManager = new PipeManager(this.ctx, 'green');
        this.CollisionDetector = new CollisionDetector();
    }

    play() {
        this.background.showDynamic();
        this.pipeManager.show();
        this.ground.showDynamic();
        this.CollisionDetector.checkBird(this.bird);
        this.bird.show();
        requestAnimationFrame(this.play.bind(this));
    }

}
