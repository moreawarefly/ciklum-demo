function decorateCurrencyPairName(name) {
  if ((typeof name === 'string' || name instanceof String) && name.length === 6) {
    return `${name.substr(0, 3).toUpperCase()} <=> ${name.substr(3, 3).toUpperCase()}`;
  }
  throw new Error('Invalid input - expected 6-charactes string');
}

export default decorateCurrencyPairName;
