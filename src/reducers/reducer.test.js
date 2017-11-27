import reducer from './index';
import { addItem, removeItem } from '../actions';
import gamesData from '../data/mock.json';

const defaultState = {
  cart: gamesData,
};

describe('reducers', () => {
  it('should add an item when ADD_ITEM action is called', () => {
    const newItem = {
      id: 399,
      name: 'New Test Game',
      price: 199.99,
      score: 150,
      image: 'test-image.png',
    };

    const action = addItem(newItem);

    const newState = reducer(defaultState, action);

    expect(newState.cart).toContainEqual(newItem);
  });

  it('should remove an item when REMOVE_ITEM action is called', () => {
    const itemToRemove = {
      id: 312,
      name: 'Super Mario Odyssey',
      price: 197.88,
      score: 100,
      image: 'super-mario-odyssey.png',
    };
    const action = removeItem(itemToRemove);
    const newState = reducer(defaultState, action);

    expect(defaultState.cart).toContainEqual(itemToRemove);
    expect(newState.cart).not.toContainEqual(itemToRemove);
  });

  it('should not add the same item twice', () => {
    const newItem = {
      id: 399,
      name: 'New Test Game',
      price: 199.99,
      score: 150,
      image: 'test-image.png',
    };

    const action = addItem(newItem);

    let newState = reducer(defaultState, action);
    newState = reducer(newState, action);

    const unDuplicatedCart = newState.cart.filter(item => item.id === newItem.id);

    expect(unDuplicatedCart.length).toBeLessThanOrEqual(1);
  });
});
