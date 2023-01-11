const { getJewelers } = require("./Querys");
//
const controller = {};

controller.bringAllJewelry = async (req, res) => {
  console.log("Viendo algo", req.query);
  const jewelers = await getJewelers(req.query);
  res.status(200).send({
    msg: "Todo ok o k ase",
    jewelers,
  });
};

module.exports = controller;
