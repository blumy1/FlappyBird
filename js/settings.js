const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

const backgroundHeight = 512;
const backgroundWidth = 288;
const groundHeight = 112;
const groundWidth = 336;
const pipeHeight = 320;
const pipeWidth = 52;
const birdHeight = 18;
const birdWidth = 28;
const gameOverHeight = 42;
const gameOverWidth = 192;
const getReadyHeight = 267;
const getReadyWidth = 184;
let gravity = 0.5;
const lift = 7.5;