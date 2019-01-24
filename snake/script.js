
//unpure functions
function newFood(){
    return foodInGrid(RANGE_X, RANGE_Y);
}

function drawElement({ x, y }, color = 'lime') {
    const t = transform({ x, y });
    context.fillStyle = color;
    context.fillRect(t.x, t.y, ELEMENT_SIZE - 2, ELEMENT_SIZE - 2);
}

function drawSnake(snake, color = '#aaff33') {
    snake.body.forEach(e => drawElement(e, color));
}

function refresh() {
    if(nextVector){
        snake.setVector(nextVector);
         nextVector = null;
    }
    snake.move();
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake(snake);
    drawElement(food, color = '#ff6600')
}

function flash(background, snakeColor) {
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake(snake, color = snakeColor);
}

function start() {
    food = newFood();
    snake = new Snake();
    game = setInterval(refresh, 1000 / 16);
}

function submitVector(v){
    nextVector = v;
}

// pure functions
const getMove  = (key) => MOVES[key] || (() => {});

const overlap  = (a, b) => a.x === b.x && a.y === b.y;

const sleep    = (ms) => new Promise(r => setTimeout(r, ms));

const next     = (pos, diff, range) => (range + pos + diff) % range;

const flashFor = (background, snakeColor) => () => flash(background, snakeColor);

const add      = (vec1, vec2) => ({x: vec1.x + vec2.x, y: vec1.y + vec2.y});

const isZero   = (vec) => vec.x === 0 && vec.y ===0;

const opposite = (vec1, vec2) => isZero(add(vec1, vec2))


const transform = ({ x, y }) => ({
    x: x * ELEMENT_SIZE,
    y: y * ELEMENT_SIZE
});

const foodInGrid = (rangeX, rangeY) => ({
    x: Math.floor(Math.random() * rangeX),
    y: Math.floor(Math.random() * rangeY)
});


//constants
const canvas  = document.getElementById('game'),
      context = canvas.getContext('2d');

const ELEMENT_SIZE = 20,
      RANGE_X      = 30,
      RANGE_Y      = 30;

const VECTORS = {
    'ArrowRight' : { x: 1, y: 0 }, // left
    'ArrowUp' :   { x: 0, y: -1 }, // up
    'ArrowLeft': { x: -1, y: 0 }, // right
    'ArrowDown' : { x: 0, y: 1 }, // down
};

const MOVES = {
    'j': () => snake.turnLeft(),
    'k': () => snake.turnRight()
};

const DEATH_FLASHES = [
    flashFor('red', 'black'),
    flashFor('black', 'white'),
    flashFor('red', 'black')
];

class Snake {
    constructor() {
        this.size = 0;
        this.body = [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }];
        this.vector = VECTORS['ArrowRight'];
        this.eaten = [];
    }

    eat(location) {
        this.eaten.push(this.body[0]);
        document.dispatchEvent(new Event('foodEaten'));
    }

    die() {
        document.dispatchEvent(new Event('death'));
    }

    move() {
        const head = this.body[0];
        const tail = this.body[this.body.length - 1];


        const newHead = {
            x: next(head.x, this.vector.x, RANGE_X),
            y: next(head.y, this.vector.y, RANGE_Y)
        }

        if (this.body.some(part => overlap(part, newHead))) {
            this.die();
            return;
        }

        this.body.unshift(newHead);

        if (overlap(newHead, food)) {
            this.eat();
        }

        if (this.eaten.length && this.eaten[0] === tail) {
            this.eaten.shift();
        } else {
            this.body.pop();
        }
    }

    setVector(v){
        if(!v || opposite(v, this.vector)){
            return;
        }

        this.vector = v;
    }
}

let game;
let snake;
let food;
let nextVector = null;

document.addEventListener('keydown', e => submitVector(VECTORS[e.key]));
document.addEventListener('foodEaten', () => { food = newFood() });
document.addEventListener('death', async() => {
    clearInterval(game);

    for (let f of DEATH_FLASHES) {
        await sleep(50);
        f();
        await sleep(50);
    }

    start();
});

start();
