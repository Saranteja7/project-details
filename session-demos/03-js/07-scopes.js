var x = 1; // global variable

function foo() {
    var y = 2;
    var x = 3;

    console.log( 'within foo x = ', x );
    console.log( y );

    function bar() {
        var x = 4;
        z = 10; // global variable - since var is omitted when assigning z its initial value
        console.log( 'within bar x = ', x );
    }

    bar();
}

foo();
console.log( 'globally x = ', x );
// console.log( y ); // error