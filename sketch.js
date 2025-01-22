class Ball {
  constructor(x, y, speedX, speedY, diameter) {
    this.x = width / 2;
    this.y = height / 2;
    this.speedX = speedX;
    this.speedY = speedY;
    this.diameter = diameter;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }

    if (this.x > width || this.x < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }

    const hitPlayerX =
      this.x < 40 && this.y > player.y && this.y < player.y + player.height;

    if (hitPlayerX) {
      this.speedX *= -1;
      this.speedX * 1.1;
      this.speedY * 1.1;
    }

    const hitPlayerY =
      this.x > width - 40 &&
      this.y > player2.y &&
      this.y < player2.y + player2.height;

    if (hitPlayerY) {
      this.speedX *= -1;
      this.speedX * 1.1;
      this.speedY * 1.1;
    }
  }

  display() {
    noStroke();
    fill("#748DA6");
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  update() {
    if (this.x < width / 2) {
      this.y = mouseY;
    } else {
      if (ball.y > this.y + this.height / 2) {
        this.y += 5;
      } else {
        this.y -= 5;
      }
    }

    if (this.y < 0) {
      this.y = 0;
    } else if (this.y > height - this.height) {
      this.y = height - this.height;
    }
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

let ball;
let player;
let player2;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);

  ball = new Ball(
    100,
    100,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    50
  );

  player = new Player(10, 100, 10, 100, "#F2D7D9");
  player2 = new Player(width - 20, 100, 10, 100, "#D3CEDF");
}

function draw() {
  background("#9CB4CC");
  ball.move();
  ball.display();
  player.update();
  player.display();

  player2.update();
  player2.display();
}
