const { getJewelers } = require("./Querys");
//
const controller = {};

controller.bringAllJewelry = async (req, res) => {
  const queryStrings = req.query;
  const jewelers = await getJewelers(queryStrings);
  res.status(200).send({
    msg: "Todo ok o k ase",
    jewelers,
  });
};

module.exports = controller;
