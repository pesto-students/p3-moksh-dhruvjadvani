/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let leastSoFar = Number.MAX_VALUE;
  let overallProfit = 0;
  let profitIfSoldToday = 0;


  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < leastSoFar) {
      leastSoFar = prices[i];
    }
    profitIfSoldToday = prices[i] - leastSoFar;
    if (profitIfSoldToday > overallProfit) {
      overallProfit = profitIfSoldToday;
    }
  }


  return overallProfit;
};
