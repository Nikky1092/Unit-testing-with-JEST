const {sum}= require('./app.js');
test ("adds 14 + 9 to equal 23", ()=>{
    let total= sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yen", function (){
    const {fromDollarToYen}= require("./app.js")

    const yen= fromDollarToYen(5)

    const expected= 5 * (127.9 / 1.2);

    expect(yen).toBe(expected);
})
test("One yen should be 0.00625 pounds", function (){
    const {fromYenToPound}= require("./app.js")

    const pound= fromYenToPound(10)

    const expected= 10 * (0.8/ 127.9);

    expect(pound).toBe(expected);
})