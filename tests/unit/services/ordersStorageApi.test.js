import {
  addOrder,
  getOrders,
} from '../../../services/ordersStorageApi';

describe('ordersStorageApi', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('addOrder', () => {
    it('should save stringified json to localstorage', () => {
      const input = { a: 1 };
      const expectedResult = JSON.stringify([input]);

      addOrder(input);

      expect(localStorage.__STORE__['orders']).toEqual(expectedResult);
    });
    it('should save single-item array json if orders key has rubbish', () => {
      const input = { a: 1 };
      const expectedResult = JSON.stringify([input]);

      localStorage.setItem('orders', 'rubbish');
      addOrder(input);

      expect(localStorage.__STORE__['orders']).toEqual(expectedResult);
    });
    it('should append input to existing array', () => {
      const existingArray = [{ a: 1 }];
      const input = { b: 2 };
      const expectedResult = JSON.stringify([input, ...existingArray]);

      localStorage.setItem('orders', JSON.stringify(existingArray));
      addOrder(input);

      expect(localStorage.__STORE__['orders']).toEqual(expectedResult);
    });
  });

  describe('getOrders', () => {
    it('should return empty array if orders key is missing', () => {
      const result = getOrders();
      const expectedResult = [];

      expect(result).toEqual(expectedResult);
    });
    it('should return empty array if orders key has rubbish', () => {
      localStorage.setItem('orders', 'rubbish');

      const result = getOrders();
      const expectedResult = [];

      expect(result).toEqual(expectedResult);
    });
    it('should return saved array in json', () => {
      localStorage.setItem('orders', 'rubbish');

      const result = getOrders();
      const expectedResult = [];

      expect(result).toEqual(expectedResult);
    });
    it('should save single-item array json if orders key has rubbish', () => {
      const expectedResult = [
        { a: 1 },
        { b: 2 },
      ];

      localStorage.setItem('orders', JSON.stringify(expectedResult));

      const result = getOrders();

      expect(result).toEqual(expectedResult);
    });
  });
});
