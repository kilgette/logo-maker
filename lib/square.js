class Square {
  constructor(color, text) {
    this.color=color;
    this.text = text;
  }
  // }
  // render() {
  //   return this.color
  // }


render(){
  return '`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x = "75" y = "35" width="150" height = "150" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`'
}
}

module.exports = {Square}

