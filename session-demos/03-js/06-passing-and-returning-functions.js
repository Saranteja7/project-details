/*
    Function are "first-class citizens"
    Function ARE objects in JS
*/
function foo( cb ) {
    cb();

    function sayBye() { // this function can be used within foo
        console.log( 'bye' );
    }

    return sayBye; // we can return a function too!
}

foo.x = 10; // ok

foo.bar = function() { // ok
    console.log( 'foo.bar called' );
};

function sayHello() { // we can have a function without a name too - it can be anonymous
    console.log( 'hello' );
}

const result = foo( sayHello );
result();

