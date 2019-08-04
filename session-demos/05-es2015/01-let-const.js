// console.log( x ); // ReferenceError: x is not defined
console.log( y ); // y = undefined
// console.log( z ); // ReferenceError: z is not defined

let x = 1;
var y = 1;
const z = 1;

function foo( ) {
    if( true ) {
        var a = 1; // foo-scoped variable
        let b = 1; // block-scoped variable
    }

    console.log( 'a = ', a );
    // console.log( 'b = ', b );
}
foo();

const p = 1;
let q = 1;
q++;
// p++; // error - constant value

const john = {
    name: 'John',
    age: 32
};

john.age++;
console.log( john );

// john = { // error - constant variable
//     name: 'Jonathan',
//     age: 33
// }

// allowed in JS - variables have no fixed data type
var x = 1;
x = 'hello';
console.log( typeof x ); // "string"