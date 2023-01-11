const { getJewelers } = require("./Querys");
//
const controller = {};

controller.test = async (req, res) => {
  const test = await getJewelers();
  res.status(200).send({
    msg: "Todo ok o k ase",
    test,
  });
};

module.exports = controller;
