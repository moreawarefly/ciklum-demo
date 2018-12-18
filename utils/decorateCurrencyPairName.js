function decorateCurrencyPairName(name) {
  return `${name.substr(0, 3)} <=> ${name.substr(3, 3)}`;
}

export default decorateCurrencyPairName;
