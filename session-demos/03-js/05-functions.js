function sum( x, y ) { // "function delcaration" syntax
    console.log( x, y );
    return x + y;
}

console.log( sum( 12, 13 ) );

var sum2 = function( x, y ) { // "function expression" syntax
    return x + y;
};

console.log( sum2( 12, 13 ) );

var sum3 = sum; // we can create as many references to an existing function
console.log( sum3( 12, 13 ) );

console.log( sum() ); // NaN - Not a Number (x = undefined, y = undefined)
console.log( sum( 12 ) ); // NaN again (x = 12, y is undefined)
console.log( sum( 12, 13, 14 ) ); // x = 12, y = 13