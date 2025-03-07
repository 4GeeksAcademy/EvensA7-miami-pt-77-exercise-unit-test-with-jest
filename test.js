// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 149.03 yen", function() {
    
    const { fromDollarToYen } = require('./app.js'); 
    
     expect(fromDollarToYen(10)).toBe(1493.3);
})

test("One yen should be 0.0072 pound)", function() {
   
    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound(1000)).toBe(7.2);
})