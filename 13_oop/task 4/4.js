class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    const img = document.createElement('img');
    img.src = this.imgUrl;
    this.html = img;
    this.render();
    document.body.style.background = 'black';
  }
  
  render() {
    document.body.append(this.html);
    this.html.style.position = 'fixed';
    this.html.style.top = `${this.top}px`;
    this.html.style.left = `${this.left}px`;
    this.html.style.width = `${this.width}px`;
  }

  moveUp() {
    this.top += 20;
    this.render();
  }
  moveDown() {
    this.top -= 20;
    this.render();
  }
  moveLeft() {
    this.left -= 20;
    this.render();
  }
  moveRight() {
    this.left += 20;
    this.render();
  }
}

class Circle extends Logo{
  constructor(size, color) {
    super();
    this.height = size;
    this.width = size;
    this.color = color;
    this.html = null;
  }

  render() {
    const div = document.createElement('div');
    this.html = div;
    super.render();
    this.html.style.position = '';
    this.html.style.height = `${this.height}px`;
    this.html.style.backgroundColor = `${this.color}`;
    this.html.style.borderRadius = '50%';
  }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
var mfCircle = new Circle(50, 'yellow');
console.log(mfLogotip);
console.log(mfCircle);

// запускаем наше микро-приложение
mfLogotip.init();
mfCircle.render();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveUp();
mfLogotip.moveUp();
mfLogotip.moveUp();
mfLogotip.moveDown();