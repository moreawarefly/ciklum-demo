const pairDropdown = {
  label: 'Pair',
  name: 'pair',
};
const sideDropdown = {
  label: 'Side',
  name: 'side',
  items: [
    {
      key: 'buy',
      label: 'BUY',
      value: 'buy',
    },
    {
      key: 'sell',
      label: 'SELL',
      value: 'sell',
    },
  ],
};
const orderTypeDropdown = {
  label: 'Order type',
  name: 'orderType',
  items: [
    {
      key: 'market',
      label: 'MARKET',
      value: 'market',
    },
    {
      key: 'limit',
      label: 'LIMIT',
      value: 'limit',
    },
  ],
};
const limitInput = {
  label: 'Limit',
  name: 'limit',
};
const quantityInput = {
  label: 'Quantity',
  name: 'quantity',
};
const submitInput = {
  label: 'Save',
};

export {
  pairDropdown,
  sideDropdown,
  orderTypeDropdown,
  limitInput,
  quantityInput,
  submitInput,
};
