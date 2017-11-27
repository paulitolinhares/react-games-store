import calcOrder from './calcOrder';
import mockData from '../data/mock.json';

const smallMock = mockData.slice(0, 2);
const smallOrderData = calcOrder(smallMock);
const orderData = calcOrder(mockData);

it('should add R$ 10,00 to the shipping for each product', () => {
  expect(smallOrderData.shipping).toBe(20);
});

it('should have free shipping for orders above R$ 250,00', () => {
  expect(orderData.shipping).toBe(0);
});

it('should have the total equal to the subtotal for orders above R$ 250,00', () => {
  expect(orderData.total).toEqual(orderData.subtotal);
});

it('should have the total equal to the subtotal + shipping for orders under R$ 250,00', () => {
  expect(smallOrderData.total).toEqual(smallOrderData.subtotal + smallOrderData.shipping);
});
