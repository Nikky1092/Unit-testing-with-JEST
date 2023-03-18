
const sum=(a,b) => {
    return a+b;
}
console.log (sum(7,3));


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(amount) {
  let dollars= amount * oneEuroIs.USD;
  return dollars;
}

function getCurrency(amount, expectedCurrency, mainCurrency){
//  The function getValueperUnit() helps to find out what amount of a currency(e.g. pounds) there is in one unit of another currency (1 USD). 
// The result would be 1 dollar= 0.8/1.2 = 0.96 pounds.
  function getValueperUnit(expectedCurrency, mainCurrency){
    return expectedCurrency / mainCurrency;
  }
  let NewValue=getValueperUnit(expectedCurrency,mainCurrency);
  
  return amount * NewValue;
}

// The function getCurrency () helps to convert a specific amount to that currency (e.g pound).

function fromDollarToYen(amount){
  return getCurrency(amount, oneEuroIs.JPY, oneEuroIs.USD);
}

function fromYenToPound(amount){
  return getCurrency(amount, oneEuroIs.GBP, oneEuroIs.JPY);
}

module.exports= {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}