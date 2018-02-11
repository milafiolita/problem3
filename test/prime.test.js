const fpb = require('../src/prime');

test('Faktor prima terbesar dari 600851475143 adalah ', () => {
  expect(fpb(600851475143)).toBe(6857);
})
