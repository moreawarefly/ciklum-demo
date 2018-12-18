function saveOrder(order) {
  localStorage.orders = [...localStorage.orders, order];
}
function getOrders() {
  return localStorage.orders;
}

export {
  saveOrder,
  getOrders,
};
