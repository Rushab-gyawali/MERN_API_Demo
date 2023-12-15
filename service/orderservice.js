const db = require("../config/dbconfig");

const getAllOrders = async () => {
  return await db.Order.findAll();
};

const getOrderbyId = async (id) => {
  return await db.Order.findByPk(id);
};

const createOrder = async ({ Title, Quantity, City }) => {
  const newOrder = await db.Order.create({ Title, Quantity, City });
  return newOrder;
};

const updateOrder = async (Id, { Title, Quantity, City }) => {
  await db.Order.update({ Title, Quantity, City }, { where: { Id: Id } });
  return { Id, Title, Quantity, City };
};

module.exports = {
  getAllOrders,
  getOrderbyId,
  createOrder,
  updateOrder,
};
