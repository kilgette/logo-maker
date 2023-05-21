class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  // render() {
  //   return this.color
  // }
}
render (color, text){
  return '`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points = "145, 15 239, 179 59, 179" fill="${this.color}" /polygon><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill ="white">${this.text}</text></svg>`'
}

module.exports = Triangle;
