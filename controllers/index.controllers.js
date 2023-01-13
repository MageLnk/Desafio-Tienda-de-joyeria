const { getJewelers } = require("./Querys");
//
const controller = {};

controller.bringAllJewelry = async (req, res) => {
  try {
    const queryStrings = req.query;
    const jewelers = await getJewelers(queryStrings);
    res.status(200).send({
      totalJoyas: "En proceso de calcular el total",
      stockTotal: "En proceso de calcular el stock total",
      results: jewelers,
    });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
