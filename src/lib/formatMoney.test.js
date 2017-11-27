import formatMoney from './formatMoney';

it('should format integer values', () => {
  expect(formatMoney(50)).toBe('R$ 50,00');
});

it('should format money with one decimal', () => {
  expect(formatMoney(11.8)).toBe('R$ 11,80');
});

it('should format money with two decimals', () => {
  expect(formatMoney(100.99)).toBe('R$ 100,99');
});
