// ... (rest operator)
// Rest operator is used in 3 contexts
// 1. Along with final argument of a function
function foo( x, y, ...others ) {
    console.log( x );
    console.log( y );
    console.log( others );
}

foo( 15, 30, 45, 60, 75 );

// 2. Inside of array destructuring syntax
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
const [ first, second, ...otherDays ] = days;
console.log( first, second, otherDays ); // 'Mon', 'Tue', [ 'Wed', 'Thu', 'Fri' ]

// 3. Inside of objct destructuring
const john = {
    name: 'Jonathan',
    age: 32,
    address: {
        firstLine: '#32, Gachibowli',
        city: 'Hyderabad'
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};
const { name, age, ...otherDetailsOfJohn } = john;
console.log( name, age, otherDetailsOfJohn );