function addOrder(order) {
  let currentOrders;

  try {
    currentOrders = JSON.parse(localStorage.orders);
  } catch (e) {
    currentOrders = [];
  }

  localStorage.setItem('orders', JSON.stringify([order, ...currentOrders]));
}

function getOrders() {
  let orders;

  try {
    orders = JSON.parse(localStorage.orders);
  } catch (e) {
    localStorage.setItem('orders', JSON.stringify([]));
    orders = [];
  }
  return orders;
}

export {
  addOrder,
  getOrders,
};
