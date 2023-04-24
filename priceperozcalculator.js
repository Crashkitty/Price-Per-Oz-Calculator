// We're asked to create a pricePerOunceCalculator
// Convert prices to numbers and remove '$' sign
// Convert weight to ounces, using .slice method
// Calculate price per ounce, using .slice method
// Round to 2 decimal places with Math.round method
// Determine cheapest product  
// Return price of each price per Oz and cheapest price

function pricePerOzCalculator(product1, product2) {
 const price1 = Number(product1.price.slice(1));
  const price2 = Number(product2.price.slice(1));

  const weight1 = Number(product1.weight.slice(0, -3)) * 16;
  const weight2 = Number(product2.weight.slice(0, -3)) * 16;

  const pricePerOz1 = price1 / weight1;
  const pricePerOz2 = price2 / weight2;

  const roundedPricePerOz1 = Math.round(pricePerOz1 * 100) / 100;
  const roundedPricePerOz2 = Math.round(pricePerOz2 * 100) / 100;

  let cheapest;
  if (roundedPricePerOz1 < roundedPricePerOz2) {
    cheapest = product1.name;
  } else if (roundedPricePerOz1 > roundedPricePerOz2) {
    cheapest = product2.name;
  } else {
    cheapest = 'both';
  }

  return [roundedPricePerOz1, roundedPricePerOz2, cheapest];
}
