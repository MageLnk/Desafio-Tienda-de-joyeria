const HATEOAS = (products) => {
  let stocktotal = 0;
  const results = products
    .map((p) => {
      stocktotal = stocktotal + p.stock;
      return {
        name: p.nombre,
        href: `/joyas/filtros/${p.id}`,
      };
    })
    .slice(0, 4);
  const totalJoyas = products.length;
  const HATEOAS = {
    totalJoyas,
    stocktotal,
    results,
  };
  return HATEOAS;
};

module.exports = HATEOAS;
