const { getJewelers, filterJewels } = require("../tools/Querys");
const hateOAS = require("../tools/hateOAS");
//
const controller = {};

controller.bringAllJewelry = async (req, res) => {
  try {
    const queryStrings = req.query;
    const jewelers = await getJewelers(queryStrings);
    const trullyHATE = hateOAS(jewelers);
    res.status(200).send(trullyHATE);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.bringDetailJewel = async (req, res) => {
  try {
    const filteredJewels = await filterJewels(req.query);
    res.status(200).send(filteredJewels);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
