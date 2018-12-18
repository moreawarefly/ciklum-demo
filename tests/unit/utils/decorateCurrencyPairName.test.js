import decorateCurrencyPairName from '../../../utils/decorateCurrencyPairName';

describe('decorateCurrencyPairName', () => {
  it('returns decorated input', () => {
    const input = 'abcdef';
    const result = decorateCurrencyPairName(input);
    const expectedResult = 'ABC <=> DEF';
    expect(result).toEqual(expectedResult);
  });

  it('returns unchanged input if invalid', () => {
    const input = 'abc';
    expect(() => {
      decorateCurrencyPairName(input).toThrow();
    }).toThrow();
  });

  it('throws error if input is not a string', () => {
    const input = undefined;
    expect(() => {
      decorateCurrencyPairName(input).toThrow();
    }).toThrow();
  });
});
