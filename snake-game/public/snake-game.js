const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const width = canvas.width;
const height = canvas.height;

let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let direction = 'right';

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food.x = Math.floor(Math.random() * width / gridSize);
    food.y = Math.floor(Math.random() * height / gridSize);
}

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function draw() {
    clearCanvas();
    drawSnake();
    drawFood();
}

function main() {
    moveSnake();
    draw();
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    switch (key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
});

setInterval(main, 100);
