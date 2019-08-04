var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    1
];

console.log( days[0] );
console.log( days[3] );
console.log( days[4] ); // undefined

days.push( 'Wednesday' );
console.log( days );

console.log( days.length );