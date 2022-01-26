const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiplica 10 * 2 el resultado debe ser 20' ,()=>{
  expect(calculator.multiply(10,2)).toBe(20);
});

test('multiplica 5 * 3 el resultado debe ser 15' ,()=>{
  expect(calculator.multiply(5,3)).toBe(15);
});

test('divide 5 / 5 el resultado debe ser 1' ,()=>{
  expect(calculator.divide(5,5)).toBe(1);
});


test('divide 2 / 2 el resultado debe ser 1' ,()=>{
  expect(calculator.divide(2,2)).toBe(1);
});

