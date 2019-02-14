import {
    backgroundHeight,
    groundHeight,
    birdHeight
} from './game';

export default class CollisionDetector {

    checkBird(bird) {
        if (bird.y <= 0) {
            bird.y = 0;
        }

        if (backgroundHeight - groundHeight <= bird.y + birdHeight) {
            bird.y = backgroundHeight - groundHeight - birdHeight;
            bird.y = backgroundHeight - groundHeight - birdHeight
        }
    }
}