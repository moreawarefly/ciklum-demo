function decorateCurrencyPairName(name) {
  return `${name.substr(0, 3).toUpperCase()} <=> ${name.substr(3, 3).toUpperCase()}`;
}

export default decorateCurrencyPairName;
