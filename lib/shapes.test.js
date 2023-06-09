const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

describe('Triangle', () => {
  test('render method should generate the SVG code for the triangle shape', () => {
    const triangle = new Triangle();
    const svgCode = triangle.render();
    // Write assertions to check if the generated SVG code is correct
    expect(svgCode).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});


describe('Circle', () => {
  test('render method should generate the SVG code for the circle shape', () => {
    const circle = new Circle();
    const svgCode = circle.render();
    // Write assertions to check if the generated SVG code is correct
    expect(svgCode).toEqual('<polygon points="placeholder"" />');
  });
});


describe('Square', () => {
  test('render method should generate the SVG code for the square shape', () => {
    const square = new Square();
    const svgCode = square.render();
    // Write assertions to check if the generated SVG code is correct
    expect(svgCode).toEqual('<polygon points="placeholder"" />');
  });
});