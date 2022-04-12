import calculateTotal from '../calculate.js';

test('basic test', () => {
  const result = 34;
  expect(result).toBe(34);
});

test('calculateTotal sum without discount', () => {
  const list = [
    {
      id: 475,
      name: 'Психология',
      count: 1,
      price: 1200,
    },
    {
      id: 476,
      name: 'Логика',
      count: 3,
      price: 600,
    },
  ];
  const result = calculateTotal(list);

  expect(result).toBe(3000);
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 475,
      name: 'Психология',
      count: 1,
      price: 1200,
    },
    {
      id: 476,
      name: 'Логика',
      count: 3,
      price: 601,
    },
  ];
  const result = calculateTotal(list, true);

  expect(result).toBe(1531.53);
});
