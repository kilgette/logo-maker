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

// Write similar tests for Circle and Square classes