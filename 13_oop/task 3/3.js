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

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveUp();
mfLogotip.moveUp();
mfLogotip.moveUp();
mfLogotip.moveDown();