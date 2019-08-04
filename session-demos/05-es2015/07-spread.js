// ... (spread operator) - inverse of rest (roughly speaking)
// 1. To pass array items as arguments to a function
console.log( Math.max( 10, 50, 30, 60, 30, 15 ) );

const numbers = [ 10, 50, 30, 60, 30, 15 ];
console.log( Math.max( ...numbers ) ); // spread operator applied to an array will evaluate to comma-separated list of the array's items

// 2. Use spread operator to concatenate these arrays
const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

// 3. Use spread to get a comma-separated list of key : value pairs
const john = {
    name: 'Jonathan',
    age: 32,
    emailids: [ 'john@gmail.com', 'john@yahoo.com' ]
};

const johnCopy = {
    ...john
};

const johnPersonal = {
    name: 'Jonathan Doe',
    spouseName: 'Jane',
    bankAccountNumber: '123456789'
};

// Create johnMasterDetails object with all details of John
const johnMasterDetails = { // name's value will come from johnPersonal (last one in list)
    ...john,
    emailids: [ ...john.emailids ], // we overwrite the emailids property and set its value to an explicit copy of john.emailids array
    ...johnPersonal
};
console.log( johnMasterDetails );

johnMasterDetails.age++; 
// make a change to john.emailids and check if johnMasterDetails.emailids has changed too
john.emailids.push( 'john@verizon.com' );

console.log( john ); // has John's age changed?
console.log( johnMasterDetails ); // age would be increased
