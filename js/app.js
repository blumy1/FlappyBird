import Game from './game';

const canvas = document.getElementById('game');

const game = new Game(canvas, 288, 512);
game.play();

onkeydown = function(e) {
    if (e.keyCode == 32) {
        game.bird.flyUp();
    }
}

canvas.addEventListener('click', function(event) {
    game.bird.flyUp()
});